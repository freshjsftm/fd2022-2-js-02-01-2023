/*
not modify:
indexOf, lastIndexOf, includes
reduce
concat
slice
find, findIndex, findLast, findLastIndex
forEach

modify:
push, pop
unshift, shift
splice
reverse
fill
sort
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4]; //

// for (let index = 0; index < arr1.length; index++) {
//   console.log(arr1[index]);
// }
// arr1.forEach(logElem);
// function logElem(elem,index) {
//   console.log(elem ** 2);
// }
const users = [
  { name: "Bob", age: 45 },
  { name: "Rob", age: 22 },
  { name: "Tom", age: 33 },
  { name: "JD", age: 37 },
];

users.forEach(function (user) {
  user.isSuscribe = user.age > 35 ? true : false;
});
console.table(users);
//встановити true у isSuscribe, якщо вік юзера > 35

//Написати функцію, яка приймає два масиви і повертає true,
//якщо ці масиви ідентичні, інакше повертає false

console.log(isEqualArrays(arr1, arr2));
function isEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return !arr1
  .map(function (elem, index) {
    return elem === arr2[index];
  })
  .includes(false);
  
  // for (let index = 0; index < arr1.length; index++) {
  //   if(arr1[index] !== arr2[index]){
  //     return false
  //   }
  // }
  // let check = true;
  // arr1.forEach(function (elem, index) {
  //   if (elem !== arr2[index]) {
  //     check = false;
  //   }
  // });

  // const check = arr1
  // .map(function (elem, index) {
  //   return elem === arr2[index];
  // })
  // .includes(false);


}
