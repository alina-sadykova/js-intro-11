console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/
function calculateTotalPrice1(product) {
  const prices = {
    apple: 2,
    orange: 3.29,
    mango: 4.99,
    pineapple: 5.25,
  };
  let total = 0;

  for (let item in product) {
    total += prices[item] * product[item];
  }
  return total;
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); // -> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); // -> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); // -> 0
console.log(
  calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })
); // -> 12.24

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as 
key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below​.
There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 }) 			-> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }) 		-> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }) 		-> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 }) 	-> 29.51
*/
function calculateTotalPrice2(product) {
  const prices = {
    Apple: 2,
    Orange: 3.29,
    Mango: 4.99,
    Pineapple: 5.25,
  };
  const handleDiscount = (item, quantity) => {
    let result = 0;
    if (item === "Apple") {
      let pairValue = Math.floor(quantity / 2); //1
      let remainder = quantity % 2; //1

      result = 1.5 * pairValue * prices.Apple + remainder * prices.Apple; // 1.5 * 2 * 1 + 1 * 2 = 5
      return result;
    }
    if (item === "Mango") {
      let forthMango = Math.floor(quantity / 4); //1
      return (quantity - forthMango) * prices.Mango; // 4 * 4.99 = 19.96
    }
    return prices[item] * quantity;
  };
  let total = 0;
  for (let item in product) {
    if (prices[item]) {
      total += handleDiscount(item, product[item]);
    } else {
      console.log(`${item} is not known.`);
    }
  }
  return total.toFixed(2);
}
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); //	-> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); //	-> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); //	-> 0
console.log(
  calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 })
); //	-> 29.51

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named nthWord() which takes a string and a number arguments 
and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2) 	-> "like"
nthWord("QA stands for Quality Assurance", 4)​ 	-> "Quality"
nthWord("Hello World", 3) 		-> ""
nthWord("Javascript", 1) 			-> "Javascript”
nthWord("", 1) 			-> ""
*/
function nthWord(str, num) {
  let wordsInAString = str.split(" ");
  if (wordsInAString.length < num) return "";

  for (let word of wordsInAString) {
    if (wordsInAString.indexOf(word) + 1 === num) return word;
  }
}
console.log(nthWord("I like programming languages", 2)); //-> "like"
console.log(nthWord("QA stands for Quality Assurance", 4)); //-> "Quality"
console.log(nthWord("Hello World", 3)); //-> ""
console.log(nthWord("Javascript", 1)); //-> "Javascript”
console.log(nthWord("", 1));

console.log("\n--------TASK4--------\n");
/*
Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise.​
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth power, 
is equal to the number itself.
Let's take an example to understand it better. Consider the number 153.​
To determine if 153 is an armstrong number, we need to check if the sum of its digits, 
each raised to the power of the number of digits, equals the original number.​
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
In this case, the sum of the individual digits raised to the power of 3 
(the number of digits in 153) is equal to the original number, which means 153 is an armstrong number.
Examples:
isArmstrong(153) 	-> true
isArmstrong(123) 	-> false
isArmstrong(1634) 	-> true
isArmstrong(153) 	-> true
isArmstrong(1111) 	-> false
*/
function isArmstrong(num) {
  let digits = num.toString().split("");
  let total = 0;
  for (let i = 0; i <= digits.length - 1; i++) {
    total += Math.pow(Number(digits[i]), digits.length);
  }
  return total === num;
}
console.log(isArmstrong(153)); //-> true
console.log(isArmstrong(123)); //-> false
console.log(isArmstrong(1634)); //-> true
console.log(isArmstrong(154)); //-> false
console.log(isArmstrong(1111)); //-> false

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named reverseNumber() which takes a number argument and 
returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371) 	-> 173
reverseNumber(123) 	-> 321
reverseNumber(12) 	-> 21
reverseNumber(0) 	-> 0
reverseNumber(111) 	-> 111
*/
function reverseNumber(num) {
  const array = [];
  while (num > 0) {
    console.log(">>", num % 10);
    array.push(num % 10);
    num = Math.floor(num / 10);
  }
  return Number(array.join(""));
}
console.log(reverseNumber(371)); //-> 173
console.log(reverseNumber(123)); //-> 321
console.log(reverseNumber(12)); //-> 21
console.log(reverseNumber(0)); //-> 0
console.log(reverseNumber(111)); //-> 111

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if 
true or tripled if the boolean value is false.​
Examples:
doubleOrTriple([1, 5, 10], true) 	-> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) 	-> [9, 21, 6]
doubleOrTriple([-1, -2], true) 	-> [-2, -4]
doubleOrTriple([0], false) 	-> [0]
doubleOrTriple([-1, 0, 1], true) 	-> [-2, 0, 2]
*/
const doubleOrTriple = (numbers, bool) =>
  numbers.map((el) => (bool ? el * 2 : el * 3));

console.log(doubleOrTriple([1, 5, 10], true)); //-> [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)); //-> [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)); //-> [-2, -4]
console.log(doubleOrTriple([0], false)); //-> [0]
console.log(doubleOrTriple([-1, 0, 1], true)); //-> [-2, 0, 2]

console.log("\n--------TASK7--------\n");
/*
Requirement:
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or 
the string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5) 	-> "JavaS cript"
splitString("Java", 2) 		-> "Ja va"
splitString("Automation", 3) 	-> ""
splitString("Hello", 6) 		-> ""
splitString("12", 1) 		-> "1 2"
*/
function splitString(str, num) {
  if (str.length < num || str.length % num !== 0) return "";

  let result = "";
  while (str.length > 0) {
    result += str.slice(0, num) + " ";
    str = str.slice(num);
  }
  return result.trim();
}
console.log(splitString("JavaScript", 5)); //-> "JavaS cript"
console.log(splitString("JavaScript", 2)); //-> "JavaS cript"
console.log(splitString("Java", 2)); //-> "Ja va"
console.log(splitString("Automation", 3)); //-> ""
console.log(splitString("Hello", 6)); //-> ""
console.log(splitString("12", 1)); //-> "1 2"
