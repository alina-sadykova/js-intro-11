console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named noSpace() which takes a string 
as argument and returns a new string with all the 
spaces removed.
Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/
function noSpace(string) {
  return string
    .trim()
    .split("")
    .filter((item) => item !== " ")
    .join("");
}
console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named replaceFirstLast() which takes a 
string argument and returns a new string with the first 
and last characters replaced.

NOTE: If the length is less than 2, return an empty 
string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/
function replaceFirstLast(string) {
  if (string.trim().length < 2) return "";
  return string[string.length - 1] + string.slice(1, -1) + string[0];
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string 
doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/
function hasVowel(string) {
  let vowels = ["a", "e", "o", "u", "i"];
  let arrayOfChars = string.toLowerCase().split("");
  if (string.length === 0) return false;
  // --- OPTION 1

  for (let char of arrayOfChars) {
    if (vowels.includes(char)) {
      return true;
    }
  }
  return false;

  // --- OPTION 2
  //   let hasVowels = false;
  //   arrayOfChars.forEach((char) => {
  //     if (vowels.includes(char)) {
  //       hasVowels = true;
  //     }
  //   });
  //   return hasVowels;

  // --- OPTION 3
  //   return /[aeoui]/i.test(string);
}
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

console.log("\n--------TASK4--------\n");
/*
Requirement:
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the 
given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/
function checkAge(number) {
  const currentYear = 2023;
  let age = currentYear - number;
  if (age < 16 && age > 0) console.log("AGE IS NOT ALLOWED");
  else if (age > 120 || number > currentYear) console.log("AGE IS NOT VALID");
  else console.log("AGE IS ALLOWED");
}
checkAge(2015);
checkAge(2007);
checkAge(2050);
checkAge(1920);
checkAge(1800);

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments 
and will return average of min and max numbers​.
Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15
*/

function averageOfEdges(num1, num2, num3) {
  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);

  return (min + max) / 2;
}
console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named noA() which takes an array of strings as 
argument and will return a new array with all elements starting 
with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/
function noA(arr) {
  return arr.map((el) => {
    if (el.toLowerCase().slice(0, 1) === "a") {
      el = "###";
    }
    return el;
  });
}
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

console.log("\n--------TASK7--------\n");
/*
Requirement:
Write a function named no3and5() which takes an array of integer 
numbers as argument and will return a new array with elements 
replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/
function no3and5(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) num = 101;
    else if (num % 5 === 0) num = 90;
    else if (num % 3 === 0) num = 100;
    return num;
  });
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

console.log("\n--------TASK8--------\n");
/*
Requirement:
Write a function named countPrimes() which takes an array 
of integer numbers as argument and will return the number of 
the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5
*/
function countPrimes(arr) {
  let count = 0;

  function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    for (let i = 2; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let el of arr) {
    if (isPrime(el)) count++;
  }
  return count;
}
console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 	-> 4
console.log(countPrimes([41, 53, 19, 47, 67])); // 	-> 5

console.log("\n--------TASK9--------\n");
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]
*/
function removeDuplicates(arr) {
  let newArr = [];
  arr.forEach((el) => {
    if (!newArr.includes(el)) newArr.push(el);
  });
  return newArr;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); //-> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); //-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); //-> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); //-> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); //-> ["1", "2", "3"]

console.log("\n--------TASK10--------\n");
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an 
argument and returns true if the given date is valid or returns 
false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020 ") 		-> true
*/
function isDateFormatValid(str) {
  let month = str.split("/")[0];
  let date = str.split("/")[1];
  return (
    str.includes("/") &&
    month.length === 2 &&
    month <= "12" &&
    month >= "01" &&
    date.length === 2 &&
    date <= "31" &&
    month >= "01"
  );
}
console.log(isDateFormatValid("")); //-> false
console.log(isDateFormatValid("15/30/2020")); //-> false
console.log(isDateFormatValid("10-30-2020 ")); //-> false
console.log(isDateFormatValid("10.30.2020")); //-> false
console.log(isDateFormatValid("5/30/2020")); //-> false
console.log(isDateFormatValid("05/30/2020 ")); //-> true
console.log(isDateFormatValid("10/2/2020")); //-> false
console.log(isDateFormatValid("10/02/2020 ")); //-> true

console.log("\n--------TASK11--------\n");
/*
Requirement: 
Write a method named secondMax() takes an array argument and returns 
the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array 
has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMax([3, 4, 5, 6]) 		-> 5
secondMax([10]) 		-> 10
*/

function secondMax(arr) {
  if (arr.length === 1) return arr[0];
  const newArr = [];
  arr.forEach((el) => {
    if (!newArr.includes(el)) newArr.push(el);
  });
  return newArr.sort((a, b) => b - a)[1];
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMax([3, 4, 5, 6])); // 		-> 5
console.log(secondMax([10])); // 		-> 10

console.log("\n--------TASK12--------\n");
/*
Requirement: 
Write a method named secondMin() takes an array argument and returns 
the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array 
has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMin([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMin([3, 4, 5, 6]) 		-> 4
secondMin([10]) 		-> 10
*/
function secondMin(arr) {
  if (arr.length === 1) return arr[0];
  const newArr = [];
  arr.forEach((el) => {
    if (!newArr.includes(el)) newArr.push(el);
  });
  return newArr.sort((a, b) => a - b)[1];
}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMin([3, 4, 5, 6])); // 		-> 4
console.log(secondMin([10])); //

console.log("\n--------TASK13--------\n");
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of 
one element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"
*/
function mostRepeated(arr) {
  // --- OPTION 1
  let count = 0;
  let element = arr[0];
  arr.forEach((el) => {
    if (element === el) {
      element = el;
      count++;
    }
  });
  return element;

  // --- OPTION 2
  return arr.reduce((count, currEl) => {
    let element = arr[0];
    if (element === currEl) {
      element = currEl;
      count++;
    }
    return element;
  }, 0);
}
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 			-> 4
console.log(
  mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])
); // 	-> "pen"
console.log(mostRepeated([10])); // 					-> 10
console.log(mostRepeated(["TechGlobal"])); // 				-> "TechGlobal"
