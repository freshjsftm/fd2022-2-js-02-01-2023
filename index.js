//напишіть функцію, яка обчислює квадратне рівняння

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[] | null}
 */
const calculateSquareEquation = function (a = 1, b = -26, c = 120) {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return null;
  }
  if (D === 0) {
    const x = -b / (2 * a);
    return [x];
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  return [x1, x2];
};

const result = calculateSquareEquation();
if (result) {
  console.log(result)
}else{
  console.log('roots not found')
}
