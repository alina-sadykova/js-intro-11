const numbers = [3, 6, 10, 4];
let countEven = numbers.reduce((accumulator, current) => {
  if (current % 2 == 0) return (accumulator += 1);
  return accumulator;
}, 0);
console.log(countEven);

let sum = numbers.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(sum);

let product = numbers.reduce((acc, curr) => {
  return acc * curr;
});
console.log(product);

const fruits = ["Apple", "Orange", "Kiwi", "Pineapple", "Mango", "Melon"];
// Find shortest fruit -> Kiwi
let shortestWord = fruits.reduce((acc, curr) =>
  curr.length < acc.length ? curr : acc
);
console.log(shortestWord);
