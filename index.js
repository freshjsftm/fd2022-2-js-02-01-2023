const userInputAge = prompt("Enter age");
const userAge = Number(userInputAge);
if (
  userInputAge === null ||
  userInputAge === "" ||
  Number.isNaN(userAge) ||
  userAge < 0 ||
  userAge >= 150
) {
  console.log("error"); 
} else if(userAge<2){   //[0-150)
  console.log("baby");
} else if(userAge<6){   //[2-150)
  console.log("kinder");
}else if(userAge<12){   //[6-150)
  console.log("child");
}else if(userAge<18){   //[12-150)
  console.log("tinager");
}else if(userAge<65){   //[18-150)
  console.log("adult");
}else if(userAge<100){   //[65-150)
  console.log("old");
}else {   //[100-150)  if(userAge<150)
  console.log("wow!!!");
}


//hw
// користувач вводить число, яке є номером дня місяця [1-31]
// ви виводите назву дня тижня,
// при у мові, що місяць почався з понеділка
