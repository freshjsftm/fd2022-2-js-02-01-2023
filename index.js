/*
not modify:
indexOf, lastIndexOf, includes
reduce
concat
slice
find, findIndex, findLast, findLastIndex

modify:
push, pop
unshift, shift
splice
reverse
*/

const arr1 = [1, 2, 3, 4, 9, 6, 7];

//const result1 = arr1.slice(3);
// const result1 = arr1.findIndex(function (currentElement) {
//   return currentElement > 4;
// });
const result1 = arr1.reverse();
console.log(arr1);
console.log(result1);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const result2 = arr2.splice(3);
// console.log(arr2)
// console.log(result2);

//написати функцію, яка приймає два пареметри: мінімум і максимум діапазону
//повертає масив, значеннями якого будуть усі числа з діапазону, включаючи мінімум і максимум
//третій необов'яковий аргумент функції приймає шаг для визначення елементів
//за замовчуванням шаг = 1
/**
 *
 * @param {number} min
 * @param {number} max
 * @param {number} step default value = 1
 * @returns {[number]} [number]
 */
function getArrayByRange(min, max, step = 1) {
  // if (min > max) {
  //   const buffer = min;
  //   min = max;
  //   max = buffer;
  // }
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}
console.log(getArrayByRange(3, 18, 5, false));
console.log(getArrayByRange(33, 10, 7, false));
