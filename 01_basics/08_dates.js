// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 10, 1) // month starts from 0
console.log("myCreatedDate is " + myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 10, 1, 10, 43, 22) // month starts from 0
console.log("myCreatedDate1 is " + myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("10-01-2023")
console.log("myCreatedDate2 is " + myCreatedDate2.toLocaleString());