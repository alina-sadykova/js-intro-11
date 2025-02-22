// Task 1
let random = Math.floor(Math.random() * 50 + 1);
let result = random * 5;
console.log(`${random} * 5 = ${result}`);

// Task 2
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

let min = Math.min(randomNum1, randomNum2);
let max = Math.max(randomNum1, randomNum2);

let difference = max - min;

console.log(`Min number is ${min}`);
console.log(`Max number is ${max}`);
console.log(`Difference is ${difference}`);

// Task 3
let randomN = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let remainder = randomN % 10;
console.log(`${randomN} % 10 is ${remainder}`);

// Task 4

let r1 = Math.floor(Math.random() * 10 + 1) * 5;
let r2 = Math.floor(Math.random() * 10 + 1) * 4;
let r3 = Math.floor(Math.random() * 10 + 1) * 3;
let r4 = Math.floor(Math.random() * 10 + 1) * 2;
let r5 = Math.floor(Math.random() * 10 + 1) * 1;

let points = r1 + r2 + r3 + r4 + r5;

console.log(points);

// Task 5
r1 = Math.floor(Math.random() * 25 + 1);
r2 = Math.floor(Math.random() * (50 - 26 + 1) + 26);
r3 = Math.floor(Math.random() * (75 - 51 + 1) + 51);
r4 = Math.floor(Math.random() * (100 - 76 + 1) + 76);

console.log(r1, r2, r3, r4);
let maxNum = Math.max(r1, r2, r3, r4);
let minNum = Math.min(r1, r2, r3, r4);
let absDiffBetweenMaxAndMin = Math.abs(maxNum - minNum);
let aabsDiffBetweebThirdAndSecond = Math.abs(r3 - r2);
let average = (r1 + r2 + r3 + r4) / 4;

console.log(absDiffBetweenMaxAndMin);
console.log(aabsDiffBetweebThirdAndSecond);
console.log(average);
