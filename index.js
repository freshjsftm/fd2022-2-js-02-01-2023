"use strict";

const number = new Number(0);

if(number){
  console.log(number)
}
console.log(number.toExponential());

console.log((12345.12345).toPrecision(7));
console.log((12345.12345).toFixed(7));

const num = 789.789456;
console.log(num);
new Number(num);
console.log(num.toPrecision(7));
console.log(num.toFixed(2));
