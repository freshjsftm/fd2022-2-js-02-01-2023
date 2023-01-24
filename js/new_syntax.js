class User {
  #lastName;
  constructor(firstName, lastName, age, isMale = true) {
    if (typeof firstName !== "string") {
      throw new TypeError("first name must be string!");
    }
    if (typeof lastName !== "string") {
      throw new TypeError("last name must be string!");
    }
    if (typeof age !== "number") {
      throw new TypeError("age must be number!");
    }
    if(age<0 || age>150){
      throw new RangeError('error: age<0 or age>150')
    }
    if (typeof isMale !== "boolean") {
      throw new TypeError("isMale must be boolean!");
    }
    this.firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
    this.isMale = isMale;
  }
  getFullName() {
    return `${this.firstName} ${this.#lastName}`;
  }
  toString() {
    return this.firstName;
  }
}

try {
  const user3 = new User('Tim', 'Qwerrty', 23);
  user3.#lastName = null;
  console.log(user3.getFullName())
  console.log(user3)
} catch (error) {
  console.log(error);
}

console.log("important info!");

//написати клас Worker
//у якого будуть данні: приізвище, ставка за день,
//кількість відпрацьованих днів за замовчуванням = 0
//метод, який повертає зарплатню
