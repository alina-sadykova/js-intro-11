const { getRandomNumber } = require("../utils/MathHelper");

let r1 = getRandomNumber(-100, 100);
console.log(r1);

switch (true) {
  case r1 > 0:
    console.log("Positive");
    break;
  case r1 < 0:
    console.log("Negative");
    break;
  default:
    console.log("Neutral");
}

if (r1 > 0) console.log("Positive");
else if (r1 < 0) console.log("Negative");
else console.log("Neutral");
