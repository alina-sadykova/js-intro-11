const { getRandomNumber } = require("../utils/MathHelper");

let r1 = getRandomNumber(1, 3);
console.log(r1);

// if (r1 === 1) {
//   console.log("ONE");
// } else if (r2 === 2) {
//   console.log("TWO");
// } else {
//   console.log("THREE");
// }

switch (r1) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  default:
    console.log("THREE");
}
console.log("END");
