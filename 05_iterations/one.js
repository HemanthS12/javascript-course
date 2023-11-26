// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 arrived");
    }
    // console.log(element);
}
// console.log(element);


// for loop within for loop 

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`); 
        //    OR
        // console.log(i + '*' + j + '=' + i * j);
    }
}


// for loop with arrays

let myArray = ["Rohit", "Gill", "Kohli", "Shreyas", "Rahul"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];
    // console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is back");
//         break
//     }
//     const element = index;
//     console.log(element);
// } // stops once 5 is encountered

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is back");
        continue
    }
    const element = index;
    console.log(element);
} // skips 5th iteration