/* Task 7
 Write a function named splitString() which takes a string and a number arguments and returns the string back split by the given number.
Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("JavaScript", 2)  -> "Ja va Sc ri pt"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/

//str = "JavaScript"
//container = 'Ja va '

const splitString = (str, num) => {
  if (str.length < num || str.length % num !== 0) return "";

  let result = "";
  while (str.length > 0) {
    result += str.slice(0, num) + " ";
    str = str.slice(num);
  }

  return result.trim();
};

const splitString = (str, num) => {
  if (str.length < num || str.length % num !== 0) return "";

  let result = "";
  for (let i = 0; i < str.length; i += num) {
    result += str.slice(i, i + num) + " ";
  }

  return result.trim();
};

console.log(splitString("JavaScript", 5));
console.log(splitString("JavaScript", 2));
console.log(splitString("Java", 2));
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));

/*
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/

const reverseNumber = (num) => {
  //123
  let result = 0; //0 -> 3 -> 32 -> 321

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    //1
    result = result * 10 + (i % 10);
  }
  return result;
};
console.log(reverseNumber(371));

/*
Requirement:
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

const isArmstrong = (num) => {
  let result = 0;

  //153 -> [1,5,3]
  let numAsArr = num.toString().split("");
  let numOfDigits = numAsArr.length;

  for (let digit of numAsArr) {
    result += Number(digit) ** numOfDigits;
  }
  return result === num;
};

const isArmstrong = (num) =>
  num
    .toString()
    .split("")
    .reduce(
      (total, digit) => total + Number(digit) ** num.toString().length,
      0
    ) === num;

console.log(isArmstrong(153)); //true
console.log(isArmstrong(123)); //false
console.log(isArmstrong(1634)); //true
console.log(isArmstrong(1111)); //false

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

const calculateTotalPrice1 = (cart) => {
  let prices = { apple: 2.0, orange: 3.29, mango: 4.99, pineapple: 5.25 };

  let total = 0;

  for (let item in cart) {
    total += cart[item] * prices[item];
  }
  return total;
};
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));

/*
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
*/

const calculateTotalPrice2 = (cart) => {
  let prices = { apple: 2.0, orange: 3.29, mango: 4.99, pineapple: 5.25 };

  let total = 0;

  for (let item in cart) {
    let noSalePrice = cart[item] * prices[item];
    let sale = 0;
    if (item === "apple") {
      sale = (Math.floor(cart["apple"] / 2) * prices["apple"]) / 2;
    } else if (item === "mango") {
      sale = Math.floor(cart["mango"] / 4) * prices["mango"];
    }

    total += noSalePrice - sale;
  }
  return total === 0 ? 0 : total.toFixed(2);
};
console.log(calculateTotalPrice2({ apple: 3, mango: 5 }));
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 }));
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 }));
console.log(
  calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango: 3 })
);
