console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named hasUpperCase() which takes a 
string argument and return true if there is an 
uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/
function hasUpperCase(str) {
  // OPTION 1
  return str
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  // OPTION 2
  for (let char of str) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) return true;
  }
  return false;

  // OPTION 3
  return /[A-Z]/.test(str);
}
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named noDigit() which takes a string 
argument and returns a new string with all digits 
removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/
function noDigit(str) {
  // ---OPTION 1
  return str.replace(/[0-9]/g, "");

  // ---OPTION 2
  return [...str].filter((char) => !"0123456789".includes(char)).join("");

  // ---OPTION 3
  let newString = "";
  for (let char of str) {
    if (char < "0" || char > "9") {
      newString += char;
    }
  }
  return newString;
}
console.log(noDigit("")); //-> ""
console.log(noDigit("Javascript")); //-> "Javascript"
console.log(noDigit("123Hello")); //-> "Hello"
console.log(noDigit("123Hello World149")); //-> "Hello World”
console.log(noDigit("123Tech456Global149")); //-> "TechGlobal"

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named noVowel() which takes a string 
argument and returns a new string with all vowels 
removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/
function noVowel(str) {
  // ---OPTION 1
  return [...str].filter((char) => !"aeouiAEOUI".includes(char)).join("");

  // --- OPTION 2
  let newStr = "";
  for (let char of str) {
    if (!"aeoui".includes(char.toLowerCase())) {
      newStr += char;
    }
  }
  return newStr;
}
console.log(noVowel("TechGlobal")); // 	-> "TchGlbl"
console.log(noVowel("AEOxyz")); // 	-> "xyz"
console.log(noVowel("Javascript")); // 	-> "Jvscrpt"
console.log(noVowel("")); // 	-> ""
console.log(noVowel("125$")); // 	-> "125$"

console.log("\n--------TASK4--------\n");
/*
Requirement:
Write a function named no13() which takes an array of 
numbers as argument and return a new array with all 
13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
*/
function no13(numbers) {
  // ---OPTION 1
  return numbers.map((number) => {
    if (number !== 13) {
      return number;
    } else {
      return (number = 0);
    }
  });

  // ---OPTION 2
  const newArr = [];
  for (let num of numbers) {
    if (num === 13) {
      num = 0;
      newArr.push(num);
    } else newArr.push(num);
  }
  return newArr;
}
console.log(no13([1, 2, 3, 4])); // 		-> [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // 		-> [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13])); // 	-> [0, 0, 0, 0, 0]
console.log(no13([])); // 			-> []

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named middleInt() which takes three 
number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/
function middleInt(num1, num2, num3) {
  // --- OPTION 1
  if (num1 >= num2 && num1 <= num3) {
    return num1;
  } else if (num2 >= num3 && num2 <= num1) {
    return num2;
  } else {
    return num3;
  }
  // --- OPTION 2
  return [num1, num2, num3].sort((a, b) => a - b)[1];
}
console.log(middleInt(1, 2, 2)); // 	-> 2
console.log(middleInt(5, 5, 8)); // 	-> 5
console.log(middleInt(5, 3, 5)); // 	-> 5
console.log(middleInt(1, 1, 1)); // 	-> 1
console.log(middleInt(-1, 25, 10)); // 	-> 10

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named sumOfDigits() which takes a 
string argument and returns sum of all digits from 
the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0
*/
function sumOfDigits(str) {
  // ---OPTION 1
  return str.split("").reduce((acc, curr) => {
    if ("0123456789".includes(curr)) {
      acc += parseInt(curr);
    }
    return acc;
  }, 0);

  // ---OPTION 2
  let sum = 0;
  for (let char of str) {
    if (/[0-9]/.test(char)) sum += parseInt(char);
  }
  return sum;
}
console.log(sumOfDigits("Javascript")); //-> 0
console.log(sumOfDigits("John’s age is 29")); //-> 11
console.log(sumOfDigits("$125.0")); //	-> 8
console.log(sumOfDigits("")); //	-> 0

console.log("\n--------TASK7--------\n");
/*
Requirement:
Write a function named arrFactorial() which takes an 
array of numbers as argument and return the array 
with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/
function arrFactorial(numbers) {
  function factorial(n) {
    if (n < 0) return "Negative cannot be factorial";
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
  }
  return numbers.map((num) => factorial(num));
}
console.log(arrFactorial([1, 2, 3, 4])); // ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // -> [1,120]
console.log(arrFactorial([5, 0, 6])); // -> [120, 1, 720]
console.log(arrFactorial([])); // -> []

console.log("\n--------TASK8--------\n");
/*
Requirement:
Write a function named categorizeCharacters() which 
takes a string word as argument and return an array 
as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/
function categorizeCharacters(str) {
  let letters = [];
  let digits = [];
  let specials = [];

  // ---OPTION 1
  str.split("").forEach((el) => {
    if (el.toLowerCase() >= "a" && el.toLowerCase() <= "z") letters.push(el);
    else if (el > "0" && el < "9") digits.push(el);
    else specials.push(el);
  });

  // ---OPTION 2
  //   for (let char of str) {
  //     if (/[a-zA-z]/.test(char)) letters.push(char);
  //     else if (/[0-9]/.test(char)) digits.push(char);
  //     else specials.push(char);
  //   }
  return [letters.join(""), digits.join(""), specials.join("")];
}
console.log(categorizeCharacters("1234")); //-> [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); //-> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); //-> [ 'abc', '123', '$%%' ]
