//constructor for prototype
function MyArrayPrototype() {
  this.push = function () {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
      //this.length++;
    }
    return this.length;
  };
  // виправити щоб не було від'ємної довжини
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1]; // 5-1 = 4
    delete this[--this.length]; // --5 -> 4
    //this.length--;
    return lastItem;
  };
}
//constructor with data
function MyArray() {
  this.length = 0;
  for (let index = 0; index < arguments.length; index++) {
    this.push(arguments[index]);
  }
}

MyArray.prototype = new MyArrayPrototype();
// MyArray.prototype.newMethod = superMethod;

const myArrayNumbers = new MyArray(8, 7, 6);
myArrayNumbers.push(777, 4, 5, 7, 8);
console.log(myArrayNumbers);

const arrayNumbers = new Array(3, 5, 7);
arrayNumbers.push(45);
console.log(arrayNumbers);
Array.prototype.newMethod = superMethod;

function superMethod(){console.log('new method!!!')}