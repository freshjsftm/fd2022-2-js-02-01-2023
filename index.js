/*
false
0 -0 +0
''
null
undefined
NaN
*/

const number = 12;
const numberError = 22;
const min = 10;
const max = 20;
// (10 - 20) - не враховуючи межі

//правда, коли число входить в діапазон
console.log(number>min && number<max);
//правда, коли число виходоть за межі діапазону
console.log(numberError<=min || numberError>=max);
