---
title: How to add styles to Jupyter (feat. NBViewer)
date: 2018-02-18T19:28:40
keywords: CSS, Jupyter Notebook
---

Although this method only works in [NBViewer](https://nbviewer.jupyter.org/ "NBViewer Website"), NBViewer is so much faster than GitHub rendering engine and it should be the standard way of publishing any notebook files.

## Preview

[Demo](https://nbviewer.jupyter.org/github/cynthia/pytudes/blob/CSS/ipynb/Cheryl.ipynb?flush_cache=true "Demo") is hosted at NBViewer.
or you can view the image.

<img src="https://user-images.githubusercontent.com/2981167/36359589-9fcd4b86-14d1-11e8-929d-77f76149d6f1.png" alt="Preview Image" />

## Embed CSS

### Use %%HTML

In Jupyter Notebook, you can embed any html using `%%HTML`. So, you can embed CSS using `<style>` tags.

```python
%%html
<style>
/* you can embed your CSS here */
</style>
```


### Use stylesheets

You can also embed `.css` files using `IPython.core.display.HTML` as below. It is important to run the cell such that the result is going to be embedded into the ipynb file.
`

```python
from IPython.core.display import HTML

def css_styling():
    styles = open("../styles/style.css", "r").read()
    return HTML("<style>{}</style>".format(styles))

css_styling()
```


## What style to add

```CSS
/* all notebook contents will be under this container */
#notebook-container {
  font-family: 'Spoqa Han Sans', sans-serif;
  font-size: 17px;
  line-height: 1.65;
}

/* all cell will have `.cell` class */
.cell {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

/* Markdown Paragraphs are wrapped in `.text_cell_render` */
.text_cell_render {
  padding: 0;
}

/* TypeScale Typography */
.text_cell_render p {
  margin-bottom: 1.3em;
}

.text_cell_render h1,
.text_cell_render h2,
.text_cell_render h3,
.text_cell_render h4 {
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: 1.2;
}

.text_cell_render h1 {
  margin-top: 0;
  font-size: 3.157em;
  text-align: center;
}

.text_cell_render h2 {
  font-size: 2.369em;
  border-bottom: .1em solid #0074D9;
}

.text_cell_render h3 {
  font-size: 1.777em;
}

.text_cell_render h4 {
  font-size: 1.333em;
}

/* Code Area */

.input_area>div,
.highlight {
  font-family: "D2 coding Ligature", monospace;
  font-size: 1.1em;
  line-height: 1.5;
}

/* Inline code inside markdown for local */
code,
pre {
  font-family: "D2 coding Ligature", monospace;
}

/* Inline code inside markdown for nbviewer */
.rendered_html p code {
  color: #Cd3700;
}
```
## Embed JS

You can also embed any JavaScript as well.

Similarly, you can use `<script>` or `%%javascript`

```python
%%html
<script>
alert("You can even embed a Javascript");
function toggleCell() {
    document
    .querySelectorAll(".highlight")
    .forEach(x => {
        if (x.style.display === "none")
          x.style.display = "";
        else
          x.style.display = "none";
    });
}
</script>
```

```python
%%javascript
alert("Hello World");
document.addEventListener("DOMContentLoaded", (event) => {
    toggleCell();
    let cells = document.querySelectorAll("div.cell");
    let last_cell = cells[cells.length - 1];
    let button = document.createElement("button");
    button.innerHTML = "클릭해주세요";
    last_cell.appendChild(button);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      toggleCell();
    });
});
```
