//constructor for prototype
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

MyArray.prototype = new MyArrayPrototype();

const myArrayNumbers = new MyArray();
myArrayNumbers.push(777);
console.log(myArrayNumbers);

const arrayNumbers = [];
arrayNumbers.push(555);
console.log(arrayNumbers);