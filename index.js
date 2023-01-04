/*
false
0 -0 +0
''
null
undefined
NaN
*/

const condition = 0/0; //NaN
//якщо в круглих дужках правда, виконай блок(фігурні дужки)
//if (condition === NaN) {
if(Number.isNaN(condition)){  
  //якщо в круглих дужках правда, виконай блок(фігурні дужки)
  console.log('condition = ', condition)
}
