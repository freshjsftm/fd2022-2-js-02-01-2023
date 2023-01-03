/*
починається з букви, $ або _
не використовувати пробіл
регистрозалежне
відповідає на питання що в ній
*/

let userName = "Brad";
console.log('user name:' ,userName);

let userAge; //оголошення
console.log(typeof userAge);
userAge = 59; //ініціалізація
console.log(typeof userAge);

//рік народження користувача
const userYearOfBirth = 1963;

// console.log(userName);
console.log('user age:', userAge);

userAge = 60;
userName = "Bradly";

const isUserMale = true;
// const userGender = "male";
//userGender = 'female'; // error

const AMOUNT_DAYS_WEEK = 7;

let number = 12;

{
  let number = 89;
  console.log(number);
}

console.log(number);
