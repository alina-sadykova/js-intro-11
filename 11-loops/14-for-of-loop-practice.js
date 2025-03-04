const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log(`\n------- Task01 --------\n`);
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4
let sum = 0;
let average = 0;
for (let num of numbers) {
  sum += num;
  average = (sum / numbers.length).toFixed();
}
// FOR EACH
numbers.forEach((num) => {
  sum += num;
});
console.log(sum);
console.log(average);

console.log(`\n------- Task02 --------\n`);
let product = 1;
for (let i = 3; i < numbers.length; i++) {
  product *= numbers[i];
}
console.log(product);

let product2 = 1;
for (let num of numbers.slice(3)) {
  product2 *= num;
}
console.log(product2);
