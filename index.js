const userInput = prompt("Enter number: ", "5.56");

//вивести помилку, якщо userInput:
//порожній рядок
//null
//щось, що не є числом

if (userInput === "" || userInput === null || Number.isNaN(Number(userInput))) {
  console.log("error");
} else {
  console.log(userInput, Number(userInput));
}
