"use strict";
/**
 * 
 * @param  {...number} args = [number]
 * @returns 
 */
const getSummaArgs = (...args) => { //rest
  console.log(args)
  return args.length === 0 ? null : args.reduce((acc, arg) => acc + arg, 100);
};

const getAverageArgs = (...args) =>
  args.length === 0 ? null : args.reduce((acc, arg) => acc + arg) / args.length;

const numbers = [1, 2, 3, 4, 5, 6];
console.log(getSummaArgs(...numbers,2,5)); //spred
console.log(getSummaArgs(2,3));

const arr = [9,9,9];

const resultArray = [77, ...numbers, 88, ...arr];//spred
