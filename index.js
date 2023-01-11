const product = {
  name: "milk",
  price: 55,
  currency: "uah",
  isAvailable: true,
  showInfo: function () {
    console.log(this.name,':', this.price, this.currency);
  },
};
product.showInfo();

function Product( name = "test", price = 0, currency = "uah", isAvailable = false) {
  this.name = name;
  this.price = price;
  this.currency = currency;
  this.isAvailable = isAvailable;
  this.showInfo = function(){
    return this.name+':'+this.price+this.currency;
  }
}
//debugger
const product1 = new Product("milk", 55, undefined, true);
const product2 = new Product("egg", 5.5);
const product3 = new Product();

console.log(product1);
console.log(product2);
console.log(product3);
