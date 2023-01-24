class User{
  constructor(firstName, lastName, age, isMale = true){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  toString(){
    return this.firstName;
  }
}

//написати клас Worker
//у якого будуть данні: приізвище, ставка за день, 
//кількість відпрацьованих днів за замовчуванням = 0
//метод, який повертає зарплатню
