"use strict";

/*
number bigInt NaN
string
boolean
null
undefined
Symbol

object

*/


const mySymbol = Symbol('label for developer');
const mySymbol2 = Symbol('important symbol');
//console.log(mySymbol);
const propKey = 'propName';
const object = {
  name: "Brad",
  123: 123123123,
  [mySymbol]: 'symbol',
  [mySymbol2]: 'symbol 2',
  [propKey] : 777
}

export default object;

