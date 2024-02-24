Level Ordered Traversal: Goes level by level.
BFS is good for finding shortest path between two nodes

Scanning breadth means going level by level in terms of node distance between the start.

```
 0 <--> 2
a|
 v  d
 1 --> 3
e|     |f
 v     v
 4---->5
    g
```

Say we have the following graph. The first level to consider is 1 and 2, as they are a distance of 1 away from 0.
The logic is to iterate through this level, and take note of the immediate neighbours of that node and place it in a queue for later.

### Shortest path to 4 :

```
Current node: 0
Add in queue neighbouring nodes of 0 -> [1,2]
Take first element in queue: node 1
Is it the element we are searching for? No
Push its neighbouring nodes (not including current node 0) to the queue
Dequeue this element

0: Queue: [1,2]
1: Queue: [2,3,4]
2: Queue: [3,4]
3: Queue [4,5]
4: This is the value!
END

```

## Space/Time complexity

```
v = # of vertices
e = # of edges

```

Adding to the queue is O(v). We're also iterating through each edge of the node. We're also doing O(e). Therefore the time is O(v+e).

Space is determined by the queue. What is the maximum size of a queue? This is O(v-1)

NB:
Don't use arrays. Use actual queues!
