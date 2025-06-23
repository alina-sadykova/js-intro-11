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

function factorial(number) {}
console.log(factorial(5));
console.log(factorial(4));

console.log(">>>>> Task 2: arr of factorial");
/*
Write a function named arrFactorial() which takes an array of 
numbers as argument and return the array with every number replaced 
with their factorials. */
function arrFactorial(numbers) {}
console.log(arrFactorial([1, 2, 3, 4])); // ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // -> [1,120]
console.log(arrFactorial([5, 0, 6])); // -> [120, 1, 720]
console.log(arrFactorial([])); // -> []

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
function isPalindrome(word) {}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

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
  if (num < 2) return false;
  return num === 2 || (num % 2 !== 0 && num % num === 0);
}

console.log(isPrime(5)); //-> true
console.log(isPrime(2)); //-> true
console.log(isPrime(29)); //-> true
console.log(isPrime(-5)); //-> false
console.log(isPrime(0)); //-> false
console.log(isPrime(31)); //-> true

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
function countPrimes(numbers) {
  let counter = 0;

  for (let el of numbers) {
    if ((el % 2 !== 0 && el % el === 0 && el > 2) || el === 2) counter++;
  }
  return counter;
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
function firstDuplicate(arr) {}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
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
function getDuplicates(arr) {}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); //  [ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7])); //[ ]
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"])); //[ 'foo', 'a' ]
console.log(getDuplicates(["foo", "12", 12, "bar", "a"])); //[ ]

console.log(">>>>> Task 8: add to arrays");
/* 
Write a function named add() which takes two array of numbers as 
argument and returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.*/
function add(arr1, arr2) {}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); //	-> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // -> [0, 0, 0, 0]

console.log(">>>>> Task 9: find biggest number");

/* Write a function named findBiggestNumber() which takes a string 
argument and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$") 
findBiggestNumber("a1b4c 6#") 
findBiggestNumber("ab110c045d") 
findBiggestNumber("525") 
findBiggestNumber("3 for 10 dollars")
->0 ->6 -> 110 -> 525 -> 10*/

function findBiggestNumber(str) {}
console.log(findBiggestNumber("abc$")); //-> 0
console.log(findBiggestNumber("a1b4c  6#")); //-> 6
console.log(findBiggestNumber("ab110c045d")); //-> 110
console.log(findBiggestNumber("525")); //-> 525
console.log(findBiggestNumber("3 for 10 dollars")); //-> 10

console.log(">>>>> Task 10: fibonacci array");

/* Write a function named fibonacciSeries1() which takes a number 
n argument and returns the n series of Fibonacci numbers as an array.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 */
// console.log(fibonacciSeries1(3)); //-> [0, 1, 1]
// console.log(fibonacciSeries1(5)); //-> [0, 1, 1, 2, 3]
// console.log(fibonacciSeries1(7)); //-> [0, 1, 1, 2, 3, 5, 8]
// console.log(fibonacciSeries1(8)); //-> [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(fibonacciSeries1(1)); //-> [0]
// console.log(fibonacciSeries1(2)); //-> [0, 1]
function fibonacciSeries1(num) {}
console.log(fibonacciSeries1(3)); //-> [0, 1, 1]
console.log(fibonacciSeries1(5)); //-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); //-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); //-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); //->[0]
console.log(fibonacciSeries1(2)); // -> [0, 1]

console.log(">>>>> Task 11: fibonacci");

/* Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 */
function fibonacciSeries2(n) {}
console.log(fibonacciSeries2(2)); //-> 1
console.log(fibonacciSeries2(4)); //-> 2
console.log(fibonacciSeries2(8)); //-> 13
console.log(fibonacciSeries2(9)); //-> 21
console.log(fibonacciSeries2(1)); //-> 0

console.log(">>>>> Task 12: find unique values");
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
  if (arr1.length === "" && arr2.length === "") return [];
}
console.log(findUniques([], []));
console.log(findUniques([], [1, 2, 3, 2]));
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]));
console.log(findUniques([8, 9], [9, 8, 9]));
console.log(findUniques([-1, -2], [1, 2]));

console.log(">>>>> Task 13: reverse number");

/* Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111 */
function reverseNumber(num) {}
console.log(reverseNumber(371)); //-> 173
console.log(reverseNumber(123)); //-> 321
console.log(reverseNumber(12)); //-> 21
console.log(reverseNumber(0)); //-> 0
console.log(reverseNumber(111)); //-> 111

console.log(">>>>> Task 14: is Armstrong");
/* Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
*/
function isArmstrong(num) {}
console.log(isArmstrong(153)); //-> true
console.log(isArmstrong(123)); //-> false
console.log(isArmstrong(1634)); //-> true
console.log(isArmstrong(153)); //-> true
console.log(isArmstrong(1111)); //-> false

console.log(">>>>> Task 15: is anagram");
/*
Requirement:
Write a function named isAnagram() which takes two string arguments and returns true if 
the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")​ 		-> false
isAnagram("listen", "silent")​ 		-> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		-> true
isAnagram("123", "1234") 		-> false
*/
function isAnagram(str1, str2) {}
console.log(isAnagram("Apple", "Peach")); //​ 		-> false
console.log(isAnagram("listen", "silent")); //​ 		-> true
console.log(isAnagram("astronomer", "moon starer")); //​ 	-> true
console.log(isAnagram("CINEMA", "iceman")); //​ 		-> true
console.log(isAnagram("123", "1234")); // 		-> false

console.log(">>>>> Task 16: form a string");
/*
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")​ 			-> false
canFormString("programming", "gaming")​ 		-> true
canFormString("halogen", "hello")​ 			-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123") 			-> false
*/
function canFormString(str1, str2) {}
console.log(canFormString("Hello", "Hi")); //-> false
console.log(canFormString("programming", "gaming")); //-> true
console.log(canFormString("halogen", "hello")); //-> false
console.log(canFormString("CONVERSATION", "voices rant on")); //-> true
console.log(canFormString("12", "123")); //-> false

console.log(">>>>> Task 17: count occurence");

/*
Requirement:
Write a function named countOccurrence() which takes two string arguments and 
returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java") 	-> 1
countOccurrence("Hello", "World") 		-> 0
countOccurrence("Can I can a can", "anc")​ 	-> 3
countOccurrence("Hello", "l")​ 		-> 2
countOccurrence("IT conversations", "IT")​ 	-> 2
*/
function countOccurrence(str1, str2) {}
console.log(countOccurrence("Hello", "World")); //		-> 0
console.log(countOccurrence("Can I can a can", "anc")); // 	-> 3
console.log(countOccurrence("Hello", "l")); // 		-> 2
console.log(countOccurrence("IT conversations", "IT")); // 	-> 2
