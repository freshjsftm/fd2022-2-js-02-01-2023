"use strict";

//const sum = new Function('a', 'b', 'return a + b');

const f1 = function(num, ...rest){
  console.log('num',num)
  console.log('f1',rest)
}
const f2 = (...args)=>{
  console.log('f2',args)
}

// console.dir(f1)
// console.dir(f2)

f1(1,2,3);
f2(1,2,3);

//напишіть функцію стрілку, яка приймає безліч аргументів і повертає сумму
//напишіть функцію стрілку, яка приймає безліч аргументів і повертає середнє значення