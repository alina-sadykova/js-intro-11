const { getRandomNumber } = require("../utils/MathHelper");

let random = getRandomNumber(-5, 5);
console.log(`Random number is ${random}.`);

if (random > 0) {
  console.log("POS");
} else if (random < 0) {
  if (random < 0) {
    console.log("NEG");
  } else {
    console.log("NEUTRAL");
  }
}

console.log("END");

if (random === 0) {
  console.log("NEUTRAL");
} else {
  if (random < 0) {
    console.log("NEG");
  } else {
    console.log("POS");
  }
}
