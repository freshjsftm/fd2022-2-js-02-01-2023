"use strict";

const f1 = function (num, ...rest) {
  console.log("num", num);
  console.log("f1", rest);
};
const f2 = (...args) => {
  console.log("f2", args);
};

// console.dir(f1)
// console.dir(f2)

f1(1, 2, 3);
f2(1, 2, 3);

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає сумму
//якщо викликаємо без аргументів - повернути null
const getSummaArgs = (...args) => {
  if (args.length === 0) {
    return null;
  }
  return args.reduce((acc, arg) => {
    return acc + arg;
  });
};
//const getSummaArgs2 = (...args) => {return args.length === 0 ? null : args.reduce((acc, arg) => acc + arg)};
const getSummaArgs2 = (...args) =>
  args.length === 0 ? null : args.reduce((acc, arg) => acc + arg);
console.log(getSummaArgs());
console.log(getSummaArgs(1, 2, 3));
console.log(getSummaArgs2());
console.log(getSummaArgs2(2, 3, 4));

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає середнє значення
const getAverageArgs = (...args) =>
  args.length === 0 ? null : args.reduce((acc, arg) => acc + arg) / args.length;
console.log(getAverageArgs(2, 3, 7));
