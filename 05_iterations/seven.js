// Map method:

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Add 10 to all the numbers
// const addNumb = numb.map((val) => {
//     return val + 10
// })
// console.log(addNumb);

// foreach to add 10 to all numbers:
// const foradd = []
// numb.forEach((val) => {
//     foradd.push(val + 10)
// })
// console.log(foradd);

// Chaining:
const myNums = numb
    .map((num) => {
        return num * 10
    })
    .map((num) => {
        return num + 1
    })
    .filter((num) => {
        return num > 40
    })
console.log(myNums);