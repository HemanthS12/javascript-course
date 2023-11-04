const marvel_heros = ["Ironman", "Spiderman", "Thor"]
const dc_heros = ["Superman", "Batman", "Flash"]
//Push operator
// marvel_heros.push(dc_heros) //Pushes to existing array. Appends new elements to the end of an array, and returns the new length of the array.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//Concat operator
// const allHeros = marvel_heros.concat(dc_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros);

//Spread operator
// const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

//Flat operator
// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const anotherNewArray = anotherArray.flat(1)
// console.log(anotherNewArray);

// console.log(Array.isArray("Hemanth")) //To see if this is an array or not
// console.log(Array.from("Hemanth"));
// console.log(Array.from({ name: "Starc" })) //Cannot be converted to an array directly(either convert to array by key or value)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));