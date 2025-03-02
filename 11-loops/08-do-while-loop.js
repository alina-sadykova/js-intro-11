let num1 = 0;

while (num1 < 3) {
  console.log(num1);
  num1++;
}
console.log("END");

// DO WHILE LOOP
let num2 = 0;
do {
  console.log(num2);
  num2++;
} while (num2 < 3);

// generate random number until you get to 8
let random;
let countAttempt = 0;
do {
  random = Math.floor(Math.random() * 15) + 1;
  console.log(random);

  countAttempt++;
} while (random !== 8);

console.log("random", random);
console.log("attempts", countAttempt);

const arr = [1, 2, 10, 20, 12, 23];
const result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) result.push(arr[i]);

  if (result.length === 2) break;
}
console.log(result);
