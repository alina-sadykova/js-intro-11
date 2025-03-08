//output all numbers from 1 - 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// output all odd numbers from 1 - 10

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) console.log(i);
}

// Output all the odd numbers from 1 to Random Number
// (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….

let random = Math.floor(Math.random() * 11 + 10); //16
console.log(random);

for (let i = 1; i <= random; i += 2) {
  console.log(i);
}

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let container = 1;
random = Math.floor(Math.random() * 10 + 1);

console.log(random);

for (let i = 1; i <= random; i++) {
  console.log(`multipling ${container} with ${i} to get ${container * i}`);
  container *= i;
}

console.log(container);

/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let rand1 = Math.floor(Math.random() * 10 + 1);
let rand2 = Math.floor(Math.random() * 10 + 1);

console.log(rand1, rand2);

let min = Math.min(rand1, rand2);
let max = Math.max(rand1, rand2);

for (let i = min; i <= max; i++) {
  console.log(i);
}

//print out numbers from 10 to 0

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//print out a charcters from a string
// string
// s
// t
// r
// i
// n
// g

let str = "string";

for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}

//print out a charcters from a string backwards
// string
// g
// n
// i
// r
// t
// s

let str2 = "string";

for (let i = str2.length - 1; i >= 0; i--) {
  console.log(str2[i]);
}

//reverse string

//Bilal -> laliB
//string -> gnirts

let str3 = "helloWorld";
let reversedStr = "";
for (let i = str3.length - 1; i >= 0; i--) {
  // console.log(str3[i])
  reversedStr += str3[i];
}

console.log(reversedStr);

// loop example from real work environment.
// Using programId to find RecurringSessionId
// loops from page to page with a max of 10 pages

function getRecurringSessionId(programId, itemsPerPage) {
  const MAX_PAGE = 10;
  const recurringSessionsApi = "recurring_sessions/paginated";

  //recurringSessionId is the result -> starting off as null incase it is not found
  let recurringSessionId = null;

  for (let currentPage = 1; currentPage <= MAX_PAGE; currentPage++) {
    //Searches page {i} for ID
    let query =
      recurringSessionsApi + "?page=" + currentPage + "&items=" + itemsPerPage;
    let path = new SessionServiceApi().getRequest().get(query);
    recurringSessionId = path.find(programId);

    if (recurringSessionId !== null) {
      //If found -> return the ID
      return recurringSessionId;
    } else {
      //If not found -> log that it was not found on page {i}
      console.log(
        "Continuing to the next page. Not found on page " + currentPage
      );
    }
    //next page -> i++
  }

  //If exited the loop -> log that recurring session was not found and return null
  console.log("Recurring session was not found... returning null");
  return recurringSessionId;
}

/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1
*/

function firstPos(array) {
  return array.filter((item) => item > 0)[0];
}
console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/
function lastNeg(arr) {
  return arr.filter((item) => item < 0).at(-1);
}
console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/
function firstLongest(array) {
  let longest = "";
  for (let word of array) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
  return array.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
}
console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));

/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/
function minNum(arr) {
  let smallest = arr[0];
  arr.forEach((item) => {
    if (item < smallest) smallest = item;
  });
  return smallest;
  return arr.reduce((smallestEl, currEl) =>
    currEl < smallestEl ? currEl : smallestEl
  );
}
console.log(minNum([0, 3, 5, 8]));
console.log(minNum([-2, 0, -7, 10, -5]));
console.log(minNum([1, 2, 3, 15]));

const commonElements = (arr1, arr2) => {
  return arr1.filter((el) => arr2.includes(el));
};
console.log(commonElements([10, 20, 30, 40, 50], [20, 40, 50]));
