console.log(`\n------- Task01 --------\n`);
const numbers = [3, 4, 7, 3, 2, 2, 7];
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19
let sum = 0;
for (let i = 0; i < numbers.length; i += 2) {
  sum += numbers[i];
}
console.log(sum);

console.log(`\n------- Task02 --------\n`);
let product = 1;
for (let i = 1; i < numbers.length; i += 2) {
  product *= numbers[i];
}
console.log(product);
