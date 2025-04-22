console.log(">>>>> Task 1: Factorial num");
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
  factorial(1) -> 1 */

function factorial2(num) {
  if (num <= 1) return 1;
  let factorialN = 1;
  for (let i = 2; i <= num; i++) {
    factorialN *= i;
  }

  return factorialN;
}

console.log(factorial2(4)); // 24 (4! = 4 × 3 × 2 × 1)
console.log(factorial2(3)); // 6 (3! = 3 × 2 × 1)

console.log(">>>>> Task 2: arr of factorial");

/*
Write a function named arrFactorial() which takes an array of 
numbers as argument and return the array with every number replaced with their factorials. */
function arrFactorial(arr) {
  function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }

  return arr.map((el) => factorial(el));
}
console.log(arrFactorial([1, 2, 3, 4]));

console.log(">>>>> Task 3: Palindrome");

/*
Requirement: 
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word 
is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same 
backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity */
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = cleaned.split("").reverse().join("");

  return cleaned === reversedStr;
}
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true (with extended version)

console.log(">>>>> Task 4: is Prime");

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
  negative prime numbers. */
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  return num % 2 !== 0 && num % 1 === 0 && num % num === 0 ? true : false;
}
console.log(isPrime(13));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

console.log(">>>>> Task 5: count primes");
/*
Requirement:
Write a function named countPrimes() which takes an array 
of integer numbers as argument and will return the number of 
the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2. */
function countPrimes(arr) {
  let count = 0;
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    return n % 2 !== 0 && n % 1 === 0 && n % n === 0 ? true : false;
  }

  return arr.reduce((count, value) => {
    if (isPrime(value)) count++;
    return count;
  }, 0);
}
console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 	-> 4
console.log(countPrimes([41, 53, 19, 47, 67])); // 	-> 5

console.log(">>>>> Task 6: first duplicate");
/*
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same. */
function firstDuplicate(arr) {
  const duplicateNumbers = [];
  for (let el of arr) {
    if (!duplicateNumbers.includes(el)) {
      duplicateNumbers.push(el);
    } else {
      return el;
    }
  }
  return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

console.log(">>>>> Task 7: array of duplicate");
/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same. */
function getDuplicates(arr) {
  /// --------- USING AN ARRAY
  const arrOfDuplicates = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] === arr[j] && !arrOfDuplicates.includes(arr[i]))
  //         arrOfDuplicates.push(arr[i]);
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1) && !arrOfDuplicates.includes(arr[i]))
      arrOfDuplicates.push(arr[i]);
  }
  return arrOfDuplicates;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  if (num === 2) return 2;
  let factorialNum = 1;
  for (let i = 3; i <= num; i++) {
    factorial *= i;
  }
  return factorialNum;
}
console.log(factorial(5));

// EXTRA
console.log(">>>> EXTRA");
let name = "Alina";
name = "John";
console.log(name);

function add(arr1, arr2) {
  const arr3 = [];
  let longerst = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < longerst; i++) {
    arr3.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return arr3;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));
