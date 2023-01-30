"use strict";

const arr = [1, 5, 9];

const iterator = arr[Symbol.iterator]()
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const elem of arr) {
  console.log(elem);
}

console.log(...arr);
