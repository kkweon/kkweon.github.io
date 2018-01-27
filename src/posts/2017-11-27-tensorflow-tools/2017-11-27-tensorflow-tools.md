---
title: Tensorflow tools
date: 2017-11-27
---

There are many tensorflow tools that are not widely known.

## Freeze Graph

[Freeze Graph][freezegraph] literally freezes the graph.

- Unnecessary nodes will be removed
- Model is one simple protobuf file (weights & graph definitions)

```bash
~/tensorflow/bazel-bin/tensorflow/python/tools/freeze_graph \
    --input_graph=your_graph_definition.pb                  \
    --input_checkpoint=your_tensorflow_checkpoint           \
    --input_binary=true                                     \
    --output_graph=frozen_graph.pb                          \
    --output_node_names=Softmax
```

`input_binary` means whether the input graph file is in binary format or not.

- If the file extension ends with `.pb`, it's binary format.
- If the file extension ends with `.pbtxt`, it's a txt format.

`node_names` are the names of tensors.
For example, you should be able to retrieve tensors by the name

```python
# retrieve tensors
image_input = graph.get_tensor_by_name('image_input:0')
keep_prob = graph.get_tensor_by_name('keep_prob:0')
softmax = graph.get_tensor_by_name('Softmax:0')

# operations
prob = sess.run(softmax, {image_input: some_image, keep_prob: 1.0})
```

And here is the code to load the freeze graph

```python
def load_graph(graph_file, use_xla=False):
    jit_level = 0
    config = tf.ConfigProto()

    if use_xla:
        jit_level = tf.OptimizerOptions.ON_1
        config.graph_options.optimizer_options.global_jit_level = jit_level

    with tf.Session(graph=tf.Graph(), config=config) as sess:
        gd = tf.GraphDef()

        with tf.gfile.Open(graph_file, 'rb') as f:
            data = f.read()
            gd.ParseFromString(data)

        tf.import_graph_def(gd, name='')

        # unnecessary: only to see how many operations are in the model
        ops = sess.graph.get_operations()
        n_ops = len(ops)

        return sess.graph, ops
```

After freezing, the number of operation has reduced by 88%.

```python
sess, base_ops = load_graph('base_graph.pb')
print(len(base_ops)) # 2165

sess, frozen_ops = load_graph('frozen_graph.pb')
print(len(frozen_ops)) # 245
```

## Optimize for Inference

For inference, it can be further optimized through [Optimize for Inference][optimize for inference]

- Some operations are not necessary for inference
    - For example, batch normalization can be removed after extracting mean and std
- Many operations can be fused into one
    - For example, 3 steps (CNN - BN - RELU) can be fused into one step (CNNBNRELU)

### Usage
```bash
bazel build tensorflow/python/tools:optimize_for_inference && \
bazel-bin/tensorflow/python/tools/optimize_for_inference      \
      --input=frozen_inception_graph.pb                       \
      --output=optimized_inception_graph.pb                   \
      --frozen_graph=True                                     \
      --input_names=Mul                                       \
      --output_names=softmax
```

### Result
Now the number of operation has reduced to 200.

```python
sess, optimized_ops = load_graph('optimized_graph.pb')
print(len(optimized_ops)) # 200
```

## Graph Transform

[Graph Transform][graph transform] allows to transform the graph.

For example,

- Float to Int
- 32 bits to 8 bits

There are so much less data. Now it runs so much faster.

### Is it okay?

For training, back propagation requires significant digits.
For inference, it's not necessary since we are interested in the highest output (label) not the value itself.


### Usage
```bash
bazel build tensorflow/tools/graph_transforms:transform_graph
bazel-bin/tensorflow/tools/graph_transforms/transform_graph \
      --in_graph=tensorflow_inception_graph.pb              \
      --out_graph=optimized_inception_graph.pb              \
      --inputs='Mul:0'                                      \
      --outputs='softmax:0'                                 \
      --transforms='
          strip_unused_nodes(type=float, shape="1,299,299,3")
          remove_nodes(op=Identity, op=CheckNumerics)
          fold_old_batch_norms
          '
```

### Result

Note that the number of operations has increased, but the model runs super fast with lower bits.

```python
sess, eightbit_ops = load_graph('eightbit_graph.pb')
print(len(optimized_ops)) # 425
```

## AOT & JIT
Tensorflow supports AOT and JIT compilation.

- AOT stands for "Ahead Of Time"
- JIT stands for "Just In Time"

Furthermore, it can be used not only for inference but also for training as well.

### Usage

```bash
# Create a TensorFlow configuration object.
config = tf.Config()

# JIT level, this can be set to ON_1 or ON_2
jit_level = tf.OptimizerOptions.ON_1
config.graph_options.optimizer_options.global_jit_level = jit_level

# Open a session with the config
with tf.Session(config=config) as sess:
    ...
```


[freezegraph]: https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/tools/freeze_graph.py "freeze graph"
[optimize for inference]: https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/tools/optimize_for_inference.py "optimize inference"
[graph transform]: https://github.com/tensorflow/tensorflow/blob/master/tensorflow/tools/graph_transforms/README.md
