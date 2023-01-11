
// 7! = 1*2*3*4*5*6*7
/**
 * 
 * @param {number} number 
 * @returns {number | BigInt | null}
 */
const calcFactorial = function(number=5){
  if(number<0){
    return null;
  }
  if(number===0 || number===1){
    return 1;
  }
  let result = 1n;
  for(let i=1n; i<=number; i++){
    result *= i;
  }
  return result;
}

console.log(calcFactorial(1)) //120
console.log(calcFactorial(3)) //6
console.log(calcFactorial(25)) 