console.log(`\n------- Task01 --------\n`);
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4
let countPositiveNumbers = 0;
for (let number of numbers) {
  if (number > 0) countPositiveNumbers++;
}
console.log(countPositiveNumbers);

console.log(`\n------- Task02 --------\n`);
let countNegative = 0;
for (let number of numbers) {
  if (number < 0) countNegative++;
}
console.log(countNegative);

console.log(`\n------- Task03 --------\n`);
let countEvenNum = 0;
for (let number of numbers) {
  if (number % 2 === 0) countEvenNum++;
}
console.log(countEvenNum);

console.log(`\n------- Task04 --------\n`);
let countPositiveOddNum = 0;
for (let number of numbers) {
  if (number > 0 && number % 2 !== 0) countPositiveOddNum++;
}
console.log(countPositiveOddNum);

console.log(`\n------- Task05 --------\n`);
