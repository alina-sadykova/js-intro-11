console.log("-------task 1");
function doubleOrTripleWord(str) {
  if (str.length % 2 === 0) return str + str + str;
  else return str + str;
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Technical"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord("11"));
console.log(doubleOrTripleWord("2"));

console.log("-------task 2");
function firstLastWord(str) {
  if (str.length === 0) return "";
  return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1);
}
console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JS"));
console.log(firstLastWord("   "));

console.log("-------task 3");
function hasVowel(str) {
  return str
    .toLowerCase()
    .split("")
    .some((char) => [/[aeoui]/.test(char)]);
}
console.log(hasVowel("Javascript"));

function hasVowel2(str) {
  const vowels = "aeoui";
  return str
    .toLowerCase()
    .split("")
    .some((char) => vowels.includes(char));
}
console.log(hasVowel2("123"));

console.log("-------task 4");
function startVowel(str) {
  const vowels = "a, e, i o, u, A, E, I, O, U";
  return vowels.includes(str[0]);
}
console.log(startVowel("Apple"));

console.log("-------task 5");
function averageOfEdges(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  return (max + min) / 2;
}
console.log(averageOfEdges(0, 0, 6));

console.log("-------task 6");
function replaceFirstLast(str) {
  if (str.length < 2) return "";
  let newStr = str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
  return newStr;
}
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("T"));

console.log("-------task 7");
function swap4(str) {
  if (str.length < 8) return "";
  return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4("Tech"));

console.log("-------task 8");
function swapFirstLastWord(str) {
  if (str.split(" ").length <= 2) return "";
  return (
    str.slice(str.lastIndexOf(" ") + 1) +
    str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1) +
    str.slice(0, str.indexOf(" "))
  );
}
console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JS"));
console.log(swapFirstLastWord("b a"));
console.log(swapFirstLastWord("b"));

console.log("-------task 9");
function countPos(arr) {
  return arr.reduce((count, value) => {
    if (value > 0) count++;
    return count;
  }, 0);
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));

console.log("-------task 10");
function getEvens(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  const array = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

console.log("-------task 11");
function getMultipleOf5(num1, num2) {
  const array = [];
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  if (num1 > num2) {
    for (let i = max; i >= min; i--) {
      if (i % 5 === 0) array.push(i);
    }
  } else {
    for (let i = min; i <= max; i++) {
      if (i % 5 === 0) array.push(i);
    }
  }
  return array;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

console.log("-------task 12");
function countNeg(arr) {
  return arr.reduce((count, value) => {
    if (value < 0) count++;
    return count;
  }, 0);
}
console.log(countNeg([-45, 0, 0, 34, 5, 67]));

console.log("-------task 13");
function countA(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((total, value) => {
      if (value === "a") total++;
      return total;
    }, 0);
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("Cypress"));

console.log("-------task 14");
function countWords(str) {
  return str.trim().split(" ").length;
}
console.log(countWords(" Javascript is fun "));

console.log("-------task 15");

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let factorialNum = 1;
  for (let i = 2; i <= num; i++) {
    factorialNum *= i;
  }
  return factorialNum;
}
console.log(factorial(5)); //120
console.log(factorial(4)); //24

function factorial2(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial2(5)); //120
console.log(factorial(4)); //24

console.log("-------task 16");
function count3OrLess(str) {
  return str.split(" ").filter((el) => el.length <= 3).length;
}
console.log(count3OrLess("Hello Hi"));
console.log(count3OrLess("Hello is hi"));

console.log("-------task 17");
function removeExtraSpaces(str) {
  return str
    .trim()
    .split(" ")
    .filter((el) => el !== "")
    .join(" ");
}
console.log(removeExtraSpaces("    Hello   World "));
console.log(removeExtraSpaces("    JS is     fun "));

console.log("-------task 18");
function middleInt(num1, num2, num3) {
  return [num1, num2, num3].sort((a, b) => a - b)[1];
}
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(-1, 25, 8));

