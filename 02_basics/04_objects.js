// const tinderUser = new Object() // Singleton object

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = "false"
// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Mitchell",
//             lastname: "Starc"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname);

// To merge two objetcs
// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: "d" }
// const obj3 = { obj1, obj2 } // This is incorrect way to merge two objects
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); // correct way

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // correct way

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3); // Perfect!!

// const userst = [
//     {
//         id: 1,
//         name: "Rohit"
//     },
//     {
//         id: 2,
//         name: "Gill"
//     },
//     {
//         id: 3,
//         name: "Kohli"
//     },
//     {
//         id: 4,
//         name: "Iyer"
//     }
// ]

// console.log(userst[0].name);
// console.log(userst[1].name);
// console.log(userst[2].name);
// console.log(userst[3].name);

// console.log(tinderUser);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Resultant is array type
// console.log(Object.values(tinderUser)); // Resultant is array type
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring of objects

// const course = {
//     courseName: "Javascript",
//     coursePrice: 999,
//     courseInstructor: "Hitesh"
// }

// Normally to access a value from object we use:
// console.log(course.courseInstructor);

// But if we want much cleaner code then we can have Destructuring of objects

// const { courseInstructor } = course
// console.log(courseInstructor);

// We can give our own name for the fields here;
// const { courseInstructor: courseInst } = course
// console.log(courseInst);


// API call through JSON
//This is not an object because an object will have a name
// {
//     "name": "Bumrah",
//         "profession": "Cricket",
//             "role": "Bowler"
// }