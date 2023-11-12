// IIFE(Immediately Invoked Function Expressions)
// To come out of global scope pollution problem we use IIFE
// Syntax: ()()

// function chai() {
//     console.log("DB CONNECTED");
// }
// chai() // Normal function declaration

(function chai() {
    console.log("DB CONNECTED");
})(); // Semicolon is necessary to execute second IIFE function

(function chai1() {
    console.log("DB CONNECTED TWO");
})(); // Named IIFE. Here the name is chai1

(() => {
    console.log("DB CONNECTED THREE");
})(); // Simple IIFE since there is no name. arrow function

(chai2 = (name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
})("Hemanth") // IIFE with arrow function with parameters passed.

// Multiple IIFE written together