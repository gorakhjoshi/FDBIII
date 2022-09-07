// typescript generic
class Queue<T> {
  data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const firstObj: Queue<number> = new Queue();
firstObj.push(30);
firstObj.push(40);
console.log(firstObj);

const secondObj: Queue<string> = new Queue();
secondObj.push("30");
secondObj.push("hello");
console.log(secondObj);
