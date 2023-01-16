const arr1 = [10, 20, 30, 40, 50, 60];
const arr2 = [1, 1, 1, 5];
const summa = arr2.reduce(function (accumulator, currentValue, index) {
  return accumulator + (index % 2 ? currentValue : 0);
}, 1000);
console.log(summa);
//const arr3 = arr1.concat(12,4,5)
//const arr3 = arr1.slice(2, -2)
//const key = 3;
// console.log(arr1);
// const arr3 = arr1.splice(2, 0, 77, 78, 79, 80);
// console.log(arr1);
// console.log(arr3);
// console.log(arr1.indexOf(key, 3));
// console.log(arr1.lastIndexOf(key));
// console.log(arr1.includes(key));

//написати функцію, яка буде приймати масив та рядок
//і повертати true, якщо рядок є в масиві
//і false, якщо рядку в масиві не має
//врахувати, що масив може бути порожнім!

/**
 *
 * @param {[string]} arr
 * @param {string} str
 * @returns {boolean}
 */
function hasElement(arr, str) {
  return arr.includes(str);
}

//console.log(hasElement(["qwe"], "qwe"));

//написати функцію, яка приймає масив з числами,
//повертає середнє значення усіх елементів масива
// [2,4] => 3
//врахувати, що масив може бути порожнім - повертати null

/**
 *
 * @param {[number]} arr
 * @returns {number | null}
 */
function getAverage(arr) {
  if (arr.length === 0) {
    return null;
  }
  // let summa = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   summa = summa + arr[i];
  // }
  const summa = arr.reduce(function (resAccum, elem) {
    return resAccum + elem;
  });
  return summa / arr.length;
}

