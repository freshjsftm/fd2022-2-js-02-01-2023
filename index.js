//condition ? true : false

function retParityWord(number = 6) {
  return number % 2 === 0 ? "even" : "odd";
}

function isEven(number = 6) {
  return number % 2 === 0;
}

const MAX_SUMMA = 10000;
const MAX_SALE = 10;
const MED_SUMMA = 5000;
const MED_SALE = 5;
const summa = 7345;

const sale = summa > MAX_SUMMA ? MAX_SALE : summa > MED_SUMMA ? MED_SALE : 1;

const result = 10 - (true ? 5 + 4 : 5 - 4); 

const number1 = 5;
const number2 = 15;

const result2 = (number1>=number2) ?  number1 :  number2;