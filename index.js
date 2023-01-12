const user = {
  firstName: "Brad",
  lastName: "Pitt",
  age: 59,
  isMale: true,
};
const user2 = {
  firstName: "Tom",
  lastName: "Soyer",
  age: 9,
  isMale: true,
};

function isAdult(object, ADULT_AGE=18){
  return object.age >= ADULT_AGE;
}

function sayHiUser(object) {
  return `${isAdult(object)?'Hello':'Hi'}, ${object.firstName}!`;
}

console.log(sayHiUser(user));
console.log(sayHiUser(user2));
