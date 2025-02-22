// Task 1
/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1;
let str = "Morning";

let result = str.slice(-5);
let result2 = str.slice(-10);

console.log(result); //rning
console.log(result2); //Morning

// Task 2
/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = "Hello World";
let firstThreeChars = str2.slice(0, 3);
let lastThreeChars = str2.slice(-3);
let newStr2 = firstThreeChars.concat(lastThreeChars);
console.log(newStr2);
