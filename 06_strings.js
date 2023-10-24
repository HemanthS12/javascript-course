const name = "Hemanth"
const repoCount = 10

// const constg = name + repoCount  // outdated syntax
// console.log(constg)               

// This is called string interpolation
console.log(`I am ${name} and my repocount as of now is ${repoCount}.`);

const charName = new String("Iron-Man")
console.log(charName[0]);
console.log(charName.__proto__);
console.log(charName.length);
console.log(charName.toUpperCase());
console.log(charName.charAt(5));
console.log(charName.indexOf('M'));
console.log(charName.indexOf('A'));
console.log(charName.indexOf('a'));

const newString = charName.substring(1, 4)
console.log(newString);

const newString1 = charName.substring(5, 2)
console.log(newString1);

const anotherString = charName.slice(1, 4)
console.log(anotherString);

const anotherString1 = charName.slice(5, 2)
console.log(anotherString1);

const anotherString2 = "    hemanth    "
console.log(anotherString2);
console.log(anotherString2.trim());

const url = "https://hemanth.com/hemanth%20s"
console.log(url.replace('%20', '-'));

console.log(url.includes('hemanths'));

const arr1 = (charName.split('-'));
console.log(arr1);
console.log(arr1[0]);
console.log("ok");