console.log("-------task 19");
function firstDuplicate(arr) {
  const found = [];
  for (let i = 0; i < arr.length; i++) {
    if (found.some((el) => el === arr[i])) {
      return arr[i];
    }
    found.push(arr[i]);
  }
  return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

console.log("----second option");
function firstDuplicate2(arr) {
  const found = [];

  for (let el of arr) {
    if (!found.includes(el)) found.push(el);
    else return el;
  }
  return -1;
}

console.log(firstDuplicate2([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate2([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate2([5, "5", 3, 7, 4]));
console.log(firstDuplicate2([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

console.log("----second option");

function firstDuplicate3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) return arr[i];
  }
  return -1;
}
console.log(firstDuplicate3([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate3([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate3([5, "5", 3, 7, 4]));
console.log(firstDuplicate3([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate3(["foo", "abc", "123", "bar"]));

console.log("-------task 20");
function getDuplicates(arr) {
  const found = [];
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (found.some((el) => el === current)) {
      if (!duplicate.some((item) => item === current)) {
        duplicate.push(current);
      }
    } else {
      found.push(current);
    }
  }
  return duplicate;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

function getDuplicates2(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!duplicates.includes(arr[i]) && arr.includes(arr[i], i + 1)) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}
console.log(getDuplicates2([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates2([1, 2, 5, 0, 7]));
console.log(getDuplicates2(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));

console.log("-------task 21");
function countVowels(str) {
  let vowels = "A, E, O, U, I, a, e, o, u, i";
  let count = 0;
  str.split("").forEach((el) => {
    if (vowels.includes(el) && el !== " ") count += 1;
  });
  return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log("-------task 22");
function reverseStringWords(str) {
  let separateWords = str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");

  return separateWords;
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("JavaScript"));

console.log("-------task 23");
function countConsonants(str) {
  let vowels = "A, E, O, U, I, a, e, o, u, i";
  return str.split("").reduce((count, value) => {
    if (!vowels.includes(value)) count++;
    return count;
  }, 0);
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World")); //7
console.log(countConsonants("JavaScript is fun")); //10
console.log(countConsonants(""));

console.log("-------task 24");
function countMultipleWords(arr) {
  let count = 0;
  arr.forEach((el) => {
    if (el.trim().split(" ").length >= 2) count++;
  });
  return count;
}
console.log(countMultipleWords(["foo", "", " ", "foo bar", "  foo"]));
console.log(countMultipleWords(["foo", "bar", " ", "foobar", "  foo"]));
console.log(countMultipleWords(["f o o", "b ar", " ", "foo bar", "  f oo"]));
console.log(countMultipleWords([]));

console.log("-------task 25");

/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers. Assume you will not be given negative numbers.
*/
function fizzBuzz(num1, num2) {
  const numbers = [];
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) numbers.push("FizzBuzz");
    else if (i % 3 === 0) numbers.push("Fizz");
    else if (i % 5 === 0) numbers.push("Buzz");
    else numbers.push(i);
  }
  return numbers.join(" | ");
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));

console.log("-------task 26");
function isPalindrome(str) {
  let reverse = str.toLowerCase().split("").reverse().join("");

  if (str.toLowerCase() === reverse) return true;
  else return false;
}
console.log(isPalindrome("Hello")); //false
console.log(isPalindrome("Kayak")); //true
console.log(isPalindrome("ab a")); //false
console.log(isPalindrome("123454321")); //true
console.log(isPalindrome("A")); //true
console.log(isPalindrome("")); //true

console.log("-------task 27");
function isPrime(num) {
  if (num === 2) return true;
  if (num < 1) return false;
  if (num % 2 !== 0 && num % 1 === 0 && num % num === 0) return true;
  else return false;
}
console.log(isPrime(5)); //true
console.log(isPrime(-5)); //false
console.log(isPrime(12)); //false
console.log(isPrime(13)); //true
console.log(isPrime(3)); //true

function countPrimes(arr) {
  let count = 0;

  function isPrime(num) {
    if (num === 2) return true;
    if (num <= 1) return false;
    if (num % 2 !== 0 && num % 1 === 0 && num % num === 0) return true;
    else return false;
  }
  for (let el of arr) {
    if (isPrime(el)) count++;
  }
  return count;
}
console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 	-> 4
console.log(countPrimes([41, 53, 19, 47, 67])); // 	-> 5

console.log("-------task 28");
function add(arr1, arr2) {
  const arr3 = [];
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i]) arr3.push(arr1[i] + arr2[i]);
      else arr3.push(arr1[i]);
    }
  } else if (arr1.length < arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i]) arr3.push(arr1[i] + arr2[i]);
      else arr3.push(arr2[i]);
    }
  } else {
    for (let i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i] + arr2[i]);
    }
  }
  return arr3;
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

console.log("-------task 29");
function noA(arr) {
  return arr.map((el) => {
    if (el.startsWith("A") || el.startsWith("a")) return "###";
    // el.replace(/^A|^a/, "###");
    else return el;
  });
}
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));

console.log("-------task 30");
function no3and5(arr) {
  return arr.map((el) => {
    if (el % 5 === 0 && el % 3 === 0) return 101;
    else if (el % 5 === 0) return 99;
    else if (el % 3 === 0) return 100;
    else return el;
  });
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

console.log("-------task 31");
function no13(arr) {
  return arr.map((el) => (el === 13 ? 0 : el));
}
console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));

console.log("-------task 32");
function removeDuplicates(arr) {
  const newArr = [];
  arr.forEach((el) => {
    if (!newArr.includes(el)) newArr.push(el);
  });
  return newArr;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); //[10, 20, 35, 60, 70]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); //["abc", "xyz", "123", "ab", "ABC"]

console.log("-------task 33");
function noDigit(str) {
  let newStr = "";
  str.split("").forEach((el) => {
    if (!/[0-9]/.test(el)) newStr += el;
    // if (!(el >= "0" && el <= "9")) newStr += el;
  });
  return newStr;
}
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));
console.log(noDigit(""));

console.log("-------task 34");
function noVowel(str) {
  let newStr = "";
  let vowels = "AEOUIaeoui";
  str.split("").forEach((el) => {
    if (!vowels.includes(el)) newStr += el;
  });
  return newStr;
}
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("125$"));

console.log("-------task 35");
function sumOfDigits(str) {
  let sum = 0;
  str.split("").forEach((el) => {
    if (el >= "0" && el <= "9") sum += Number(el);
  });
  return sum;
}
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));

console.log("-------task 36");
/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument 
and return the array with every number replaced with their factorials.
*/
function arrFactorial(arr) {
  function factorial(num) {
    return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
  }
  return arr.map((el) => {
    return factorial(el);
  });
}
console.log(arrFactorial([1, 2, 3, 4]));
