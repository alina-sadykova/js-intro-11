/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let num = 12;
if (num >= 1 && num <= 50) {
  console.log(`${num} is in the 1st half`);
  if (num >= 1 && num <= 25) {
    console.log(`${num} is in the 1st quarter`);
  } else {
    console.log(`${num} is in the 2nd quarter`);
  }
} else if (num >= 51 && num <= 100) {
  console.log(`${num} is in the 2nd half`);
  if (num <= 75) {
    console.log(`${num} is in the 3rd quarter`);
  } else if (num <= 100) {
    console.log(`${num} is in the 4th quarter`);
  }
} else {
  console.log("Number is out of scope");
}

switch (true) {
  case num <= 25 && num >= 1:
    console.log(`${num} is in the 1st half`);
    console.log(`${num} is in the 1st quarter`);
    break;
  case num <= 50 && num >= 26:
    console.log(`${num} is in the 1st half`);
    console.log(`${num} is in the 2nd quarter`);
    break;
  case num <= 75 && num >= 51:
    console.log(`${num} is in the 2nd half`);
    console.log(`${num} is in the 3rd quarter`);
    break;
  case num <= 100 && num >= 76:
    console.log(`${num} is in the 2nd half`);
    console.log(`${num} is in the 4th quarter`);
    break;
  default:
    console.log("The number is out of scope");
}
/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
*/
let n1 = 2;
let n2 = 4;
let n3 = 6;

// console.log(n1 % 2 === 0 && n2 % 2 === 0 && n3 % 2 === 0);

if (n1 <= 100 && n1 >= 1 && n2 <= 100 && n3 >= 1 && n3 <= 100 && n3 >= 1) {
  console.log(n1 % 2 === 0 && n2 % 2 === 0 && n3 % 2 === 0);
} else {
  console.log("The number is out of scope");
}

/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/
let char = "N";
if (char === "" || char.length > 1) {
  console.log("Provide a proper character");
} else if (/^[a-zA-Z]$/.test(char)) {
  console.log(`"${char}" is a letter`);
} else if (/^[0-9]$/.test(char)) {
  console.log(`"${char}" is a digit`);
} else if (/\s/.test(char)) {
  console.log(`"${char}" is a white space`);
} else {
  console.log(`"${char}" is a special character`);
}

// Option 2
if (char === "" || char.length > 1) {
  console.log("Provide a proper character");
} else if (char.toLocaleLowerCase() <= "z" && char.toLocaleLowerCase() >= "a") {
  console.log(`"${char}" is a letter`);
} else if (char <= "9" && char >= "0") {
  console.log(`"${char}" is a digit`);
} else if (char === " ") {
  console.log(`"${char}" is a white space`);
} else {
  console.log(`"${char}" is a special character`);
}

/*
Task04
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/
const hasBlue = (string) => string.toLowerCase().includes("blue");

console.log(hasBlue("Hello World"));
console.log(hasBlue("Javabluescript"));
console.log(hasBlue("Tech Blue Global"));
console.log(hasBlue("1234"));
console.log(hasBlue("ABLUEC"));

/*
Task05
*/
const startT = (string) => string.toLowerCase().startsWith("t");

console.log("Starts with T:", startT("Hello World"));
console.log("Starts with T:", startT("Total"));

const startT2 = (string) => /^[t]/i.test(string);

console.log("Starts2 with T:", startT2("Hello World"));
console.log("Starts2 with T:", startT2("Total"));
