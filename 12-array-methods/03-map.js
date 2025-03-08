// Task 1
const numbers = [5, 3, 2, 20];
const oddEven = numbers.map((number) => (number % 2 === 0 ? "even" : "odd"));
console.log(oddEven);

// Task 2
const sentences = ["Good evening", "I like arrays", "It is Monday"];
// each sentence's first word -> ['Good', 'I', 'It'];
const firstWord = sentences.map((item) => {
  return item.slice(0, item.indexOf(" "));
  return item.split(" ")[0];
});
console.log(firstWord);

// Task 3
const salaries = [1000.2342, 5234.34533, 721.9786, 3452.5];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]
const newSalaries = salaries.map((item) => item.toFixed(2));
console.log(newSalaries);
