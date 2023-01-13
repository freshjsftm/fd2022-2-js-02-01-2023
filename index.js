
const catsProto = {
  toString() {
    return "a cat named " + this.name;
  },
  sleep() {
    return this.name + " cat sleeping";
  },
};

const cat1 = {
  name: "Barsik",
  __proto__: catsProto,
};

const cat2 = {
  name: "Pushok",
};
cat2.__proto__ = catsProto;

console.log(cat1);
console.log(cat2);
