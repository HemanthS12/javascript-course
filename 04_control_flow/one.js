// if

// <, >, <=, >=, ==, !=, ===, !==
// const isUserloggedIn = true
// const temperature = 40

// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score = 300
// if (score > 100) {
//     let power = "run"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // Error : power is not defined (becoz of the scope)

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // Not a good practice

//Nested if
// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const isUserloggedIn = true
const userDebitCard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

if (isUserloggedIn && userDebitCard) {
    console.log("Allow user to buy courses");
}

if (loggedInFromGoogle || loggedInFromMail) {
    console.log("User logged in");
}