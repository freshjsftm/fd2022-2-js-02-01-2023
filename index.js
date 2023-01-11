const user2 = new Object();
const user3 = Object();

//literal синтаксичний цукор
const user1 = {
  fname: "Brad",
  lname: "Pitt",
  color: "white",
  age: 59,
  isMale: true,
  say: function () {
    console.log("hi!");
  },
  walk: function () {
    console.log("i'm walk");
  },
};

//alert(user1);
console.log(user1);
console.log(user1.fname);
user1.age++;
console.log(user1.age);
user1.fname = "Braddly";
delete user1.color;
console.log(user1);
user1.hasPet = undefined;
console.log(user1);
user1.say();
user1.walk();
