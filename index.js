/*
false
0 -0 +0
''
null
undefined
NaN
*/

//повертає першу неправду або останню правду
const condition1 = 2 && "null" && "qwe";
console.log(condition1);

//повертає першу правду або останню неправду
const condition2 = 0 || false || "" || null;
console.log(condition2);

//const condition3 = false ?? "default";
//const condition3 = 0 ?? "default";
//const condition3 = '' ?? "default";
//const condition3 = NaN ?? "default";
//const condition3 = null ?? "default";
const condition3 = undefined ?? "default";
console.log(condition3);
