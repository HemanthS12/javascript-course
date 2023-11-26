// const coding = ["javascript", "java", "python", "html"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values); //undefined. Not able to store the result in new var

// filter:
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbers = myNums.filter((nums) => {
//     nums > 4          // return num > 4. We need to give this if we use curly braces
// })
// console.log(numbers); //[] we get empty array. If curly braces, then must use return keyword(Explicit return)
// // OR
// const newnum = myNums.filter((num) => num > 4)
// console.log(newnum); // [ 5, 6, 7, 8, 9, 10 ] if paranthesis then need not write return keyword(Implicit return)


// // Using foreach

// const myNum1 = [1, 2, 3, 4, 5, 6, 7]
// const newval = []
// myNum1.forEach((val) => {
//     if (val > 4) {
//         newval.push(val)
//     }
// })
// console.log(newval);

// Exercise:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Give me the books whose genre is history
let myBooks = books.filter((bk) => {
    return bk.genre === 'History'
}
)
// console.log(myBooks);

// Give me the books which are published after 2000
myBooks = books.filter((bk) => {
    return bk.publish >= 2000
})
// console.log(myBooks);

// Give me the books which are published after 1995 and genre is history

myBooks = books.filter((bk) => {
    return (bk.publish > 1995 && bk.genre === "History")
})
console.log(myBooks);