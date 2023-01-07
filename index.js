//напишіть функцію, яка приймає три числа
//і перевіряє чи можуть бути ці числа мірами довжини
//трьох сторін трикутника

/**
 * 
 * @param {number} value1 
 * @param {number} value2 
 * @param {number} value3 
 * @returns {boolean}
 */
const isTriangleExist = function (value1, value2, value3) {
  return (
    value1 > 0 &&
    value2 > 0 &&
    value3 > 0 &&
    value1 + value2 > value3 &&
    value1 + value3 > value2 &&
    value3 + value2 > value1
  );
};
