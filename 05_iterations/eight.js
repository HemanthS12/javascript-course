// Reduce method:
const num = [1, 2, 3]
// using functions:
// const myTotal = num.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)
// console.log(myTotal);

// using arrow functions:
// const myTotal = num.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        item: "Hair oil",
        price: 300
    },
    {
        item: "Bottle",
        price: 400
    },
    {
        item: "Shading pencil",
        price: 100
    },
]

const myTotalPrice = shoppingCart.reduce((acc, item) => {  // Each item here defines each   object in the array
    console.log(`acc: ${acc} and currval: ${item.price}`);
    return acc + item.price
}, 0)
console.log(myTotalPrice);