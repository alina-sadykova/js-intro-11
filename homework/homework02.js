console.log("\n--------TASK Random Number--------\n");
const { getRandomNumber } = require("../utils/MathHelper");
/*
Create 4 random numbers within 1 and 50 both inclusive and find their average
*/

let ranN1 = getRandomNumber(1, 50);
let ranN2 = getRandomNumber(1, 50);
let ranN3 = getRandomNumber(1, 50);
let ranN4 = getRandomNumber(1, 50);

console.log((ranN1 + ranN2 + ranN3 + ranN4) / 4);

console.log("\n--------TASK1--------\n");

let str1 = "5";
let str2 = "2";

let num1 = parseInt(str1);
let num2 = parseInt(str2);

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is ${num1 % num2}`);
console.log(`The exponantiation of ${num1} and ${num2} is ${num1 ** num2}`);

console.log("\n--------TASK2--------\n");

let s1 = "200";
let s2 = "-50";

let n1 = parseInt(s1);
let n2 = parseInt(s2);

console.log(
  `The greatest value between ${s1} and ${s2} is ${Math.max(n1, n2)}`
);
console.log(
  `The smallest value between ${s1} and ${s2} is ${Math.min(n1, n2)}`
);
console.log(`The average value between ${s1} and ${s2} is ${(n1 + n2) / 2}`);
console.log(
  `The absolute difference between ${s1} and ${s2} is ${Math.abs(n1 - n2)}`
);

console.log("\n--------TASK3--------\n");

let randomNumber1 = Math.floor(Math.random() * 50 + 1);
let randomNumber2 = Math.floor(Math.random() * 50 + 1);
let absDiff = Math.abs(randomNumber2 - randomNumber1);

console.log(`The absolute difference between numbers is ${absDiff}`);

console.log("\n--------TASK4--------\n");

let r1 = Math.floor(Math.random() * 50 + 1);
let r2 = Math.floor(Math.random() * 50 + 1);
let r3 = Math.floor(Math.random() * 50 + 1);
let r4 = Math.floor(Math.random() * 50 + 1);
let r5 = Math.floor(Math.random() * 50 + 1);

let max = Math.max(r1, r2, r3, r4, r5);
let min = Math.min(r1, r2, r3, r4, r5);

console.log(`The max value is ${max}`);
console.log(`The min value is ${min}`);

console.log("\n--------TASK5--------\n");

let randomN1 = Math.round(Math.random() * (100 - 50) + 50);
let randomN2 = Math.round(Math.random() * (100 - 50) + 50);
let randomN3 = Math.round(Math.random() * (100 - 50) + 50);
let sum = randomN1 + randomN2 + randomN3;

console.log(`The number 1 is ${randomN1}`);
console.log(`The number 2 is ${randomN2}`);
console.log(`The number 3 is ${randomN3}`);
console.log(`The sum of numbers is  ${sum}`);

console.log("\n--------TASK6--------\n");

let rn1 = getRandomNumber(1, 100);
let rn2 = getRandomNumber(1, 100);
let rn3 = getRandomNumber(1, 100);

if (rn1 > 25 && rn2 > 25 && rn3 > 25) {
  console.log(true);
}
if (rn1 < 25 || rn2 < 25 || rn3 < 25) {
  console.log(false);
}

console.log("\n--------TASK7--------\n");

let name = "David";
let firstChar = name.charAt(0);
let lastChar = name.at(-1);
let firstThreeChar = name.slice(0, 3);
let lastThreeChar = name.slice(-3);

console.log(`The length of the name is ${name.length}`);
console.log(`The first character in the name is ${firstChar}`);
console.log(`The last character in the name is ${lastChar}`);
console.log(`The first 3 characters in the name are ${firstThreeChar}`);
console.log(`The last 3 characters in the name are ${lastThreeChar}`);
