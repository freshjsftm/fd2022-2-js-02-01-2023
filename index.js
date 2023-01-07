//функція додає два числа, які вводить користувач і логує суму

const userInput1 = prompt("Enter number: ", 6);
const userInput2 = prompt("Enter number: ", 3);

//debugger;

if (checkNumber(userInput1) && checkNumber(userInput2)) {
  console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
} else {
  console.log("error! value must be number!");
}

/**
 * Get summa two number
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function getSumTwoNumbers(number1=1, number2=2) {
  return number1 + number2;
}
console.log(getSumTwoNumbers())
console.log(getSumTwoNumbers(100))
console.log(getSumTwoNumbers(undefined, 100))



/**
 *
 * @param {any} value
 * @returns {boolean}
 */
function checkNumber(value) {
  const checkValue =
    value === "" || value === null || Number.isNaN(Number(value));
  return !checkValue;
}

/**
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {any | null}
 */
function getMaxValue(value1, value2) {
  if (typeof value1 === typeof value2) {
    if (value1 > value2) {
      return value1;
    }
    return value2;
  }
  return null;
}
console.log(getMaxValue("s", "h"));
console.log(getMaxValue("cat", "dog"));
console.log(getMaxValue("s", 5));
console.log(getMaxValue(40, 5));
console.log(getMaxValue(40, true));
