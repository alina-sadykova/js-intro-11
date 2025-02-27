/*
const { getRandomNumber } = require('./../utils/MathHelper.js');
// Output all the odd numbers from 1 to Random Number
// (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….
*/

// let random = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// console.log(random);
// for (let i = 1; i <= random; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

// let rn = Math.floor(Math.random() * 10) + 1;
// let result = 1;
// for (let i = 1; i <= rn; i++) {
//   result *= i;
// }
// console.log(rn);
// console.log(result);

/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/
let r1 = Math.floor(Math.random() * 10) + 1;
let r2 = Math.floor(Math.random() * 10) + 1;
let greatestNum = Math.max(r1, r2);
let smallestNum = Math.min(r1, r2);

for (let i = smallestNum; i <= greatestNum; i++) {
  console.log(i);
}
