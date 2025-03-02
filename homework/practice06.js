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
