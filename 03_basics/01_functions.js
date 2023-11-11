// function sayMyName() {
//     console.log("H");
//     console.log("E");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("T");
//     console.log("H");
// }
// sayMyName()

// function addTwoNumbers(num1, num2) { // (num1, num2) => These are called parameters
//     console.log(num1 + num2);
// }
// addTwoNumbers(2, 4) // These are called arguments

// We need to check the type of the data we are giving
// function addTwoNumbers(num3, num4) { // (num1, num2) => These are called parameters
//     console.log(num3 + num4);
// }
// addTwoNumbers(2, "a")

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(2, 4)
// console.log("Result: ", result);     // Here we are not returning anything

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2
//     return result // Anything written after return stmt will not be executed
//     // return num1, num2 // Can also write like this
// }
// const result = addTwoNumbers(2, 4)
// console.log("Result: ", result);

// function loginUserMessage(username) { // If we want to pass a default value if no parameters are specified then function loginUserMessage(username = "Sam")
//     if (username === undefined) { // (!username)
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // if we do not pass any arguments then inplace of username we get undefined since the username is not defined

// function calculateCartPrice(val1, val2, ...num1) { // (...num1) -> REST operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600, 800));

//*******Passing object to function:

// const user = {
//     username: "Hemanth",
//     price: 199
// }

// function handleObject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user) // or can be called like below

// handleObject({
//     username: "Sam",
//     price: 399
// })                    // Need not declare object seperately

//******* Passing array to function:
// const myArray = [100, 200, 300, 400, 500, 600]

// function acceptArray(getArray) {
//     return getArray[1] // Do not return myArray instead return the paramater specified
// }
// console.log(acceptArray(myArray)); // Specify myArray in arguments
// console.log(acceptArray([150, 250, 350, 450])); // Specify myArray in arguments