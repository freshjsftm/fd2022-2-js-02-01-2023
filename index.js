/*
not modify:
indexOf, lastIndexOf, includes
reduce
concat
slice
find, findIndex, findLast, findLastIndex
forEach, every, some, flat
join

modify:
push, pop
unshift, shift
splice
reverse
fill
sort
*/

const arr1 = [1, 2, 3, 4];
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const res = arr4.flat(Infinity);
console.log(arr4)
console.log(res)
const arrStr = Array.from('qwerty')
console.log(arrStr.join(''))
console.log(arr1.join('!@!'))

