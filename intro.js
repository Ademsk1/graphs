//edges:

/**
 *      a
 *   1 --- 2
 *   |     | b
 *  d|     |
 *   3-----4
 */ c;
const a = [1, 2];
const b = [2, 4];
const c = [3, 3];
const d = [1, 3];

const input = [a, b, c, d];

//how to get from 1 to 4.

//define a mapping: given a node, here are the mappings of that node.
//use a hashmap:
const mapper = {
  //edge a: 1->2. edge d: 1->3
  1: [2, 3],
  //edge a: 2->1.
  2: [1, 4],
  //edge d: 3->1
  3: [1, 4],
  4: [2, 3],
};
