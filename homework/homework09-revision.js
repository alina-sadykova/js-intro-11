//task 3
/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

//ab110c045d5 -> 160
const findSumNumbers = (str) => {
  let sum = 0; //0 + 110 = 110 + 45 = 155 + 5 = 160
  let numberContainer = ""; //5

  for (let char of str) {
    //char = 5
    if (char >= "0" && char <= "9") numberContainer += char;
    else {
      sum += Number(numberContainer);
      numberContainer = "";
    }
  }

  sum += Number(numberContainer);
  return sum;
};

console.log(findSumNumbers("abc$")); //0
console.log(findSumNumbers("a1b4c  6#")); //11
console.log(findSumNumbers("ab110c045d")); //155
console.log(findSumNumbers("525")); //525
console.log(findSumNumbers("3 for 10 dollars")); //13

const findBiggestNumber = (str) => {
  let numArr = [];
  let numberContainer = "";

  for (let char of str) {
    if (char >= "0" && char <= "9") numberContainer += char;
    else {
      numArr.push(Number(numberContainer));
      numberContainer = "";
    }
  }

  numArr.push(Number(numberContainer));
  return numArr.sort((a, b) => b - a)[0];
};

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

// Task 5
/*
  Requirement:
  Write a function named countOccurrencesOfCharacters() which takes a 
  string argument and returns the count of repeated characters in the String. 
  NOTE: If given String is empty, then return empty String. 
  NOTE: It is case sensitive.
  Examples:
  countOccurrencesOfCharacters("")  -> ""
  countOccurrencesOfCharacters("abc")  -> "1a1b1c"
  countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
  countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a"
  countOccurrencesOfCharacters("www" ) -> "3w"
  */

//aaAAa
const countOccurrencesOfCharacters = (str) => {
  if (str === "") return "";
  let result = "";
  let currentChar = str[0];
  let currentCharCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) currentCharCount += 1;
    else {
      result += currentCharCount + currentChar;
      currentChar = str[i];
      currentCharCount = 1;
    }
  }

  result += currentCharCount + currentChar;
  return result;
};

console.log(countOccurrencesOfCharacters(""));
console.log(countOccurrencesOfCharacters("abc"));
console.log(countOccurrencesOfCharacters("abbcca"));
console.log(countOccurrencesOfCharacters("aaAAa"));
console.log(countOccurrencesOfCharacters("www"));

/*
  Requirement:
  Write a function named fibonacciSeries1() which takes a number n argument 
  and returns the n series of Fibonacci numbers as an array.  
  REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
  Examples:
  fibonacciSeries1(3)  -> [0, 1, 1]
  fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
  fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
  fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
  fibonacciSeries1(1)  -> [0]
  fibonacciSeries1(2)  -> [0, 1]
  */

const fibonacciSeries1 = (n) => {
  //5
  if (n === 1) return [0];

  let arr = [0, 1]; //[0,1,1,2,3]

  for (let i = 2; i < n; i++) {
    //i=5
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};
//0 1 1 2 3 5 8 13
console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

const fibonacciSeries2 = (n) => {
  if (n === 1) return 0;

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};

//fib(1) = 0
//fib(2) = 1
//fib(3) = 1
//fib(4) = fib(n-1) + fib(n-2) -> fib(3) + fib(2) -> 1+1 = 2
//fib(5) = fib(n-1) + fib(n-2) -> fib(4) + fib(3) -> 2+1 = 3
//fib(6) = fib(5) + fib(4) -> 3 + 2 = 5

const fib = (n) => {
  if (n === 1) return 0;
  if (n === 2 || n === 3) return 1;

  return fib(n - 1) + fib(n - 2);
};

/*
  Requirement:
  Write a function named findUniques() which takes two array of number 
  arguments and returns the array which has only the unique values from both 
  given arrays.
  NOTE: If both arrays are empty, then return an empty array. 
  NOTE: If one of the array is empty, then return unique values from the other 
  array.
  Examples:
  findUniques([], [])  -> []
  findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
  findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
  findUniques([8, 9], [9, 8, 9])  -> []
  findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2
  */

const findUniques = (arr1, arr2) => {
  let uniques = [];
  let combinedArr = [...new Set(arr1.concat(arr2))];

  //console.log(combinedArr)
  for (let num of combinedArr) {
    if (!(arr1.includes(num) && arr2.includes(num))) uniques.push(num);
  }

  return uniques;
};

console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

// Task 9
/*
  Requirement:
  Write a function named isPowerOf3() which takes a number argument and 
  returns true if given number is equal to 3 power of the X. Otherwise, return 
  false. 
  NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
  NOTE: Ignore negative scenarios.
  Examples:
  isPowerOf3(1)  -> true
  isPowerOf3(2)  -> false
  isPowerOf3(3)  -> true
  isPowerOf3(27)  -> true
  isPowerOf3(100)  -> false
  isPowerOf3(81)  -> true
  isPowerOf3(9)  -> true
  */

// const isPowerOf3 = (num) => num === 1 ? true : num < 1 ? false : isPowerOf3(num/3)

const isPowerOf3 = (n) => {
  let powerOf3 = 1;

  while (powerOf3 <= n) {
    if (powerOf3 === n) return true;
    powerOf3 *= 3;
  }
  return false;
};
console.log(isPowerOf3(1)); //true
console.log(isPowerOf3(2)); //false
console.log(isPowerOf3(3)); //true
console.log(isPowerOf3(27)); //true
console.log(isPowerOf3(100)); //false
console.log(isPowerOf3(81)); //true
console.log(isPowerOf3(9)); //true
