// foreach:
const coding = ["javascript", "java", "python", "html"]
// We do not write function name since its a callback function.
// Since this function is inside an array, it iterates to each value in the array. Therefore a name can be given for the same
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        sportName: "Cricket",
        sportOrigin: "England"
    },
    {
        sportName: "kabaddi",
        sportOrigin: "India"
    },
    {
        sportName: "Badminton",
        sportOrigin: "India"
    }
]

myCoding.forEach((item) => {
    console.log(item.sportName, ':', item.sportOrigin);
})