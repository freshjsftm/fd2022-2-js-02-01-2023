/*
not modify:
indexOf, lastIndexOf, includes
reduce
concat
slice
find, findIndex, findLast, findLastIndex

modify:
push, pop
unshift, shift
splice
reverse
fill
sort
*/

// const arr1 = new Array(5);
// arr1.fill('!')
const arr1 = new Array(5).fill(0).concat(1,2,3).reverse();
//arr1.splice(5,0,44,55);
console.log(arr1);
arr1.sort();


const users = [
  {name:"Brad", age:59},
  {name:"Tom", age:44},
  {name:"Alex", age:35},
  {name:"Rob", age:22},
  {name:"Bob", age:16},
]

const userName = users.find(function(user){
  return user.age <30;
}).name;
console.log(userName)

const validateUsers = users.filter(function(user){
  return user.age <30;
});
const userNames = users.map(function(user){
  return user.name;
})
const validateUserNames = users.filter(checkAge).map(getName).sort();

console.log(validateUserNames)
console.log(userNames)

function checkAge(currentElemnt){
  return currentElemnt.age < 30;
}
function getName(currentElemnt){
  return currentElemnt.name;
}