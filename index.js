
const product = {
  name:'dress',
  favoritColor:'teal',
  'favorit color':'pink',
  size:'S',
  10:55,
}

const keyName = 'propNew';
product[keyName] = 999;
console.log(product[keyName]); //product['name']
