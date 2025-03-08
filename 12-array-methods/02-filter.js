const names = ["Maria", "Alex", "John", "Jane", "Victoria"];

const filteredNames = names.filter((name) => {
  return name.length === 4;
});

console.log(filteredNames);
console.log(names);

names
  .filter((name) => name.length === 4)
  .forEach((name) => console.log("name:", name));

// Task 2
let countA = 0;
names.forEach((name) => {
  if (name.toLowerCase().includes("a")) countA++;
});
console.log(countA);

const filteredNames2 = names.filter((name) => name.toLowerCase().includes("a"));
console.log(filteredNames2.length);

// Task 3
const numbers = [10, 5, 100, 77, 50, 65, 0];
console.log(numbers.filter((number) => number >= 50));

// Task 4
const fruits = ["Orange", "Apple", "Red apple", "Pineapple", "Kiwi"];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2
const fruitsHasApple = fruits.filter((fruit) =>
  fruit.toLowerCase().includes("apple")
);
const fruitsHaveAChar = fruits.filter((fruit) =>
  fruit.toLowerCase().includes("a")
).length;
const fruitsHaveIChar = fruits.filter((fruit) =>
  fruit.toLowerCase().includes("i")
).length;
console.log(fruitsHasApple);
console.log(fruitsHaveAChar);
console.log(fruitsHaveIChar);
