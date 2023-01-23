"use strict";

const userName = "        brad        ";
// console.log(userName.toUpperCase())
const userNameUpper = userName.trim().toUpperCase().repeat(3);
console.log(userNameUpper);

const arr = [1, 2, 3, 4, 5];
const strArr = arr.join('-');
console.log(strArr);

const p = 'The quick brown fox jumps over the lazy dog.';
if(p.includes('.')){
  const posDote = p.indexOf('.');
  const pArr = p.substring(0,posDote).split(' ');
  console.log(pArr);
}
