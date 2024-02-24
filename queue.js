class Queue {
  constructor(array = []) {
    this.array = array;
    this.idx = 0;
  }
  dequeue() {
    const next = this.array[this.idx];
    delete this.array[this.idx];
    this.idx++;
    console.log(next);
    return next;
  }

  enqueue(val) {
    this.array.push(val);
  }
}
exports.Queue = Queue;
