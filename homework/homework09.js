console.log("\n--------TASK1--------\n");

/*
Requirement:
Write a function named fizzBuzz1() which takes a 
number argument and returns "Fizz" if the given 
number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is 
divisible by both 3 and 5. Otherwise, it will return 
the number itself.​
Examples:
fizzBuzz1(0) 		-> "FizzBuzz"
fizzBuzz1(1) 		-> 1
fizzBuzz1(3) 		-> "Fizz"
fizzBuzz1(5) 		-> "Buzz"
fizzBuzz1(30) 	-> "FizzBuzz"
fizzBuzz1(10) 	-> "Buzz"
fizzBuzz1(15) 	-> "FizzBuzz"
fizzBuzz1(-15) 	-> "FizzBuzz"
*/
function fizzBuzz1(number) {
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}
console.log(fizzBuzz1(0)); //-> "FizzBuzz"
console.log(fizzBuzz1(1)); //-> 1
console.log(fizzBuzz1(3)); //-> "Fizz"
console.log(fizzBuzz1(5)); //-> "Buzz"
console.log(fizzBuzz1(30)); //-> "FizzBuzz"
console.log(fizzBuzz1(10)); //-> "Buzz"
console.log(fizzBuzz1(15)); //-> "FizzBuzz"
console.log(fizzBuzz1(-15)); //-> "FizzBuzz"

console.log("\n--------TASK2--------\n");

/*
Requirement:
Write a function named fizzBuzz2() which takes a number 
argument and returns and array consist of numbers starting 
from 1 to given number. However, it will return "Fizz" for 
the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
fizzBuzz2(2) 		-> [ 1, 2 ]
*/
function fizzBuzz2(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(fizzBuzz2(3)); //-> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); //-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); //-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); //-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); //-> [ 1, 2 ]

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named findSumNumbers() which takes a string 
argument and returns sum of the all numbers appears in the 
string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/
function findSumNumbers(str) {
  let number = "";
  const numbers = [];
  for (let char of str) {
    if (char >= "0" && char <= "9") {
      number += char;
    } else {
      if (number) {
        numbers.push(number);
        number = "";
      }
    }
  }
  if (number) numbers.push(number);
  return numbers.reduce((sum, value) => (sum += Number(value)), 0);

  // --- OPTION 2
  const checkNum = str.match(/\d+/g);
  if (!checkNum) return 0;

  return checkNum.reduce((sum, value) => {
    return sum + parseInt(value);
  }, 0);
}
console.log(findSumNumbers("abc$")); //-> 0
console.log(findSumNumbers("a1b4c 6#")); //-> 11
console.log(findSumNumbers("ab110c045d")); //-> 155
console.log(findSumNumbers("525")); //-> 525
console.log(findSumNumbers("3 for 10 dollars")); //-> 13

console.log("\n--------TASK4--------\n");

/*
Requirement:
Write a function named findBiggestNumber() which takes a string argument and 
returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$") 		-> 0
findBiggestNumber("a1b4c  6#") 		-> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		-> 525
findBiggestNumber("3 for 10 dollars") 	-> 10
*/
function findBiggestNumber(str) {
  let num = "";
  let array = [];
  for (let char of str) {
    if (char >= "0" && char <= "9") num += char;
    else {
      if (num) {
        array.push(num);
        num = "";
      }
    }
  }
  if (num) array.push(num);
  if (array.length < 1) return 0;
  return array.reduce((total, value) => {
    if (Number(value) > Number(total)) return value;
    else return total;
  });

  // --- OPTION 2
  const numbers = str.match(/\d+/g);
  if (!numbers) return 0;
  let biggestNum = numbers[0];
  numbers.forEach((el) => {
    if (Number(el) > Number(biggestNum)) biggestNum = el;
  });
  return biggestNum;
}
console.log(findBiggestNumber("abc$")); //-> 0
console.log(findBiggestNumber("a1b4c  6#")); //-> 6
console.log(findBiggestNumber("ab110c045d")); //-> 110
console.log(findBiggestNumber("525")); //-> 525
console.log(findBiggestNumber("3 for 10 dollars")); //-> 10

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes 
a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
countOccurrencesOfCharacters("www" ) 	-> "3w"
*/
function countOccurrencesOfCharacters(str) {
  if (str === "") return "";

  let chars = {};

  str.split("").forEach((char) => {
    chars[char] = (chars[char] || 0) + 1;
  });

  let result = "";
  for (let char in chars) {
    result += chars[char] + char;
  }

  return result;
}
console.log(countOccurrencesOfCharacters("")); //-> ""
console.log(countOccurrencesOfCharacters("abc")); //-> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); //-> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); //-> "2a2A1a”
console.log(countOccurrencesOfCharacters("www")); //-> "3w"

console.log("\n--------TASK6--------\n");

/*
Requirement:
Write a function named fibonacciSeries1() which takes a 
number n argument and returns the n series of Fibonacci 
numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]
*/
function fibonacciSeries1(n) {
  let fibonacciNumbers = [0, 1];
  if (n <= 0) return [];
  else if (n === 1) return fibonacciNumbers.slice(0, n);
  else {
    for (let i = 2; i < n; i++) {
      fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1]); // 2
    }
  }
  return fibonacciNumbers;
}
console.log(fibonacciSeries1(3)); //-> [0, 1, 1]
console.log(fibonacciSeries1(5)); //-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); //-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); //-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); //-> [0]
console.log(fibonacciSeries1(2)); //-> [0, 1]

