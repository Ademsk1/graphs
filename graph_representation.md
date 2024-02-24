# Graph Representation

There are 4 common representations of graphs in code:

- Adjacency List
- Adjacency Matrix
- Node class
- Grid

## Adjacency List

This is a representation of a graph using a hashmap. The keys represent the node (e.g '1'), and the value is an array of other node values that node '1' connects to:

```jsx
const graph = {
  0: [1, 2, 4],
  1: [0, 4],
  2: [0, 3],
  3: [2, 4],
  4: [0, 1, 3],
};
```

## Adjacency Matrix

If we were to represent a graph as an adjacency matrix, it would look like this:

```jsx
const adjacencyMatrix = [
  [1, 1, 1, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
];
```

It is a 2D grid consisting of boolean values. It is defined so that, if `adjacencyMatrix[i][j]` was true, then there exists an edge between node i and node j.

It typically arises as an input to a particular problem.

## Node Class

We can also represent each node as a class:

```
class Node {
    constructor(id, neighbours) {
        this.id = id
        this.neighbours = neighbours
    }
}
```

The id property is a number. The neighbours property is an array of Node objects.

## Grid

Some famous problems (e.g Number of Islands) work with a grid, and there is often a hidden or implicit graph represented in the grid.
Consider the example problem:

```
Given a grid of 0's and 1's, find the length of the shortest path from the top left corner to the bottom left corner that only consists of 0's. From each cell we can go up, down, left or right.

e.g
[
    [0,0,0],
    [1,1,0],
    [1,1,0]
]
```

To find the implicit graph, we should ask ourselves these questions:

- What are the nodes in my graph?
- what are the neighbours of a given node?

In this problem, the nodes are cells that contain 0's.

Given some node, how can we find the neighbors?
The neighbours of a node in this graph ar ethe adjacent positions that are in bounds and contains 0. Once we know our neighbours we can draw our edges.

```
0,0 -- 0,1 -- 0,2
               |
               |
              1,2
               |
               |
              2,2
```
