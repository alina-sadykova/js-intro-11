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
const categorizeCharacters = (str) => {
  return str.split("").reduce(
    (acc, curr) => {
      if (curr.toLowerCase() >= "a" && curr.toLowerCase() <= "z")
        acc[0] += curr;
      else if (curr >= "0" && curr <= "9") acc[1] += curr;
      else acc[2] += curr;
      return acc;
    },
    ["", "", ""]
  );
};
console.log(categorizeCharacters("1234")); //-> [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); //-> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); //-> [ 'abc', '123', '$%%' ]

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
const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

const factorial2 = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial2(num - 1);
};
const arrFactorial = (arr) => {
  return arr.map((el) => factorial2(el));
  return arr.map((el) => factorial(el));
};
console.log(arrFactorial([1, 2, 3, 4])); // ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // -> [1,120]
console.log(arrFactorial([5, 0, 6])); // -> [120, 1, 720]
console.log(arrFactorial([])); // -> []

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
const sumOfDigits = (str) => {
  return str
    .split("")
    .filter((el) => el >= "0" && el <= "9")
    .reduce((result, el) => (result += Number(el)), 0);
};
console.log(sumOfDigits("Javascript")); //-> 0
console.log(sumOfDigits("John’s age is 2-9")); //-> 11
console.log(sumOfDigits("$125.0")); //	-> 8
console.log(sumOfDigits("")); //	-> 0
