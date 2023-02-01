class Stack {
  constructor(maxSize, ...args) {
    this.maxSize = maxSize; 
    this._size = 0;
    for (const value of args) {
      this.push(value);
    }
  }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value <= 0 || value > MAX_SIZE_STACK) {
      throw new RangeError("must be less " + MAX_SIZE_STACK);
    }
    this._maxSize = value;
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(value) {
    if (this._size >= this.maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = value;
    return ++this._size;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastItem;
  }
  pick() {
    return this[`_${this._size - 1}`];
  }
}

// const stack = new Stack(5, 1, 27);
// console.log(stack);
// stack.push(7);
