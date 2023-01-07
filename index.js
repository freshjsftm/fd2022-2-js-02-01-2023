//напишіть функцію, яка приймає два числа
//якщо числа парні - повертає суму
//якщо непарні - повертає результат множення
//якщо різні - повертає непарне

/**
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
const getResult = function (number1, number2) {
  //якщо числа парні - повертає суму
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    return number1 + number2;
  }
  //якщо непарні - повертає результат множення
  if (number1 % 2 && number2 % 2) {
    return number1 * number2;
  }
  //якщо різні - повертає непарне
  if (number1 % 2) {
    return number1;
  }
  return number2;
};

// const number1 = 5;
// const number2 = 3;
// let result;
// //debugger
// if (number1 % 2 === 0 && number2 % 2 === 0) {
//   result = number1 + number2;
// } else if (number1 % 2 && number2 % 2) {
//   result = number1 * number2;
// } else if (number1 % 2) {
//   result = number1;
// }else{
//   result = number2;
// }
