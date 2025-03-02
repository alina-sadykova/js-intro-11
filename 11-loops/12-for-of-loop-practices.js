console.log(`\n------- Task01 --------\n`);
const names = ["John", "Jane", "Alex", "Max", "james"];
// Log each name
for (let name of names) {
  console.log(name);
}

console.log(`\n------- Task02 --------\n`);
// Count how many names starts with j or J -> 3
let count = 0;
for (let name of names) {
  if (name.toLowerCase().startsWith("j")) count++;
}
console.log(count);
