"use strict";

const dictionary = new Map();
dictionary.set("dog", "пес");
dictionary.set("cat", "кіт");
dictionary.set("forest", "ліс");
dictionary.set("rat", "щур");
dictionary.set("field", "поле");
dictionary.set("funny", "веселий");
dictionary.set("sad", "сумний");
dictionary.set("happy", "щасливий");
dictionary.set("in", "у");
dictionary.set("at", "в");
dictionary.set("morning", "ранок");
dictionary.set("go", "ідти");
dictionary.set("jump", "стрибати");
dictionary.set("walk", "гуляти");
dictionary.set("talk", "розмовляти");
dictionary.set("and", "і");

const sentence = "In early morning very sad Dog and funny Cat go at forest with rat";

const translate = (str) => {
  //обрізаємо пробіли
  //переводимо в нижній регистр
  //розбиваємо на окремі слова - масив слів
  //кожне слово - ключ в мапі за яким повертаємо значення
  //dictionary.get(key)
  //отримуємо масив значень - перекладених слів
  //з масив значень робимо рядок
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => dictionary.has(word) ? dictionary.get(word) : word )
    .join(" ");
};

console.log(translate(sentence))