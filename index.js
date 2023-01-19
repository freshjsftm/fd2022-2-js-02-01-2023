function User(firstName, lastName, age, isMale, email, isSubscribe = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribe = isSubscribe;
}
function UserPrototype() {
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype = new UserPrototype();

function createUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `firstName${i + 1}`,
      `lastName${i + 1}`,
      getRandomArbitrary(18, 65),
      Math.random() > 0.5,
      `email${i + 1}@gmail.com`
    );
    db.push(user);
  }
  return db;
}
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

const CHECK_AGE = 35;
const users = createUsers(100);
//отримати масив юзерів, які будуть старші за CHECK_AGE
const oldestUsers = users.filter(function(user){return user.age>CHECK_AGE})
//зарандомити підписку у користувачів
users.forEach(function(user){user.isSubscribe = Math.random()>0.5});
console.table(users);

//отримати масив пошт користувачів жіночої статі 
//які молодше CHECK_AGE і мають підписку
const usersEmail = users.filter(function(user){
  return user.isMale===false && user.isSubscribe && user.age<CHECK_AGE
}).map(function(user){
  return user.email;
})
console.table(usersEmail);


//отримати массив повних імен користувачів
const fullNameUserArray = users.map(function(user){return user.getFullName()});
//console.log(fullNameUserArray)

//порахувати кількість жінок/чоловіків
console.log('male = ',
  users.filter(function (user) {
    return user.isMale;
  }).length
);
console.log('female = ',
  users.filter(function (user) {
    return !user.isMale;
  }).length
);
