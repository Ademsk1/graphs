/**
 *  A benchmark test on the shift method. See https://codereview.stackexchange.com/questions/255698/queue-with-o1-enqueue-and-dequeue-with-js-arrays and
 *   https://bugzilla.mozilla.org/show_bug.cgi?id=1348772#c2
 *
 */
const t = new Date();
// The function below: lowerRangeTests shows that up to lengths of 1 million items in an array, the shift function is O(1)
const fs = require("fs");
const lowerRangeTest = () => {
  avgDurations = "";
  for (let j = 1000000; j < 10000000; j += 100000) {
    const arr = [];
    for (let i = 0; i < j; i++) {
      arr.push(i);
    }
    s = 0;

    for (let k = 0; k < 3; k++) {
      const t = new Date();
      arr.shift();
      s += new Date() - t;
      arr.push(1);
    }
    avgDurations += `${j}, ${Math.round(s / 3)}\n`;
    console.log(`${(j - 1e7) / 1e6}`);
    console.log("itemsize");
    console.log(arr.itemsize());
  }

  fs.writeFileSync("lower_range_test.txt", avgDurations);
};

const upperRangeTest = () => {
  let avgDurations = "";

  for (let j = 1e7; j < 1e8; j += 1e6) {
    const arr = [];
    for (let i = 0; i < j; i++) {
      arr.push(i);
    }
    s = 0;
    for (let k = 0; k < 3; k++) {
      const t = new Date();
      arr.shift();
      s += new Date() - t;
      arr.push(1);
    }
    avgDurations += `${j}, ${Math.round(s / 3)}\n`;
    console.log(`${(j - 1e7) / 1e6}`);
  }
  fs.writeFileSync("upper_range_test.txt", avgDurations);
};

// upperRangeTest();
lowerRangeTest();
