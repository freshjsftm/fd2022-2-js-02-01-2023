"use strict";
const options = {
  breckets: {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
    "<<": ">>",
  },
};
/**
 *
 * @param {string} str
 * @param {object} options
 * @param {object} options.breckets
 * @returns
 */
const checkExpression = (str, options) => {
  const stack = new Stack(str.length);
  const closesBreckets = Object.values(options.breckets);
  for (const symbol of str) {
    if (options.breckets[symbol]) {
      stack.push(symbol); 
      continue;
    }
    const lastSymbolInStack = stack.pick();   
    const correctSymbol = options.breckets[lastSymbolInStack]; 
    if (symbol === correctSymbol) {
      stack.pop();
    } else if(closesBreckets.includes(symbol)){
      return false;
    }
  }
  return stack.isEmpty;
};
console.log(checkExpression("(2)", options));
console.log(checkExpression("[]])(<>{}))", options));
console.log(checkExpression(" ( 2[(*)]3 + {a[0]}) ", options));



const queue = new Queue(1,5,9);
console.log(queue)
console.log(queue.deQueue())
console.log(queue.deQueue())
console.log(queue.enQueue(77))
console.log(queue)
