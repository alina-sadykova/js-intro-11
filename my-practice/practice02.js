/*
Write a function named as startsVowel() which takes a string word as an 
argument and returns true if given string starts with a vowel letter, and 
false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") startsVowel("Apple") startsVowel("abc")
*/

function startsVowel(string) {
  let firstChar = string[0].toLowerCase();
  return (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "o" ||
    firstChar === "u" ||
    firstChar === "i"
  );
}
console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));

function startsVowel(string) {
  return /^[aeoui]/i.test(string);
}
console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));

function startsVowel(string) {
  let vowels = ["a", "e", "o", "u", "i"];
  return vowels.includes(string[0].toLowerCase());
}
console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));

/*
Write a function named as concat() which takes two string words as 
arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: concat("Tech", "Global") concat("Hello", "World") concat("", "abc") 
concat("123", "1234")
-> "TechGlobal" -> "HelloWorld" -> "abc"
-> "1231234"
 */

function concat(s1, s2) {
  return s1.concat(s2);
  return s1 + s2;
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));

/*
Write a function named as shorter() which takes two String words as arguments 
and returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples: shorter("Tech", "Global") shorter("Hello", "Hi") shorter("Hello", "World")
-> "Tech" -> "Hi"
-> "World"
*/
function shorter(s1, s2) {
  if (s1.length === s2.length) return s2;
  else if (s1.length >= s2.length) return s2;
  else return s1;

  return s1.length === s2.length ? s2 : s1.length > s2.length ? s2 : s1;
}
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));

/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns 
the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples: longer("Tech", "Global") longer("Hello", "Hi") longer("Hello", "World")
-> "Global" -> "Hello" -> "Hello"
*/
function longer(s1, s2) {
  return s1.length === s2.length ? s1 : s1.length > s2.length ? s1 : s2;
  if (s1.length === s2.length) return s1;
  else if (s1.length > s2.length) return s1;
  else return s2;
}
console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));

/*
Middle
Write a function named as middle() which takes a string word as an argument 
and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples: middle("Tech") middle("Global") middle("abcde") middle("1") middle("abc") 
middle(“1234”)
-> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"
*/
function middle(string) {
  if (string.length === 0) return "";
  let middleIndex = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[middleIndex - 1] + string[middleIndex];
  }
  return string[middleIndex];
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));
console.log(middle("AB"));
console.log(middle(""));

/*
Has Five
Write a function named as hasFive() which takes a string word as an argument 
and returns true if given string has at least 5 characters, and false otherwise 
when invoked.
Examples: hasFive("Tech") hasFive("Global") hasFive("") hasFive("12345") hasFive("hello")
-> false -> true -> false -> true -> true
*/
function hasFive(string) {
  return string.length >= 5;
}
console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));

/*
First and Last Character
Write a function named as firstLast() which takes a string word as an argument and
 returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: firstLast("Tech") firstLast("TechGlobal") firstLast("")
firstLast(" ") firstLast("1") firstLast("abcde")
-> "Th" -> "Tl" -> "" ->"" -> "1" -> ae
*/
function firstLast(string) {
  if (string.length === 0) return "";
  return string[0] + string[string.length - 1];
}
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast("123"));

/*
Last Two Characters

Write a function named as lastTwoCharacters() which takes a string word as an argument 
and returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: lastTwoCharacters("Tech") lastTwoCharacters("Global") lastTwoCharacters("") 
lastTwoCharacters(" ") lastTwoCharacters("1")
-> "ch" -> "al" -> "" -> " " -> "1"
*/
function lastTwoCharacters(string) {
  if (string.length >= 2) return string.slice(-2);
  else return string;
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));

function lastTwoCharacters(string) {
  if (string.length >= 2) return string.slice(-2);
  else return string;
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));

/*
Write a function named as lastCharacter() which takes a string word as an argument and 
returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples: lastCharacter("Tech") lastCharacter("Global") lastCharacter(" ") 
lastCharacter("123")
-> "h" -> "ll" -> " " -> "3"
*/
function lastCharacter(string) {
  return string[string.length - 1];
  return string.slice(-1);
  return string.at(-1);
}
console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("123"));

/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an 
argument and returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given 
string back.
Examples: firstTwoCharacters("Tech") firstTwoCharacters("Global") firstTwoCharacters("") 
firstTwoCharacters(" ") firstTwoCharacters("1")
-> "Te" -> "Gl" -> "" ->"" -> "1"
*/
function firstTwoCharacters(string) {
  if (string.length > 2) return string.slice(0, 2);
  else return string;
}
console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));

/*
First Character
Write a function named as firstCharacter() which takes a string word as an 
argument and returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T" firstCharacter("Global") -> "G"
*/
function firstCharacter(string) {
  return string[0];
}
console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));
console.log(firstCharacter("12"));

/*
Double The Word
Write a function named as doubleWord() which takes a string word as an argument and 
returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech" doubleWord("Global") -> "GlobalGlobal"
*/
function doubleWord(string) {
  return string.concat(string);
  return string + string;
}
console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

/*
Write a function named as squarePerimeter() which calculates the perimeter of a 
square when invoked. NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples: squarePerimeter(5) squarePerimeter(3) squarePerimeter(6)
-> 20 -> 12 -> 24
*/
const squarePerimeter = (num) => num * 4;
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));

/*
Write a function named as squareArea() which calculates the area of a 
square when invoked. NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
Examples: squareArea(5) squareArea(3) squareArea(6)
-> 25 -> 9 -> 36
*/
const squareArea = (num) => num * num;
console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

