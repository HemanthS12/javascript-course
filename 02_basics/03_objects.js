// Objects can be declared by two types: i)Constructor ii)Literal
// When declared form constructor it would be singleton object

//Singleton
// Object.create

//Object literals
//Declaring objects:

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hemanth",
    "fullname": "Hemanth S",
    "state": "Karnataka",
    // mySym: "MyKey1",
    // [mySym]: mySym, // If I give this then we can determine its datatype as symbol when console
    [mySym]: "MyKey1",
    age: 23,
    location: "Bengaluru",
    email: "hemanth@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

// // To Access 
// console.log(JsUser.email); // One way
// console.log(JsUser["email"]); // 2nd way
// console.log(JsUser.state);
// console.log(JsUser.fullname);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser.mySym); // typeof gives string but we wanted it to be a symbol
// console.log(JsUser[mySym]);
// // console.log(typeof JsUser[mySym]);

// //To override data
// JsUser.email = "hemanth@google.com"
// // console.log(JsUser);
// Object.freeze(JsUser) // freeze the object and later changes are not impacted
// JsUser.email = "hemanth@cog.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`); // When we have to reference same object then use 'this'
}
console.log(JsUser.greetingTwo());

JsUser.ageOne = function () {
    console.log(`${this.name} age is, ${this.age}`);
}
console.log(JsUser.ageOne());