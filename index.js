let n1 = 1;
const n2 = 1;

const res = n1;
console.log(res);
n1 = 15;
console.log(res);

const obj1 = {
  prop: 1,
};

const obj2 = {
  prop2: 1,
};

const test = obj1;
const newObj = test;
console.log(test);
obj1.prop = 15;
// console.log(test);
// console.log(newObj);
newObj.newProp = 'qwerty';

/******* */