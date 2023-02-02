"use strict";

const dictionary = new Map();
dictionary.set("dog", "пес");
dictionary.set("cat", "кіт");
dictionary.set("forest", "ліс");
dictionary.set("rat", "щур");
dictionary.set("field", "поле");
dictionary.set("funny", "веселий");
dictionary.set("sad", "сумний");
dictionary.set("happy", "щасливий");
dictionary.set("in", "у");
dictionary.set("at", "в");
dictionary.set("morning", "ранок");
dictionary.set("go", "ідти");
dictionary.set("jump", "стрибати");
dictionary.set("walk", "гуляти");
dictionary.set("talk", "розмовляти");
dictionary.set("and", "і");

const sentence = "In early morning very sad Dog and funny Cat go at forest with rat";

const translate = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => dictionary.has(word) ? dictionary.get(word) : word )
    .join(" ");
};
//console.log(translate(sentence))

//const keysIterator = dictionary.keys();
// for (const iterator of dictionary.keys()) {
//   console.log(iterator)
// }

// console.log(...dictionary.keys())
// console.log(...dictionary.values())
// for (const [key, value] of dictionary.entries()) {
//   console.log(key, value)
// }

const arrKeys = [...dictionary.keys()]
const obj = {1:1}
const arr = [1,1,1,1,1,4];
const set1 = new Set(arr);
// set1.add(1)
// set1.add(1)
// set1.add(1)
// set1.add('1')
// set1.add(arrKeys)
// set1.add(arrKeys)
// set1.add([1])
// set1.add(obj)
// set1.add(obj)
// set1.add(obj)
console.log(set1)

const arrUnique = [...new Set(arr).values()];