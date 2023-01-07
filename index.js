//написати функцію, яка приймає число (коректне),
//яке є віком користувача і повертає
//результат перевірки на повноліття

/**
 * 
 * @param {number} age >0
 * @param {number} FULL_AGE default value = 18
 * @returns {boolean}
 */
const isAdult = function (age, FULL_AGE = 18) {
  return age >= FULL_AGE;
};

const userAge = 45;
//debugger;
console.log(isAdult(userAge)); //true
console.log(isAdult(17)); //false
