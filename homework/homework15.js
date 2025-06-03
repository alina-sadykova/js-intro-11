/* Requirement:
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters and spaces
Examples:
toCamelCase("first name") 	->"firstName"
toCamelCase("last     name") 	->"lastName"
toCamelCase("   ZIP CODE") 	->"zipCode"
toCamelCase(“I Learn Java Script”)   	-> "iLearnJavaScript"
toCamelCase(“helloWorld”)   ​	-> “helloWorld”
*/
console.log("\n--------TASK1--------\n");

function toCamelCase(str) {
  const arr = str.trim().replace(/\s+/g, " ").split(" ");
  let camelCase = arr[0].toLowerCase();

  if (arr.length === 1) return arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      camelCase += arr[i].replace(
        arr[i].slice(0, 1),
        arr[i].slice(0, 1).toUpperCase()
      );
    } else if (arr[i] === arr[i].toUpperCase()) {
      camelCase += arr[i].replace(
        arr[i].slice(1),
        arr[i].slice(1).toLowerCase()
      );
    } else {
      camelCase += arr[i];
    }
  }
  return camelCase;
}

console.log(toCamelCase("first name")); //->"firstName"
console.log(toCamelCase("last    name")); //->"lastName"
console.log(toCamelCase("   ZIP CODE")); //->"zipCode"
console.log(toCamelCase("I Learn Java Script")); //-> "iLearnJavaScript"
console.log(toCamelCase("helloWorld")); //-> “helloWorld”

/* Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters and spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.
Examples:
toSnakeCase("first name") 	->"first_name"
toSnakeCase("last    name") 	->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")   		​-> "hello"
*/

console.log("\n--------TASK2--------\n");

function toSnakeCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "_");
}
console.log(toSnakeCase("first name")); //->"first_name"
console.log(toSnakeCase("last   name")); //->"last_name"
console.log(toSnakeCase("   I love Java Script")); //->"i_love_java_script"
console.log(toSnakeCase("already_snake_case")); //-> "already_snake_case"
console.log(toSnakeCase("hello")); //-> "hello"
/* 
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are ignored.
Examples:
alternatingCases("Hello") 	-> "HeLlO"
alternatingCases("basketball") 	-> "BaSkEtBaLl"
alternatingCases("Tech Global") 	-> "TeCh GlObAl"
alternatingCases("") 		-> ""
alternatingCases("123!@#aB") 	-> "123!@#Ab"
*/
console.log("\n--------TASK3--------\n");

function alternatingCases(str) {
  let result = "";

  str
    .split("")
    .map((el, index) => {
      if (/[a-zA-Z]/g.test(el)) {
        index % 2 === 0
          ? (result += el.toUpperCase())
          : (result += el.toLowerCase());
      } else {
        result += el;
      }
    })
    .join(" ");

  return result;
}
console.log(alternatingCases("Hello")); //-> "HeLlO"
console.log(alternatingCases("basketball")); //-> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); //-> "TeCh GlObAl"
console.log(alternatingCases("")); //-> ""
console.log(alternatingCases("123!@#aB")); //-> "123!@#Ab"
/* 
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and -, 
and return a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")     		->  "0"
isNeutral("-+", "-+") 		->   "-+"
isNeutral("-++-", "-+-+")           	->  "-+00"
isNeutral("--++--", "++--++")     	->  "000000"
isNeutral("+++", "+++")          	 ->  "+++"*/

console.log("\n--------TASK4--------\n");
function isNeutral(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  let result = "";
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) result += arr1[i];
      else result += "0";
    }
  }
  return result;
}

console.log(isNeutral("-", "+")); //->  "0"
console.log(isNeutral("-+", "-+")); //->  "-+"
console.log(isNeutral("-++-", "-+-+")); //->  "-+00"
console.log(isNeutral("--++--", "++--++")); //-> "000000"
console.log(isNeutral("+++", "+++")); //->  "+++"

/* Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of 
character/words separated by space. Looking at the first letter of each word 
(case insensitive-"A" and "a" should be treated the same), you need to determine 
whether it falls into the positive/first half of the alphabet ("a"-"m") or the 
negative/second half ("n"-"z"). Return true if there are more (or equal) 
positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	-> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	-> true
isTrueOrFalse("Got stuck in the Traffic") 		-> false*/

console.log("\n--------TASK5--------\n");
function isTrueOrFalse(str) {
  let firstHalf = "ABCDEFGHIJKLM";
  let secondHald = "NOPQRSTUVWXYZ";
  let countPositive = 0;
  let countNegative = 0;
  for (let char of str.split(" ")) {
    if (/[a-zA-Z]/g.test(char)) {
      if (firstHalf.includes(char[0].toUpperCase())) countPositive++;
      if (secondHald.includes(char[0].toUpperCase())) countNegative++;
    }
  }

  return countPositive >= countNegative ? true : false;
}
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); //-> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); //-> false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); //-> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); //-> true
console.log(isTrueOrFalse("Got stuck in the Traffic")); //-> false
