// const bal = 78000
// console.log(bal);

const balance = new Number(80000.8799)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof (balance));
// console.log(balance.toFixed(2));

// const num1 = 178.9876
// console.log(num1.toPrecision(3));

// const num2 = new Number(10000000)
// console.log(num2.toLocaleString('en-IN'));

// ******************Maths****************

// console.log(Math.abs(-600));
// console.log(Math.round(87.61));
// console.log(Math.ceil(87.61));
// console.log(Math.floor(87.61));
// console.log(Math.min(8, 4, 7, 1));
// console.log(Math.max(8, 4, 7, 1));

// Important
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 1
// const max = 6

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 50 + 1)

//sum
const sum = x + y
const resultSum = `Sum of ${x} and ${y} is: ${sum}`
console.log(resultSum);

//differnce
const diff = x - y
const resultDiff = `Difference of ${x} and ${y} is: ${diff}`
console.log(resultDiff);

//product
const prod = x * y
const resultProd = `Product of ${x} and ${y} is: ${prod}`
console.log(resultProd);

//quotient
const quo = x / y
const resultQuo = `Quotient of ${x} and ${y} is: ${quo}`
console.log(resultQuo);

//remainder
const rem = x % y
const resultRem = `Remainder of ${x} and ${y} is: ${rem}`
console.log(resultRem);