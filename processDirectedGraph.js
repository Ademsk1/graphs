/**
 * Directed graph: All the edges have a specific direction
 *    <cb>
 *  0 <--> 2
 * a|
 *  v  d
 *  1 --> 3
 * e|     |f
 *  v     v
 *  4---->5
 *     g
 */
//              a       b     c       d    e     f      g
const input = [
  [0, 1],
  [0, 2],
  [2, 0],
  [1, 3],
  [1, 4],
  [3, 5],
  [4, 5],
];

//diagram out a edge: a: [0,1] or [1,0]. Let's let the initial element start, and last element end. So a: [1,0] is not true, but a: [0,1] is.

// find the shortest path from 0 -> 5

//O(e), e : no. of edges. Space: O(e).
const processDirectedGraph = (input) => {
  const graph = {};
  input.forEach((edge) => {
    const [start, end] = edge;
    graph[start] ? graph[start].push(end) : (graph[start] = [end]);
  });
  return graph;
};

const g = processDirectedGraph(input);
console.log(g);
