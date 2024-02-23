const input = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [3, 5],
  [4, 5],
];

const processUndirectedGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [node1, node2] = edge;
    graph[node1] ? graph[node1].push(node2) : (graph[node1] = [node2]);
    graph[node2] ? graph[node2].push(node1) : (graph[node2] = [node1]);
  });
  return graph;
};

const graph = processUndirectedGraph(input);
console.log(graph);
