"use strict";

// function recursion(num) {
//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   recursion(num - 1);
// }

// //11226
// //debugger
// recursion(40000);

//2**5 -> 2 * (2**4)
//2**4 -> 2 * (2**3)
//2**3 -> 2 * (2**2)
//2**2 -> 2 * (2**1)
//2**1 -> 2 * (2**0)
//2**0 -> 1

const power = (base, exp) => {
  if(exp === 0) {
    return 1;
  }
  return base * power(base, exp-1);
}
//debugger
console.log(power(2,3));

//написати рекурсивну функцію для обчислення 
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1 * 0!
// 0! = 1