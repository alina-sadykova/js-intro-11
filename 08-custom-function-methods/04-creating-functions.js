// Function expression
const sum2 = function (num1, num2) {
  return num1 + num2;
};
console.log(sum2(1, 3));

// Arrow function
const num3 = (num1, num2) => num1 + num2;
console.log(num3(2, 3));

// Task 1
// // Function declaration
// function isWin(num1, num2) {
//   return num1 > 0 && num2 > 0;
// }
// console.log(isWin(1, 2)); //true

// // Function expression
// const isWin = function isWin(num1, num2) {
//   return num1 > 0 && num2 > 0;
// };
// console.log(isWin(-2, 3)); //false

// Arrow function
const isWin = (num1, num2) => num1 > 0 && num2 > 0;
console.log(isWin(2)); //false

/*
Write a function called theEnd
it takes 2 parameters called str, bool
if bool is true, return the first letter from the given string
if bool is false, return the last letter from the string

theEnd("Hello", true)   → "H"
theEnd("Hello", false)  → "o"
theEnd("oh", true)      → "o"
*/
function theEnd(str, bool) {
  if (bool) {
    return str[0];
  } else {
    return str.at(-1);
  }
}
console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("Oh", false));

const theEnd2 = (str, bool) => (bool ? str[0] : str.at(-1));
console.log(theEnd2("Hello", true));
console.log(theEnd2("Hello", false));
console.log(theEnd2("Oh", false));
