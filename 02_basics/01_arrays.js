const myArr = [1, 2, 3, 4, 5] // Array can have different types of elements like boolean object etc
// console.log(myArr[1]);

const myHeroes = ["Ironman", "Captain America", "Thor", "Hulk"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[4]);

// Array methods

// myArr.push(6) //Appends new elements to the end of an array, and returns the new length of the array.
// myArr.push(7)
// myArr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArr.unshift(10) //Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
// myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(myArr.includes(6)); //Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr.indexOf(4)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const myNewArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(myNewArr);

console.log("Original Array:", myArr);
const mySl = myArr.slice(1, 3)
console.log("Original Array after slice:", myArr);
console.log("Sliced Array:", mySl);

console.log("Original Array:", myArr);
const mySp = myArr.splice(1, 3)
console.log("Original Array after splice:", myArr);
console.log("Spliced Array:", mySp);

