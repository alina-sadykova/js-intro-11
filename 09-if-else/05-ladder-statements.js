const { getRandomNumber } = require("../utils/MathHelper");
/*
get a random number between -5 and 5
find if the number is positive, negative, neutral (0)
*/
let random = getRandomNumber(-5, 5);
console.log(`Random number is ${random}.`);

if (random > 0) {
  console.log("POS");
} else if (random < 0) {
  console.log("NEG");
} else {
  console.log("NEUTRAL");
}

let result = random > 0 ? "POS" : random < 0 ? "NEG" : "NEUTRAL";
console.log(result);

console.log("END");
