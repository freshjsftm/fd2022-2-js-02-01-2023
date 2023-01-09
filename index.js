const userInput = prompt("Choose language:\n1 - ua\n2 - en\n3 - pl\n4 - fr");

if (userInput === "1" || userInput === "ua") {
  console.log("привіт");
} else if (userInput === "2" || userInput === "en") {
  console.log("hi");
} else if (userInput === "3" || userInput === "pl") {
  console.log("czesc");
} else if (userInput === "4" || userInput === "fr") {
  console.log("hé");
} else {
  console.log("lang not found");
}

switch (userInput) {
  case "1":
  case "ua":
    console.log("привіт");
    break;
  case "2":
  case "en":
    console.log("hi");
    break;
  case "3":
  case "pl":
    console.log("czesc");
    break;
  case "4":
  case "fr":
    console.log("hé");
    break;
  default:
    console.log("lang not found");
    break;
}

const userInput2 = prompt();
switch (userInput2) {
  case "1":
  case "2":
  case "12":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
  default:
    console.log("error");
    break;
}
