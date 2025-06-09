/* Requirement:
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.

NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
Examples
toInitials( "Joe Doe") 	-> "J. D."
toInitials( "Alex Reyes") 	-> "A. R."
toInitials( "Tom Cruise") 	-> "T. C."
toInitials( "Bruce Willis") 	-> "B. W."
toInitials( "Ja Le") 	-> "J. L." */
console.log("\n--------TASK1--------\n");
function toInitials(str) {
  let firstChar = str.slice(0, 1);
  let secondChar = str.slice(str.indexOf(" ") + 1, str.indexOf(" ") + 2);

  return firstChar + ". " + secondChar + ".";
}

console.log(toInitials("Joe Doe")); //	-> "J. D."
console.log(toInitials("Alex Reyes")); //	-> "A. R."
console.log(toInitials("Tom Cruise")); //	-> "T. C."
console.log(toInitials("Bruce Willis")); //	-> "J. L."

/* Requirement:
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
Examples:
hasNumbers("") 		-> false
hasNumbers("John is 34 years old") 	-> true
hasNumbers("Hello 3") 		-> true
hasNumbers("125$") 		-> true
hasNumbers("   a   ") 		-> false
hasNumbers("      ") 		-> false
hasNumbers("!@#$%^&*()_+") 	-> false */
console.log("\n--------TASK2--------\n");

function hasNumbers(str) {
  const arr = str.split("");
  return arr.some((char) => char >= "0" && char <= "9");
}
console.log(hasNumbers("")); //	-> false
console.log(hasNumbers("John is 34 years old")); //	-> true
console.log(hasNumbers("Hello 3")); //	-> true
console.log(hasNumbers("125$")); //	-> true
console.log(hasNumbers("  a   ")); //	-> false
console.log(hasNumbers("   ")); //	-> false
console.log(hasNumbers("!@#$%^&*()_+")); //	-> false

/* Requirement:
Write a function named elementLength() which takes an array argument and returns 
the length of each element as a separate array.
Examples:
elementLength( [ "Hello", "World" ] ) 			-> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ) 	-> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] ) 		-> [ 3, 8, 4 ]
elementLength( [ ] ) 				-> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) 	-> [ 10, 0, 6, 10 ] */

console.log("\n--------TASK3--------\n");

function elementLength(arr) {
  return arr.map((el) => {
    return el.length;
  });
}
console.log(elementLength(["Hello", "World"])); //	-> [ 5, 5 ]
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"])); //	-> [ 5, 6, 6, 4 ]
console.log(elementLength(["BMW", "Mercedes", "Audi"])); //	-> [ 3, 8, 4 ]
console.log(elementLength([])); //	-> [ ]
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"])); //	-> [ 10, 0, 6, 10 ]

/* Requirement:
Write a function named isArraySumEvenOrOdd() which takes an array of numbers 
and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] ) 	-> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] ) 	->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd” */
console.log("\n--------TASK4--------\n");

function isArraySumEvenOrOdd(numbers) {
  if (numbers.length === 0) return "even";
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  if (sum % 2 === 0) return "even";
  else return "odd";
}

console.log(isArraySumEvenOrOdd([])); //-> "even"
console.log(isArraySumEvenOrOdd([0, -1, -5])); //-> "even"
console.log(isArraySumEvenOrOdd([7, 1, 8, 1])); //-> "odd”
console.log(isArraySumEvenOrOdd([0, 0])); //->  "even"
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1])); //->  "odd”

/* Requirement:
Write a function named reverse() which takes a string argument and 
returns the given string reversed. 
Examples:
reverse("Hello World") 		-> "dlroW olleH"
reverse("TechGlobal") 		-> "labolGhceT"
reverse("Basketball is fun") 	-> "nuf si llabteksaB"
reverse("") 			-> ""
reverse("Apples 456") 		-> "654 selppA" */
console.log("\n--------TASK5--------\n");

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Hello World")); //-> "dlroW olleH"
console.log(reverse("TechGlobal")); //-> "labolGhceT"
console.log(reverse("Basketball is fun")); //-> "nuf si llabteksaB"
console.log(reverse("")); //-> ""
console.log(reverse("Apples 456")); //-> "654 selppA"

/* Requirement:
Write a function named reverseWords() which takes a string argument and 
returns a string with each word within that string reversed but still in 
the same order as the initial string. 
Examples:
reverseWords("Hello World") 	-> "olleH dlroW"
reverseWords("TechGlobal") 	-> "labolGhceT"
reverseWords("Basketball is fun") 	-> "llabteksaB si nuf"
reverseWords("") 		-> "”
reverseWords("Apples 456") 	-> "selppA 654"
*/
console.log("\n--------TASK6--------\n");

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
console.log(reverseWords("Hello World")); //-> "olleH dlroW"
console.log(reverseWords("TechGlobal")); //-> "labolGhceT"
console.log(reverseWords("Basketball is fun")); //-> "llabteksaB si nuf"
console.log(reverseWords("")); //-> "”
console.log(reverseWords("Apples 456")); //-> "selppA 654"
