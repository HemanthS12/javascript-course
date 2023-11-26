// forof

// For Arrays:

// const myarray = [1, 2, 3, 4, 5]
// for (const num of myarray) {
//     console.log(num);
// }

// For String:

const greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is: ${greet}`);
}


// For Maps:
// Maps - The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATES OF AMERICA")
// map.set('FR', "FRANCE")
// // console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':', value);
//     // OR
//     // console.log(`${key} : ${value}`);
// }


// For Objects:

/*
const myNewObj = {
    'Name1': "Rohit",
    'Name2': "Kohli",
    'Name3': "Bumrah",
    Name4: "Shami"
}
console.log(myNewObj);

for (const [key, value] of myNewObj) {
    console.log(key, ':-', value);
} // myNewObj is not iterable */