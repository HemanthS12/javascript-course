// const user = {
//     username: "Hemanth",
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`Welcome to JS screen, ${this.username}`); // 'this' is used to refer to current context
//         // console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // The global object in browser is window whereas in node here we donot have any global object hence empty


// function chai() {
//     let usern = "Hemanth"
//     console.log(this.username);
// }
// chai() // undefined is the output. So 'this' will not work the same way in functions which they work with objects

// const chai = function () {
//     let usern = "Hemanth"
//     console.log(this.username);
// }
// chai() // Undefined when function is declared like this

// Arrow functions:

// const chai = () => {
//     let usern = "Hemanth"
//     console.log(this);
// }
// chai() // Gives empty object as output

// Basic Arrow function:
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 2));

// Arrow function in another way(Implicit return):
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5, 2));
// If curly braces, then must use return keyword(Explicit return), if paranthesis then need not write return keyword(Implicit return). 

// If we want to pass object then
const addTwo = (num1, num2) => ({ username: "Hitesh" })
console.log(addTwo(5, 2));


