"use strict";
/*
  інкапсуляція
  успадкування
  поліморфізм
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be string!");
    }
    if (value.length === 0) {
      throw new RangeError("not empty");
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be number!");
    }
    if (value < 14 || value > 100) {
      throw new RangeError("14...100");
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }
  //methods
  buy() {
    return this.name + " is buy";
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}

class UserRegistred extends User {
  constructor(name, age, email) {
    super(name, age);
    this.email = email;
    this._isRegister = true;
  }
  set email(value) {
    if (typeof value !== "string") {
      throw new TypeError("email must be string!");
    }
    if (value.length === 0) {
      throw new RangeError("not empty");
    }
    this._email = value;
  }
  get email() {
    return this._email;
  }
  logWishList(...rest) {
    rest.forEach((item) => console.log(item));
  }
}

class Seller extends User{}

class Admin extends UserRegistred {
  constructor(name, age, email) {
    super(name, age, email);
  }
  addRegister(obj) {
    if (obj instanceof UserRegistred) {
      return (obj._isRegister = true);
    }
    throw new TypeError("must be UserRegistred");
  }
  removeRegister(obj) {
    if (obj instanceof UserRegistred) {
      return (obj._isRegister = false);
    }
    throw new TypeError("must be UserRegistred");
  }
}

try {
  const user = new UserRegistred("Miha", 34, "qwe@qwe.qwe");
  console.log(user);
  console.log(user.buy());
  user.logWishList(1, 2, 3, 4);
  const simpleUser = new User("Simple", 44);
  // console.log(simpleUser.logWishList(1, 2, 3, 4)); - не працює!!!
  const admin = new Admin("Admin", 33, "admin@qwe.qwe");
  admin.removeRegister(user);
  console.log(admin);
} catch (error) {
  console.log(error);
}
