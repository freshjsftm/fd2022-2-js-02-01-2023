//напишіть функцію, яка буде запитувати у користувача будь що
//і повертати значення, якщо воно було введено
//або повертати null, якщо користувач нічого не ввів

/**
 * 
 * @returns {string | null}
 */
const getUserInput = function () {
  const input = prompt();
  if(input){
    return input;
  }
  return null;
};
