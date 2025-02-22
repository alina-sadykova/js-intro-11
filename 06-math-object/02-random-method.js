console.log(Math.random());

Math.random(); // returns a number between 0 (inclusive) and 1 (exclusive)

// Generate a random number between 3 and 5 (both inclusive)
// 3, 4, 5

let result = Math.floor(Math.random() * 3) + 3;
console.log(result);

/*
Find a random number betwee a and b (both inclusive)
1. Calculate how many numbers you have in the range
count = biggerNumber - smallerNumber + 1

2. Multiply the count you found with Math.random()
result = Math.random() * count

3. Floor the result using Math.floor() method
newResult = Math.floor(result)

4. Add your smaller number to new result
finalResult = newResult + smallerNumber;

let result = Math.floor(Math.random() * (max - min + 1)) + min;
let result = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
let result = Math.round(Math.random() * (max - min)) + min;
*/

// Generate random number between 6 and 10 both inclusive
let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
console.log(r1);

let num1 = 4;
let num2 = 2;

// Generate a random number between num1 and num2 both inclusive
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

let r2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(r2);

// Math.floor ( Math.random() * ( varmax + 1 - varmin) + varmin) INCLUSIVE MAX and MIN numbers
let smallestNum = 8;
let biggestNum = 10;

let count = biggestNum - smallestNum + 1;
let random = Math.floor(Math.random() * count + smallestNum);

console.log(random);

/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3,5,2 ->3 
7,3,1 ->6 
5,5,5 ->0 
1,10,9 ->9 
10,1,2 ->9


PSEUDO CODE
1. Generate 3 random numbers
2. Find max and min numbers among the random numbers
3. Calculate and output max - min
*/

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 10 + 1);
let randomNum3 = Math.floor(Math.random() * 10 + 1);
let max1 = Math.max(randomNum1, randomNum2, randomNum3);
let min1 = Math.min(randomNum1, randomNum2, randomNum3);
let absDif = Math.abs(max1 - min1);

console.log(`Absolute difference is ${absDif}`);
console.log(`The greatest number is ${max1}`);
console.log(`The smallest number is ${min1}`);
