/**
 * Graph:
 *
 *    0------->2
 *    |        |
 *    v        |
 *    1        v
 *    |        5
 *    |        A
 *    v        |
 *    3------->4
 *
 *   How we know to use BFS? Whenever we want to find the shortest path (commonly the best strategy)
 *
 *
 */

const { Queue } = require("../queue");

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [3, 4],
  [2, 5],
  [4, 5],
];

const processDirectedGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [s, e] = edge;
    graph[s] ? graph[s].push(e) : (graph[s] = [e]);
  });
  return graph;
};

const findLength = (edges, startNode, endNode) => {
  const graph = processDirectedGraph(edges);
  const q = new Queue([[startNode, 0]]);
  while (q.array.length) {
    const [currentNode, dist] = q.dequeue();
    if (currentNode === endNode) {
      return dist;
    }
    const neighbors = graph[currentNode];
    neighbors.forEach((neighbor) => q.enqueue([neighbor, dist + 1]));
  }
  return -1;
};

const l = findLength(edges, 0, 5);
console.log(l);
