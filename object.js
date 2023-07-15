var phone ={
    model: 'oppo',
    origin: 'china',
    price: 22000,
    storage: '12gb'
}
// console.log(phone);
var properties = Object.keys(phone);
console.log(properties);
var propertiesValues = Object.values(phone);
console.log(propertiesValues);
phone.price = 2000;
console.log(phone);
phone['price'] = 4000;
console.log(phone);