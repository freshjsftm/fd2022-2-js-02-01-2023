"use strict";
const user = {
  personalInfo: {
    id: 12,
    firstName: "Tom",
    lastName: "Qwerrty",
    bday: {
      day: 28,
      month: 6,
      year: 1987,
    },
    gender: "male",
  },
  contactInfo: {
    phone: "123-56-89",
    email: "qwe@gmail.com",
    address: {
      town: "NY",
      street: "Avenu 25",
      house: 2546,
    },
  },
  profession: "programmer",
};

const {
  profession: userProf,
  contactInfo: { email: userEmail },
  personalInfo: {
    lastName: userLastName,
    bday: { year: userYearBorn },
  },
} = user;
// console.log(userProf);
// console.log(userEmail);
// console.log(userYearBorn);
// console.log(userLastName);

//дістаньте пол в змінну userGender
//телефон (userTel) і номер будинку(houseNumber)
//і пошту

const logFullName = ({ personalInfo: { firstName, lastName }, ...restObject }, ...rest) => {
  console.log(firstName, lastName);
  console.log(restObject);
  console.log(rest);
};
logFullName(user, 1,2,3,5,7);

const {contactInfo:{email}, ...rest} = user;
console.log(rest);


const colors = ['red', 'teal', 'blue', 'aqua'];

const [firstColor, , ,aqua] = colors;
const [one, ...restColors] = colors;