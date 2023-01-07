//напишіть функцію, яка приймає два числа (корректні)
//і повертає кратність першого другим

const number1 = 45;
const number2 = 9;
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @returns {boolean}
 */
const isMultiplicity = function (number1, number2) {
  return number1 % number2 === 0;
};

if (Number.isInteger(number1) && Number.isInteger(number2)) {
  console.log(isMultiplicity(number1, number2));
} else {
  console.log("number must be integer");
}
