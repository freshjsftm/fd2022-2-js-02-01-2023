"use strict";
/**
 *
 * @param {number} num  = [0..10000]
 * @returns
 */
function recursion(num) {
  if (typeof num !== "number") {
    throw new TypeError("num must be number");
  }
  if (num > 10000 || num < 0) {
    throw new RangeError("num must be 0..10000");
  }
  if (num === 0) {
    return;
  }
  console.log(num);
  recursion(num - 1);
}

const power = (base, exp) => {
  if (typeof base !== "number" || typeof exp !== "number") {
    throw new TypeError("type be number");
  }
  if (exp < 0 || exp > 10000) {
    throw new RangeError("exp must be positive");
  }
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

//11226
//debugger

try {
  console.log("try");
  recursion("-50");
  recursion(5);
  console.log("try end");
} catch (error) {
  console.log("catch");
  console.log(error);
} finally {
  console.log("finally");
}

console.log("information");

//застосуйте try/catch  для факторіалу