/*
Write a function named as rectanglePerimeter() which calculates the perimeter of 
a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples: rectanglePerimeter(5, 4) rectanglePerimeter(3, 7) rectanglePerimeter(6, 10)
-> 18 -> 20 -> 32
*/

const rectanglePerimeter = (num1, num2) => (num1 + num2) * 2;
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));

/*
Write a function named as rectangleArea()which calculates the area of a rectangle 
when invoked. NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples: rectangleArea(5, 4) rectangleArea(3, 7) rectangleArea(6, 10)
-> 20 -> 21 -> 60
*/
const rectangleArea = (num1, num2) => num1 * num2;
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples: 3, 5
7, 3
5, 5
1, 10 10, 1
-> true -> true -> true -> false -> false
*/
let r1 = Math.floor(Math.random() * 10) + 1;
let r2 = Math.floor(Math.random() * 10) + 1;

console.log(r1, r2, (r1 * r2) % 2 === 1);

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples: 3,5
7,3
5,5
1, 10 10, 1
-> true -> true -> true -> false -> false
*/
let ran1 = Math.round(Math.random() * 10);
let ran2 = Math.round(Math.random() * 10);
console.log(ran1, ran2, (ran1 + ran2) % 2 === 0);

/*

Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half
87 -> 2nd half 100 -> 2nd half
*/
let random = Math.floor(Math.random() * 100) + 1;
if (random <= 50 && random >= 1) console.log(`${random} is in the 1st half`);
else console.log(`${random} is in the 2nd half`);

random <= 50 && random >= 1
  ? console.log(`${random} is in the 1st half`)
  : console.log(`${random} is in the 2nd half`);

/*
  Write a program that generates a random number between 1 and 100 (both inclusive). 
  Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75 4th quarter is 76-100
Examples:
15 -> 1st quarter 73 -> 3rd quarter 39 -> 2nd quarter 87 -> 4th quarter
  */
let randomNum = Math.floor(Math.random() * 100) + 1;
if (randomNum <= 25 && randomNum >= 1)
  console.log(`${randomNum} is in 1st quater`);
else if (randomNum <= 50 && randomNum >= 26)
  console.log(`${randomNum} is in 2nd quater`);
else if (randomNum <= 75 && randomNum >= 51)
  console.log(`${randomNum} is in 3rd quater`);
else console.log(`${randomNum} is in 4th quater`);

switch (true) {
  case randomNum <= 25 && randomNum >= 1:
    console.log(`${randomNum} is in 1st quater`);
    break;
  case randomNum <= 50 && randomNum >= 26:
    console.log(`${randomNum} is in 2nd quater`);
    break;
  case randomNum <= 75 && randomNum >= 51:
    console.log(`${randomNum} is in 3rd quater`);
    break;
  default:
    console.log(`${randomNum} is in 4th quater`);
}

/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3,5,2 ->3 7,3,1 ->6 5,5,5 ->0 1,10,9 ->9 10,1,2 ->9
*/
let rn1 = Math.floor(Math.random() * 10) + 1;
let rn2 = Math.floor(Math.random() * 10) + 1;
let rn3 = Math.floor(Math.random() * 10) + 1;
let max = Math.max(rn1, rn2, rn3);
let min = Math.min(rn1, rn2, rn3);
console.log(max - min);

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 7,3,2 ->4 5,5,5 ->5 1,10,7 ->6 10,1,1 ->4
*/
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;
let average = (random1 + random2 + random3) / 3;
console.log(average.toFixed());

/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
Examples:
3,5 ->3 7,3 ->3 5,5 ->5 1,10 ->1 10,1 ->1
*/
let smallest = Math.min(random1, random2, random3);
console.log(smallest);

/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5 7,3,1 ->7 5,5,5 ->5 1,10,9 ->10
*/
console.log(random1, random2, random3);
console.log(Math.max(random1, random2, random3));

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->5 ->7 ->5 -> 10 -> 10
*/
console.log(Math.max(random1, random2));

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) 
to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false 15 -> false 16 -> true 45 -> true 100 -> true
*/
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber, randomNumber >= 16);

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false 2,2 -> true 3,3 -> false
*/
let ranNum1 = Math.floor(Math.random() * 3) + 1;
let ranNum2 = Math.floor(Math.random() * 3) + 1;
console.log(ranNum1 === ranNum2);

/*

Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) 
to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2 20 ->44 75 -> 165 100 -> 220
*/
console.log((randomNum * 2.2).toFixed());

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) 
to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 ->1.6 2 ->3.2 5 ->8
*/
let randomOneToTen = Math.floor(Math.random() * 10) + 1;
console.log(randomOneToTen * 1.6);

/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125 10 -> 1000
*/
console.log(randomOneToTen ** 3);

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25 10 -> 100
*/
console.log(randomOneToTen * randomOneToTen);

/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->15 ->21 ->25 -> 10 -> 10
*/
console.log(random1 * random2);

/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2 7,3 ->4 5,5 ->0 1,10 ->9 10,1 ->9
*/
console.log(random1, random2, Math.abs(random2 - random1));

/*

Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false
*/
let randomOneToFifty = Math.floor(Math.random() * 50) + 1;
console.log(randomOneToFifty, randomOneToFifty % 7 === 0);

/*

Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false˜

*/
let randomNegativeFiveToFive = Math.floor(Math.random() * 11) - 5;
console.log(randomNegativeFiveToFive < 0);
