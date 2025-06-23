console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named countPos() which takes an array of 
numbers as an argument and returns how many elements are 
positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/
function countPos(numbers) {
  // ----OPTION 1 - reduce()
  const result = numbers.reduce((total, value) => {
    if (value > 0) total++;

    return total;
  }, 0);
  return result;

  // ----OPTION 2 - filter
  //   return numbers.filter((item) => item > 0).length;

  // ----OPTION 3 - for ... of
  //   let total = 0;
  //   for (let num of numbers) {
  //     if (num > 0) total++;
  //   }
  //   return total;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/
const countA = (string) => {
  // ----OPTION 1 - split and reduce
  const result = string.split("").reduce((total, value) => {
    if (value.toLowerCase() === "a") total += 1;

    return total;
  }, 0);
  return result;

  // ----OPTION 2 - filter
  //   return string.split("").filter((item) => item.toUpperCase() === "A").length;

  // ----OPTION 3 - for ... of
  //   let count = 0;
  //   const arrayOfChars = string.split("");
  //   for (let char of arrayOfChars) {
  //     if (char.toUpperCase() === "A") count++;
  //   }
  //   return count;
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

console.log("\n--------TASK3--------\n");
/*
Requirement: 
Write a function named as countVowels() which takes a string 
word as an argument and returns the count of the vowel 
letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/
function countVowels(string) {
  // ----OPTION 1 - reduce
  return string.split("").reduce((count, value) => {
    if (
      value.toLowerCase() === "a" ||
      value.toLowerCase() === "e" ||
      value.toLowerCase() === "o" ||
      value.toLowerCase() === "u" ||
      value.toLowerCase() === "i"
    ) {
      count++;
    }
    return count;
  }, 0);

  // ----OPTION 2 - for ... of
  //   let count = 0;
  //   const vowels = ["a", "e", "o", "u", "i"];
  //   for (let char of string) {
  //     if (vowels.includes(char.toLowerCase())) count++;
  //   }
  //   return count;

  // ----OPTION 3 - filter
  //   const allVowels = "aeouiAEOUI";
  //   return string.split("").filter((item) => allVowels.includes(item)).length;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log("\n--------TASK4--------\n");
/*
Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant 
letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/
function countConsonants(word) {
  const allVowels = "aeouiAEOUI";
  if (word === "") return 0;
  // ----OPTION 1
  return word.split("").filter((item) => !allVowels.includes(item)).length;

  // ----OPTION 2
  //   return word.split("").reduce((total, value) => {
  //     if (!/[aeoui]/i.test(value)) total++;
  //     return total;
  //   }, 0);

  // ----OPTION 3
  //   return word.split("").reduce((total, value) => {
  //     if (!allVowels.includes(value)) total++;
  //     return total;
  //   }, 0);

  // ----OPTION 4
  //   let arrayOfChar = word.split("");
  //   let count = 0;
  //   for (let char of arrayOfChar) {
  //     if (
  //       char.toLowerCase() !== "a" &&
  //       char.toLowerCase() !== "e" &&
  //       char.toLowerCase() !== "o" &&
  //       char.toLowerCase() !== "u" &&
  //       char.toLowerCase() !== "i"
  //     )
  //       count += 1;
  //   }
  //   return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named countWords() which takes a string 
argument and returns the total count of words in the given 
string when invoked.

NOTE: Be careful about the extra whitespaces before and 
after the string.
Examples:
countWords("     Javascript is fun       ") -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 countWords("1 2 3 4") 				-> 4

*/
const countWords = (string) => {
  return string.trim().split(" ").length;
};

// OPTION 2
// const countWords = (str) => str.trim().split(" ").length;

/*
// OPTION 3
const countWords = (str) => {
    str = str.trim();
    let spaces = 0;

    for(character of str){
        if(character === ' ') spaces++;
    }

    return spaces + 1;
}
*/

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named as factorial() which takes a number as 
an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer 
n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/
function factorial(number) {
  // ----OPTION 1
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;

  // ----OPTION 2
  //   let factorial = 1;
  //   while (number > 1) {
  //     factorial *= number;
  //     number--;
  //   }
  //   return factorial;
}

// ----OPTION 3
// const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

// ----OPTION 4
// const factorial = (num) => {
//  let total = 1;

//     for(let i = 2; i <= num; i++){
//         total *= i;
//     }
//     return total;
// }

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

console.log("\n--------TASK7--------\n");
/*
Requirement: 
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word 
is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same 
backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true

*/
const isPalindrome = (word) => {
  // ----OPTION 1
  let reverseWord = word.split("").reverse().join("");

  // ----OPTION 2
  //   let reverseWord = "";
  //   for (let i = word.length - 1; i >= 0; i--) {
  //     reverseWord += word[i];
  //   }

  return word.toLowerCase() === reverseWord.toLowerCase();
};

// ----OPTION 3
// const isPalindrome = (str) =>
//   str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

// ----OPTION 4
// str = str.toLowerCase()
// let start = 0;
// let end = str.length - 1

// while(start < end){
//     if(str[start] !== str[end]) return false

//     start++;
//     end--;
// }
// return true

// ----OPTION 5
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== str[end]) return false
//     end--;

//     if(i >= end) return true;
// }
// return true
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

console.log("\n--------TASK8--------\n");
/*
Requirement: 
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/
const countMultipleWords = (array) => {
  // ----OPTION 1
  return array.reduce((count, value) => {
    if (value.trim().split(" ").length > 1) count++;
    return count;
  }, 0);

  // ----OPTION 2
  //   return array.filter((item) => item.trim().split(" ").length > 1).length;

  // ----OPTION 3
  //   let count = 0;
  //   for (let word of array) {
  //     if (word.trim().indexOf(" ") > 0) count++;
  //   }
  //   return count;
};

// ----OPTION 4
// const countMultipleWords = (arr) => arr.reduce((count, str) => str.trim().includes(' ')? count + 1 : count, 0)

// ----OPTION 5
// let count = 0;

// arr.forEach(e => {
//     if(e.trim().includes(' ')) count++;
// });

// return count;
console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(
  countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])
);
console.log(countMultipleWords([]));

console.log("\n--------TASK9--------\n");
/*
Requirement: 
Write a function named as count3OrLess() which takes a string word as an 
argument and returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

function count3OrLess(string) {
  // ----OPTION 1
  return string.split(" ").reduce((total, value) => {
    if (value.length <= 3 && value.length > 0) total++;
    return total;
  }, 0);

  // ----OPTION 2
  //   return string.split(" ").filter((item) => item !== "" && item.length <= 3)
  //     .length;

  // ----OPTION 3
  //   let count = 0;
  //   for (let char of string.split(" ")) {
  //     if (char.length > 0 && char.length <= 3) count++;
  //   }
  //   return count;
}

// --- OPTION 4
// const count3OrLess = (str) => str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length

// --- OPTION 5

// let count = 0;
// const strAsArr = str.trim().split(' ');

// strAsArr.forEach(word => {
//     if( word.length > 0 && word.length <= 3) count++;
// })
// return count
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

console.log("\n--------TASK10--------\n");
/*
Requirement:
Write a function named as isPrime() which takes a number as 
an argument and returns true if the number is prime or returns 
false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided 
only by itself and 1. It cannot be divided by any other number. 
The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/
function isPrime(number) {
  let isPrime = true;
  if (number <= 1) return false;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

// --- OPTION 2
// const isPrime = (num) => {
//   if(num < 2) return false;
//   if(num === 2 || num === 3) return true;
//   if(num % 2 === 0 || num % 3 === 0) return false;

//   let d = 5;
//   while(d < num){
//       if(num % d === 0) return false;
//       d+=2;
//   }
//   return true;
// }

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

console.log("\n--------TASK11--------\n");
/*
Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

function add(arr1, arr2) {
  const arr3 = [];
  let lognestArr = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < lognestArr; i++) {
    arr3.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return arr3;
}
// --- OPTION 2
// const add = (arr1, arr2) => {
//   if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
//   return arr1.map((value, i) => value + (arr2[i] || 0));
// };

/*
// --- OPTION 3
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
  for(let i = 0; i < arr2.length; i++){
      arr1[i] += arr2[i];
  }
  return arr1
*/
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

console.log("\n--------TASK12--------\n");
/*
Requirement: 
Write a function named as removeExtraSpaces() which takes a string 
word as an argument and returns the string back with all extra spaces 
removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/
function removeExtraSpaces(str) {
  return str
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .join(" ");
}
// --- OPTION 2
// const removeExtraSpaces = (str) =>
//   str
//     .trim()
//     .split(" ")
//     .filter((s) => s.length > 0)
//     .join(" ");

// --- OPTION 3
//let result = ''
// for(s of strAsArr){
//     if(s !== '') result += `${s} `
// }
// return result.slice(0,-1)
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

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
function findClosestTo10(numbers) {
  return numbers.reduce((closest, curr) => {
    if (curr === 10) return closest;

    if (
      Math.abs(curr - 10) < Math.abs(closest - 10) ||
      (Math.abs(curr - 10) === Math.abs(closest - 10) && curr < closest)
    ) {
      return curr;
    }
    return closest;
  });
}
// --- OPTION 2
const findClosestTo10 = (arr) => {
  let closestTo10 = Number.MAX_VALUE;
  let closestDiff = Number.MAX_VALUE;

  for (currentNum of arr) {
    if (currentNum === 10) continue;

    let currentDiff = Math.abs(10 - currentNum);

    if (
      currentDiff < closestDiff ||
      (currentDiff === closestDiff && currentNum < closestTo10)
    ) {
      closestTo10 = currentNum;
      closestDiff = currentDiff;
    }
  }
  return closestTo10;
};

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));

console.log("\n--------TASK14--------\n");
/*
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true
*/
function isEmailValid(string) {
  if (string.includes(" ")) return false;

  // ----OPTION 1
  let chars = string.split("@");
  if (chars.length !== 2) return false;
  if (chars[0].length < 2) return false;
  let charsDomain = chars[1].split(".");
  if (
    charsDomain.length < 2 ||
    charsDomain[0].length < 2 ||
    charsDomain[1].length < 2
  )
    return false;

  return true;

  // ----OPTION 2
  //   const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
  //   return emailRegex.test(string);
}

// --- OPTION 3
const isEmailValid = (email) => {
  if (email.includes(" ")) return false;
  if (email.split("@").length !== 2) return false;

  const beginning = email.split("@")[0];
  const middle = email.split("@")[1].split(".")[0];
  const end = email.split("@")[1].split(".")[1];

  if (beginning === undefined || middle === undefined || end === undefined)
    return false;

  return beginning.length >= 2 && middle.length >= 2 && end.length >= 2;
};
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

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

function isPasswordValid(str) {
  let lowerCase = /[a-z]/.test(str);
  let upperCase = /[A-Z]/.test(str);
  let digits = /[0-9]/.test(str);
  let space = /\s/.test(str);
  let specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);
  if (str.length >= 8 && str <= 16) return false;
  if (!lowerCase || !upperCase || (!digits && space && !specialChar))
    return false;

  return true;
}
// --- OPTION 2
const isPasswordValid = (pass) => {
  if (pass.includes(" ")) return false;
  if (pass.length < 8 || pass.length > 16) return false;

  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (char of pass) {
    if (char >= "A" && char <= "Z") hasUppercase = true;
    else if (char >= "a" && char <= "z") hasLowercase = true;
    else if (char >= "0" && char <= "9") hasDigit = true;
    else hasSpecial = true;
  }

  return hasUppercase && hasLowercase && hasDigit && hasSpecial;
};
console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));
