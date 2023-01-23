"use strict";

const check = Boolean('');
console.log(check);
const boolean = new Boolean(false);
//console.log(boolean.valueOf());

if (boolean) {
  console.log("block true");
  console.log(boolean.valueOf());
} else {
  console.log("false");
}
