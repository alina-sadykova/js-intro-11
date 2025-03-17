console.log("\n--------TASK15--------\n");
/*
Requirement: 
Write a function named as isPasswordValid() which takes a string 
email as an argument and returns true if the password is valid or 
returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/
// const isPasswordValid = (password) => {
//   if (password.length < 8 || password.length > 16) return false;
//   if (password.includes(" ")) return false;

//   let hasDigit = false,
//     hasLowerCase = false,
//     hasUpperCase = false,
//     hasSpecial = false;
//   for (let char of password) {
//     if (char >= "0" && char <= "9") hasDigit = true;
//     else if (char >= "a" && char <= "z") hasLowerCase = true;
//     else if (char >= "A" && char <= "Z") hasUpperCase = true;
//     else hasSpecial = true;
//   }
//   return hasDigit && hasLowerCase && hasUpperCase && hasSpecial;
// };

function isPasswordValid(password) {
  if (password.length < 8 || password.length > 16) return false;

  let hasDigit = false;
  let hasUppercase = false;
  let hasLowercase = false;
  let hasSpecialChar = false;
  let hasSpace = false;
  password.split("").filter((char) => {
    if (char >= "0" && char <= "9") hasDigit = true;
    if (char >= "A" && char <= "Z") hasUppercase = true;
    if (char >= "a" && char <= "z") hasLowercase = true;
    if (
      !(char >= "0" && char <= "9") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "a" && char <= "z")
    )
      hasSpecialChar = true;
    if (char === " ") hasSpace = true;
  });
  return (
    !hasSpace && hasDigit && hasUppercase && hasLowercase && hasSpecialChar
  );
}
console.log(isPasswordValid("")); // > false
console.log(isPasswordValid("abcd")); // > false
console.log(isPasswordValid("abcd1234")); // > false
console.log(isPasswordValid("Abcd1234")); // > false
console.log(isPasswordValid("Chicago12345US!#$%")); // > false
console.log(isPasswordValid("Abcd1234$")); // > true
console.log(isPasswordValid("Chicago123$")); // > true
console.log(isPasswordValid("Test1234#")); // > true

console.log("\n--------TASK13--------\n");
/*
Requirement: 
Write a function named findClosestTo10() which takes 
an array of numbers as argument and returns the closest 
element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

//[10, -13, 5, 70, 15, 57]
const findClosestTo10 = (arr) => {
  let closestTo10 = Number.MAX_VALUE; // 15
  let closestDiff = Number.MAX_VALUE; // 5

  for (let num of arr) {
    //5
    if (num === 10) continue;

    let currDiff = Math.abs(num - 10); // 5

    if (
      currDiff < closestDiff ||
      (currDiff === closestDiff && num < closestTo10)
    ) {
      closestTo10 = num;
      closestDiff = currDiff;
    }
  }
  return closestTo10;
};
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); // 8
console.log(findClosestTo10([10, -13, 15, 70, 5, 57])); // 5

/*
  Requirement:
  Write a function named as isPrime() which takes a 
  number as an argument and returns true if the 
  number is prime or returns false otherwise when 
  invoked.
  NOTE: Mathematically, Prime number is a number that 
  can be divided only by itself and 1. It cannot be divided 
  by any other number. The smallest prime number is 2 
  and 2 is the only even prime number.
  Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
  NOTE: The smallest prime number is 2 and there is no 
  negative prime numbers.
  Examples:
  isPrime(5)  -> true
  isPrime(2)  -> true
  isPrime(29)  -> true
  isPrime(-5) -> false
  isPrime(0) -> false
  isPrime(1) -> false
  */

const isPrime = (num) => {
  //9
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i < num; i += 2) {
    //3
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(13));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*
  Requirement:
  Write a function named as factorial() which takes a 
  number as an argument and returns the factorial of the 
  number when invoked.
  NOTE: Mathematically, the factorial of a non-negative 
  integer n is defined as:
  n! = n × (n-1) × (n-2) × ... × 2 × 1
  Assume you will not be given a negative number.
  Examples:
  factorial(5)  -> 120
  factorial(4) -> 24
  factorial(0) -> 1
  factorial(1) -> 1
  */

const factorial1 = (num) => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2 * factorial(2 - 1) -> 2 * 1 -> 2
// factorial(3) = 3 * factorial(3 - 1) -> 3 * 2 -> 6
// factorial(4) = 4 * factorial(4-1) -> 4 * 6 -> 24
// factorial(5) = 5 * factorial(5-1) -> 5 * 24 -> 120

const factorial = (num) =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1);

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
