// let score = "hemanth"
// console.log(typeof score);
// let newVar = Number(score)
// console.log(typeof newVar);

// console.log(newVar) //This gives NaN for the score value "33abc" //This gives 0 for the score value null //This gives NaN for the score value undefined

// let num = 1
// console.log(typeof num);
// let newNUM = Boolean(num)
// console.log(typeof newNUM);
// console.log(newNUM);

// let newName = 44
// console.log(typeof newName);
// let stringName = String(newName)
// console.log(typeof stringName);
// console.log(stringName);

// let stringName = "hemanth"
// console.log(typeof stringName);
// let numConv = Number(stringName)
// console.log(typeof numConv);
// console.log(numConv);

// ***********************Operations***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"