console.log("\n--------TASK7--------\n");
/*
Requirement:
Write a function named fibonacciSeries2() which takes a 
number n argument and returns the nth series of Fibonacci 
number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2 
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0
*/
function fibonacciSeries2(n) {
  let fibonacciNumbers = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1]);
  }
  return fibonacciNumbers[n - 1];
}
console.log(fibonacciSeries2(2)); //-> 1
console.log(fibonacciSeries2(4)); //-> 2
console.log(fibonacciSeries2(8)); //-> 13
console.log(fibonacciSeries2(9)); //-> 21
console.log(fibonacciSeries2(1)); //-> 0

console.log("\n--------TASK8--------\n");
/*
Requirement:
Write a function named findUniques() which takes two array of 
number arguments and returns the array which has only the 
unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values 
from the other array.
Examples:
findUniques([], []) 		-> []
findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	-> []
findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
*/
function findUniques(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];
  const uniques = [];
  const mergedArray = [...arr1, ...arr2];
  for (let num of mergedArray) {
    if (!(arr1.includes(num) && arr2.includes(num)) && !uniques.includes(num))
      uniques.push(num);
  }

  return uniques;

  // ANOTHER WAY
  // if (arr1.length === 0 && arr2.length === 0) return [];
  // else if (arr1.length === 0) {
  //   const newArr2 = [];
  //   for (let i = 0; i < arr2.length; i++) {
  //     if (!newArr2.includes(arr2[i])) newArr2.push(arr2[i]); //1 = 1 1/
  //   }
  //   return newArr2;
  // } else if (arr2.length === 0) {
  //   const newArr1 = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (!newArr1.includes(arr1[i])) newArr1.push(arr1[i]);
  //   }
  //   return newArr1;
  // } else {
  //   const uniqueArr = [];
  //   arr1.forEach((el) => {
  //     if (!arr2.includes(el)) uniqueArr.push(el);
  //   });
  //   arr2.forEach((el) => {
  //     if (!arr1.includes(el)) {
  //       uniqueArr.push(el);
  //     }
  //   });
  //   return uniqueArr;
  // }
}

console.log(findUniques([], [])); //-> []
console.log(findUniques([], [1, 2, 3, 2])); //-> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); //-> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); //-> []
console.log(findUniques([-1, -2], [1, 2])); //-> [-1, -2, 1, 2]

console.log("\n--------TASK9--------\n");
/*
Requirement:
Write a function named isPowerOf3() which takes a number 
argument and returns true if given number is equal to 3 
power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) 	-> true
isPowerOf3(2) 	-> false
isPowerOf3(3) 	-> true
isPowerOf3(27) 	-> true
isPowerOf3(100) 	-> false
isPowerOf3(81) 	-> true
isPowerOf3(9) 	-> true
*/
function isPowerOf3(num) {
  let found = false;
  if (num === 1 || num === 3) return (found = true);
  if (num <= 0) return (found = false);

  if (num % 3 === 0) {
    num /= 3;
    found = true;
  }
  return found;

  // ANOTHER WAY not completed
  //   let result = Math.log(num) / Math.log(3);
  //   if (Number.isInteger(result)) return true;
  //   else return false;
}
console.log(isPowerOf3(1)); //> true
console.log(isPowerOf3(2)); //> false
console.log(isPowerOf3(3)); //> true
console.log(isPowerOf3(27)); //> true
console.log(isPowerOf3(100)); //> false
console.log(isPowerOf3(81)); //> true
console.log(isPowerOf3(9)); //> true
