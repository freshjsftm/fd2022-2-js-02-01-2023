"use strict";

const obj={
  prop:12,
  1:12,
}
const arr = []
const f = ()=>{}

const map1 = new Map();
map1.set(true, 'true');
map1.set(obj, 'obj');
map1.set(arr, 'arr');
map1.set(1, 10000);
map1.set(f, 'func');
console.log(map1);
console.log(map1.get(1));
map1.delete(1)
console.log(map1.has(1));