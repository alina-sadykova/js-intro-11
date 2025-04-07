console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named hasLowerCase() which takes a 
string argument and returns true if there is a 
lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") 		-> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ") 		-> true
*/

function hasLowerCase(str) {
  return str
    .trim()
    .split("")
    .some((char) => char >= "a" && char <= "z");

  // --- OPTION 2
  const arrayOfChars = str.trim().split("");
  for (let char of arrayOfChars) {
    if (/^[a-z]$/.test(char)) return true;
  }
  return false;
}
console.log(hasLowerCase("")); //-> false
console.log(hasLowerCase("JAVASCRIPT")); //-> false
console.log(hasLowerCase("hallo")); //-> true
console.log(hasLowerCase("125$")); //-> false
console.log(hasLowerCase("   a   ")); //-> true

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named noZero() which takes an array 
of numbers as argument and returns the array back 
with all zeros removed.
Examples:
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100 0]) 	-> [10, 100]
*/
function noZero(numbers) {
  return numbers.filter((number) => number !== 0);
}
console.log(noZero([1])); //	-> [1]
console.log(noZero([1, 1, 10])); //-> [1, 1, 10]​
console.log(noZero([0, 1, 10])); //-> [1, 10]
console.log(noZero([0, 0, 0])); //-> []
console.log(noZero([10, 100, 0])); //-> [10, 100]

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named numberAndSquare() which takes 
an array of numbers as argument and returns a 
multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
*/
function numberAndSquare(numbers) {
  return numbers.map((num) => [num, num * num]);

  // --- OPTION 2
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    newArr.push([numbers[i], numbers[i] * numbers[i]]);
  }
  return newArr;
}
console.log(numberAndSquare([1, 2, 3])); //-> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); //-> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); //-> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //-> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //-> [[0, 0], [1, 1], [-10, 100]]

console.log("\n--------TASK4--------\n");
/*
Requirement:
Write a function named containsValue() which takes a string 
array and a string as arguments and returns a boolean value. 
Search the string variable inside of the array and return 
true if it exists in the array. If it doesn’t exist, return 
false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
*/

function containsValue(arr, str) {
  if (arr.length === 0) return false;

  let valueExists = false;

  arr.forEach((el) => {
    if (el === str) valueExists = true;
  });

  return valueExists;
}
console.log(containsValue(["abc", "foo", "javascript"], "hello")); //		-> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //		-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //-> true

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named reverseSentence() which takes a string 
as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not 
enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"
*/
function reverseSentence(str) {
  if (str.split(" ").length <= 1) return "There is not enough words!";

  let newStr = str.toLowerCase().split(" ").reverse().join(" ");
  return newStr.slice(0, 1).toUpperCase() + newStr.slice(1);
}
console.log(reverseSentence("Hello")); //		-> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); //		-> "Fun is javascript"
console.log(reverseSentence("This is a sentence")); //	-> "Sentence a is this"

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named removeStringSpecialsDigits() which 
takes a string as argument and return a string without the 
special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"
*/
function removeStringSpecialsDigits(str) {
  return str
    .split("")
    .filter(
      (el) => el === " " || (el.toLowerCase() >= "a" && el.toLowerCase() <= "z")
    )
    .join("");
}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //	-> "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); //		-> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //	-> "Automation"

console.log("\n--------TASK7--------\n");
/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes 
a string array as argument and return back without the special 
characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]
*/

function removeArraySpecialsDigits(arr) {
  return arr.map((el) => {
    return el
      .split("")
      .filter((char) => char.toLowerCase() >= "a" && char.toLowerCase() <= "z")
      .join("");
  });
}
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); //-> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); //-> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); //-> ["Automation", "tool"]

console.log("\n--------TASK8--------\n");
/*
Requirement:
Write a function named getCommons() which takes two string 
arrays as arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]
*/
function getCommons(arr1, arr2) {
  let result = [];
  for (let el of arr1) {
    for (let item of arr2) {
      if (el === item && !result.includes(el)) result.push(el);
    }
  }
  return result;
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //		-> []
console.log(
  getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])
); //	-> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //	-> ["C#"]

console.log("\n--------TASK9--------\n");
/*
Requirement:
Write a function named noXInVariables() which takes an array 
as argument and return an array that all the x or X removed 
from the elements. 
NOTE: If the element is existing of x or X letters only, then 
completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]
*/
function noXInVariables(arr) {
  return arr
    .map((el) => {
      if (typeof el === "string") {
        return el
          .split("")
          .filter((char) => char.toLowerCase() !== "x")
          .join("");
      }
      return el;
    })
    .filter((el) => el !== "" && el !== undefined);
}
console.log(noXInVariables(["abc", 123, "#$%"])); //-> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); //-> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); //-> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); //-> ["yyy", "ABC"]
