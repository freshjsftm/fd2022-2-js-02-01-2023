//object with logic(functions) - 1 variant
// const MyArrayPrototype = {};
// MyArrayPrototype.push = function(value){
//   this[this.length] = value;
//   return ++this.length;
// }
//constructor for  - 2 variant
function MyArrayPrototype(){
  this.push = function(value){
    this[this.length] = value;
    return ++this.length;
  }
}
//constructor with data
function MyArray() {
  this.length = 0;
}
//1 variant
//MyArray.prototype = MyArrayPrototype;
//2 variant
MyArray.prototype = new MyArrayPrototype();


const myArrayNumbers = new MyArray();
const myArrayNumbers2 = new MyArray();
myArrayNumbers.push(777);
console.log(myArrayNumbers[0]);
console.log(myArrayNumbers);
console.log(myArrayNumbers.push === myArrayNumbers2.push);

const arrayNumbers = [];
const arrayNumbers2 = new Array();
arrayNumbers.push(555);
console.log(arrayNumbers);
console.log(arrayNumbers.push === arrayNumbers2.push);
