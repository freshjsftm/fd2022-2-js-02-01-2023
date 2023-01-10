const sum = function (number1, number2) {
  return number1 + number2;
};
const mult = function (number1, number2) {
  return number1 * number2;
};
const div = function (number1, number2) {
  return number1 / number2;
};
const sub = function (number1, number2) {
  return number1 - number2;
};
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {string} operator /*-+
 * @returns {number | null}
 */
const calculate = function (number1 = 10, number2 = 2, operator = "+") {
  let f = null;
  switch (operator) {
    case "*":
      //return mult(number1,number2);
      f = mult;
      break;
    case "/":
      //return div(number1,number2);
      f = div;
      break;
    case "+":
      //return sum(number1,number2);
      f = sum;
      break;
    case "-":
      //return sub(number1,number2);
      f = sub;
      break;
    default:
      return null;
  }
  return typeof f === "function" ? f(number1, number2) : null;
};

function HOF1(word, func) {
  func(word);
}
const HOF2 = function () {
  return function () {
    console.log("inner");
  };
};
const f1 = HOF2();
f1();
