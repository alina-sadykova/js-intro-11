/*Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked. 
NOTE: Ignore case sensitivity.
*/
function countA(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((result, value) => {
      if (value === "a") result++;
      return result;
    }, 0);
}
console.log(countA("TechGlobal is a QA bootcamp")); //  	-> 4
console.log(countA("QA stands for Quality Assurance")); //  -> 5
console.log(countA("Cypress")); //  					    -> 0

/*
Write a function named arrFactorial() which takes an array of 
numbers as argument and return the array with every number replaced with their factorials.
*/
function arrFactorial(numbers) {
  function factorial(num) {
    return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
  }
  return numbers.map((number) => {
    return factorial(number);
  });
}
console.log(arrFactorial([1, 2, 3, 4])); //  -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); //   		-> [1,120]
console.log(arrFactorial([5, 0, 6])); //   	-> [120, 1, 720]
console.log(arrFactorial([])); //   		    -> []

/*
 */
function replaceFirstLast(str) {
  let firstChar = str[0];
  let lastChar = str.at(-1);
  if()
  return lastChar + str.slice(1, str.length - 1) + firstChar;
}
console.log(replaceFirstLast("")); //  			    -> ""
console.log(replaceFirstLast("Hello")); //  		-> "oellH"
console.log(replaceFirstLast("Tech Global")); //  	-> "lech GlobaT"
console.log(replaceFirstLast("A")); //  		    -> ""
console.log(replaceFirstLast("    A      ")); //  	-> ""
