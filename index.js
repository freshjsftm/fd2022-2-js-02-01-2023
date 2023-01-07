//напишіть функцію, яка приймає два числа
//і порівнює ці числа так:
//якщо перше більше другого - повертає 1
//якщо друге більше першого - повертає -1
//якщо числа однакові - повертає 0

// const compareTwoNumbers = function (number1, number2) {
//   if (number1 > number2) {
//     return 1;
//   }
//   if (number1 < number2) {
//     return -1;
//   }
//   return 0;
// };

const compareTwoNumbers = function (number1, number2) {
  if (number1 === number2) {
    return 0;
  }
  if (number1 > number2) {
    return 1;
  }
  return -1;
};
