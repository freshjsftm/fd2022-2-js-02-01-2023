class MyArrayIterator {
  constructor(myArrayInstance) {
    this.collection = myArrayInstance;
    this.currentIndex = 0;
  }
  next() {
    return {
      value: this.collection[this.currentIndex++],
      done: this.currentIndex > this.collection.length,
    };
  }
}

class MyArray {
  constructor() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
  push() {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  reverse() {
    const newMyArray = new MyArray();
    for (let index = this.length - 1; index >= 0; index--) {
      newMyArray.push(this[index]);
    }
    for (let index = 0; index < this.length; index++) {
      this[index] = newMyArray[index];
    }
    return newMyArray;
  }
  forEach(func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index], index, this);
    }
  }
  some(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this)) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this) === false) {
        return false;
      }
    }
    return true;
  }

  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}

const myArr = new MyArray(10, 20, 30, 40);
const iterator2 = myArr[Symbol.iterator]().next();

console.log(...myArr);

for (const elem of myArr) {
  console.log(elem);
}
