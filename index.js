function resolveExample(str, obj) {
  return obj[str];
}

function createTableMultiple(limit = 2) {
  const table = {};
  for (let num1 = 2; num1 <= limit; num1++) {
    for (let num2 = 1; num2 <= 10; num2++) {
      table[`${num1} * ${num2} = `] = num1 * num2;
    }
  }
  return table;
}
const multTable = createTableMultiple(10);

console.log(createTableMultiple());
console.log("5 * 6 = ", resolveExample("5 * 6 = ", multTable));
