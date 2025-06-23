console.log("------- Task01-------");
function replaceFirstLast(string) {
  if (string.trim().length < 2) return "";
  let firstChar = string.slice(0, 1);
  let lastChar = string.at(-1);
  return lastChar + string.slice(1, -1) + firstChar;
}
console.log(replaceFirstLast("Apple"));

console.log("------- Task02-------");
function swapFirstLastWord(str) {
  const array = str.trim().split(/\s+/);
  if (array.length <= 2) return "";
  return `${array.at(-1)} ${array.slice(1, -1).join(" ")} ${array[0]}`;
}
console.log(swapFirstLastWord("Hello world"));
console.log(swapFirstLastWord("I like good JavaScript"));
console.log(swapFirstLastWord("  B   c "));

console.log("------- Task03-------");

function factorial(num) {
  let factorial = 1;
  if (num === 0 || num === 1) return 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(3));

console.log("------- Task04-------");
function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}
console.log(removeExtraSpaces("Hello  World    fun "));

console.log("------- Task05-------");
function firstDuplicate(arr) {
  const duplicateList = [];

  for (let el of arr) {
    if (!duplicateList.includes(el)) duplicateList.push(el);
    else return el;
  }
  return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([1, "abc", 10, 1, "abc", 3, 10]));

console.log("------- Task06-------");
function getDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !newArr.includes(arr[i])) newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

console.log("------- Task07-------");
function reverseStringWords(str) {
  const arr = str.trim().split(" ");
  return arr.map((char) => char.split("").reverse().join("")).join(" ");
}
console.log(reverseStringWords("Hello World"));

console.log("------- Task08-------");
function add(arr1, arr2) {
  const newArr = [];
  const longestArr = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < longestArr; i++) {
    newArr.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return newArr;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));

console.log("------- Task09-------");
function fizzBuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(fizzBuzz(2));

console.log("------- Task10-------");
function isPalindrome(string) {
  const reversedString = string
    .toLowerCase()
    .trim()
    .split("")
    .reverse()
    .join("");

  return string.toLowerCase() === reversedString;
}
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));

console.log("------- Task11-------");
function removeDuplicates(arr) {
  const newArr = [];
  for (let el of arr) {
    if (!newArr.includes(el)) newArr.push(el);
  }
  return newArr;
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));

console.log("------- Task12-------");
function isPrime(number) {
  if (number === 2 || number === 3) return true;
  return number % 2 !== 0 && number % 1 === 0 && number % number === 0
    ? true
    : false;
}
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(29));

console.log("------- Task13-------");
function arrFactorial(arr) {
  return arr.map((el) => factorial(el));
}
console.log(arrFactorial([1, 2, 3, 4]));

function arrFactorial2(numbers) {
  function fact(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  return numbers.map((el) => fact(el));
}
console.log(arrFactorial2([1, 2, 3, 4]));

console.log("------- Task14-------");
function findBiggestNumber(str) {
  let num = "";
  let numArr = [];
  str.split("").forEach((el) => {
    if (el >= "0" && el <= "9") {
      num += el;
    } else {
      numArr.push(Number(num));
      num = "";
    }
  });
  if (num) {
    numArr.push(Number(num));
  }
  return numArr.sort((a, b) => b - a)[0];
}
console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c 6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));

console.log("------- Task14 - 2 -------");

function findBiggestNumber2(str) {
  const numbersOnly = str.match(/\d+/g); // return array of number strings [ '1', '4', '6' ]
  if (!numbersOnly) return 0;
  let biggest = numbersOnly[0];
  numbersOnly.forEach((el) => {
    if (Number(el) > Number(biggest)) biggest = el;
  });
  return biggest;
}
console.log(findBiggestNumber2("abc$"));
console.log(findBiggestNumber2("a1b4c 6#"));
console.log(findBiggestNumber2("ab110c045d"));
console.log(findBiggestNumber2("525"));

console.log("------- Task15 -------");
function findSumNumbers(str) {
  let num = "";
  let sum = 0;

  str.split("").forEach((el) => {
    if (el >= "0" && el <= "9") num += el;
    else {
      sum += Number(num);
      num = "";
    }
  });
  sum += Number(num);
  return sum;
}

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c 6#"));

console.log("------- Task16 -------");
function isPowerOf3(num) {
  return num % 3 === 0;
}
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));

console.log("------- Task17 -------");
function fibonacciSeries1(num) {
  if (num === 1) return [0];

  const arr = [0, 1]; //1

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]); //
  }
  return arr;
}
console.log(fibonacciSeries1(3)); //-> [0, 1, 1]
console.log(fibonacciSeries1(5)); //-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); //-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); //-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); //-> [0]
console.log(fibonacciSeries1(2)); //-> [0, 1]

