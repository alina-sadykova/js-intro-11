// Task 1
const numbers = [5, 7, 1, 3, 10];

numbers.forEach((number) => console.log(number));

// Task 2
const names = ["Alex", "John", "Jane", "Victoria"];

names.forEach((name) => {
  name.length > 4 ? console.log(name) : null; // Victoria
});

let filterNames = names.filter((name) => name.length > 4);
console.log(">>", filterNames); //['Victoria]

// Task 3
const nums = [5, 3, 2, 1];
let sum = 0;
let product = 1;
const arr = [];
nums.forEach((num) => {
  sum += num;
  product *= num;
  arr.push(num * 5);
});
console.log(sum);
console.log(product);
console.log(arr);
