//const side = '4';
/**
 * Get perimetr square
 * @param {number} side 
 * @returns {number} number | NaN 
 */
const getPerimetrSquare = function (side = 1) { 
  if(side<=0){
    return NaN;
  }
  return side * 4;
};
//debugger
console.log(getPerimetrSquare()); 
console.log(getPerimetrSquare(undefined));
//debugger
console.log(getPerimetrSquare(3));
console.log(getPerimetrSquare(-3));
 
