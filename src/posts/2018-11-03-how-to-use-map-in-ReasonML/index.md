---
title: How to use a Map in ReasonML
keywords: ReasonML
date: 2018-11-03T07:59:25.806Z
---

## Module Functor...

In ReasonML, `Map` is a module functor.

In OCAML,

```ocaml
 module IntPairs =
   struct
     type t = int * int
     let compare (x0,y0) (x1,y1) =
       match Pervasives.compare x0 x1 with
           0 -> Pervasives.compare y0 y1
         | c -> c
   end

 module PairsMap = Map.Make(IntPairs)

 let m = PairsMap.(empty |> add (0,1) "hello" |> add (1,0) "world")
```

`Map.Make` returns a module. It requires two parameters;

```reason
module TodoMap =
  Map.Make({
    /** key type */
    type t = int;

    /** key compare function: compare(key1, key2) */
    let compare = compare;
  });
```

And then creat an empty map first.

```reason
let todoMap: TodoMap.t(int) = TodoMap.empty
```

The type signature looks weird but that's how it is..

## Operations

### Add(Update)

You can add an item to the map using `TodoMap.add(id, item, mapInstance)`.
Note that there is no `TodoMap.update`.
If there exists the key, it will overwrite.

```reason
TodoMap.add(3, todoItem, todoMap)
```

### Lookup

Use `TodoMap.find(id, mapInstance)`.
Note that there is no safe method in ReasonML.
However, exception `Not_found` is thrown and it can be pattern matched.

So, it's going to look as below most of time

```reason
switch (TodoMap.find(id, state.todoMap)) {
| oldTodoItem => /** do something */
| exception Not_found => /** do something */
```

### Remove

Nothing special here. Don't forget to wrap with `switch` expression though.

```reason
switch (TodoMap.remove(id, state.todoMap)) {
| todoMap => ReasonReact.Update({todoMap: todoMap})
| exception Not_found => ReasonReact.NoUpdate
```

### To List (bindings)

In order to use the Map, you probably want `list('a)`.
And, the method is `TodoMap.bindings(mapInstance)` which returns `list((key, value))`

```reason
/** Returns list((int, todoItem)) */
TodoMap.bindings(todoMap)
```

### References

- https://reasonml.github.io/api/Map.html