console.log("------- Task18 -------");
function fibonacciSeries2(num) {
  const fNum = [0, 1];
  for (let i = 2; i < num; i++) {
    fNum.push(fNum[i - 2] + fNum[i - 1]);
  }
  return fNum[num - 1];
}
console.log(fibonacciSeries2(2)); //-> 1
console.log(fibonacciSeries2(4)); //-> 2
console.log(fibonacciSeries2(8)); //-> 13
console.log(fibonacciSeries2(9)); //-> 21
console.log(fibonacciSeries2(1)); //-> 0

console.log("------- Task19 -------");
function findUniques(arr1, arr2) {
  if (arr1.length < 1 && arr2.length < 1) return [];
  const arr3 = [];
  const mergedArr = [...arr1, ...arr2];
  console.log(">>", mergedArr);
  for (let el of mergedArr) {
    if (!(arr1.includes(el) && arr2.includes(el)) && !arr3.includes(el)) {
      arr3.push(el);
    }
  }
  return arr3;
}
console.log(findUniques([], [])); //-> []
console.log(findUniques([], [1, 2, 3, 2])); //-> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); //-> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); //-> []
console.log(findUniques([-1, -2], [1, 2])); //-> [-1, -2, 1, 2]

console.log("------- Task20-------");
function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10; // Get last digit
    reversed = reversed * 10 + digit; // Append digit to reversed
    num = Math.floor(num / 10); // Remove last digit
  }

  return reversed;
}
console.log(reverseNumber(371));

console.log("------- Task21-------");
function isArmstrong(num) {
  let arr = String(num).split("");
  let sumOfDigits = 0;
  let numOfEl = arr.length;
  for (let el of arr) {
    sumOfDigits += Number(el) ** numOfEl;
  }
  return sumOfDigits === num;
}
console.log(isArmstrong(153));

function isArmstrong2(num) {
  return (
    num
      .toString()
      .split("")
      .reduce(
        (acc, value) => acc + Number(value) ** num.toString().length,
        0
      ) === num
  );
}
console.log(isArmstrong2(153));

console.log("------- Task22-------");

function isAnagram(str1, str2) {
  const arr1 = str1.toLowerCase().replace(/\s+/g, "").split("");
  const arr2 = str2.toLowerCase().replace(/\s+/g, "").split("");
  const count1 = {};
  const count2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let item of arr1) {
    count1[item] = (count1[item] || 0) + 1;
  }
  for (let item of arr2) {
    count2[item] = (count2[item] || 0) + 1;
  }

  for (let item in count1) {
    if (count1[item] !== count2[item]) return false;
  }
  return true;
}
console.log(isAnagram("Apple", "Peach")); //​ 		-> false
console.log(isAnagram("listen", "silent")); //​ 		-> true
console.log(isAnagram("astronomer", "moon starer")); //​ 	-> true
console.log(isAnagram("CINEMA", "iceman")); //​ 		-> true
console.log(isAnagram("123", "1234")); // 		-> false

console.log("------- Task23-------");
function countPalindrome(string) {
  if (string === "") return 0;
  let count = 0;
  const arr = string.toLowerCase().split(" ");
  const reverseWords = arr.map((word) => word.split("").reverse().join(""));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === reverseWords[i]) count += 1;
  }
  return count;
}
console.log(countPalindrome("Mom kayak Dad"));

console.log("------- Task24-------");
function canFormString(str1, str2) {
  const arr1 = str1.toLowerCase().replace(/\s+/g, "").split("");
  const arr2 = str2.toLowerCase().replace(/\s+/g, "").split("");
  const count1 = {};
  const count2 = {};

  for (let el of arr1) {
    count1[el] = (count1[el] || 0) + 1;
  }
  for (let el of arr2) {
    count2[el] = (count2[el] || 0) + 1;
  }
  for (let item in count2) {
    if (!count1[item] || count1[item] < count2[item]) return false;
  }
  return true;
}
console.log(canFormString("Hello", "Hi"));
console.log(canFormString("CONVERSATION", "voices rant on"));

console.log("------- Task25-------");
function countOccurrence(str1, str2) {
  let count = Infinity;
  const arr1 = str1.toLowerCase().replace(/\s+/g, "").split("");
  const arr2 = str2.toLowerCase().replace(/\s+/g, "").split("");
  const countProps1 = {};
  const countProps2 = {};

  for (let item of arr1) {
    countProps1[item] = (countProps1[item] || 0) + 1;
  }
  for (let item of arr2) {
    countProps2[item] = (countProps2[item] || 0) + 1;
  }

  for (let item in countProps2) {
    let possibleCount = countProps1[item] / countProps2[item];
    count = Math.min(count, possibleCount);
  }
  return count;
}
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("IT conversations", "IT"));

function fibonacciSeries2(number) {
  const fibNum = [0, 1];
  for (let i = 0; i < number; i++) {
    fibNum.push(fibNum[i - 2] + fibNum[i - 1]);
  }
  return fibNum[number - 1];
}
console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
