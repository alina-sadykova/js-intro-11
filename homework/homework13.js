console.log("\n--------TASK1--------\n");
/*
Requirement:
Write a function named countVC() which takes a string argument and 
returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0} */
function countVC(string) {
  const obj = {
    vowels: 0,
    consonants: 0,
  };
  const listOfVowels = "aeoui";

  string
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (el >= "a" && el <= "z") {
        if (listOfVowels.includes(el)) obj.vowels++;
        else obj.consonants++;
      }
    });
  return obj;
}
console.log(countVC("Hello")); //-> {vowels: 2, consonants: 3}
console.log(countVC("Programming")); //-> {vowels: 3, consonants: 8}
console.log(countVC("123AbC")); //-> {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")); //-> {vowels: 0, consonants: 3}
console.log(countVC("")); //-> {vowels: 0, consonants: 0}

console.log("\n--------TASK2--------\n");
/*
Requirement:
Write a function named countChars() which takes a string argument and
 returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the 
object. Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}
*/
function countChars(str) {
  const obj = {};
  str
    .replace(/ +/g, "")
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (el >= "a" && el <= "z") obj.letters = (obj.letters || 0) + 1;
      else if (el >= "0" && el <= "9") obj.numbers = (obj.numbers || 0) + 1;
      else obj.specials = (obj.specials || 0) + 1;
    });
  return obj;
}
console.log(countChars("Hello")); //-> {letters: 5}
console.log(countChars("Programming 123")); //-> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")); //-> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")); //-> {numbers: 10}
console.log(countChars("   ")); //-> {}
console.log(countChars("")); //-> {}

console.log("\n--------TASK3--------\n");
/*
Requirement:
Write a function named maxOccurrences() which takes a string argument and returns the 
character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then 
return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "ab"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	-> ""
maxOccurrences("")   		-> ""
*/

function maxOccurrences(str) {
  const obj = {};
  let highestNumber = 0;
  const strWithNoSpace = str.replace(/\s/g, "").toLowerCase();

  for (let char of strWithNoSpace) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let count of Object.values(obj)) {
    if (count > highestNumber) highestNumber = count;
  }
  for (let char of strWithNoSpace) {
    if (obj[char] === highestNumber) {
      return char;
    }
  }
  return "";
}
console.log(maxOccurrences("Hello")); // 	-> "l"
console.log(maxOccurrences("Occurrences")); //	-> "c"
console.log(maxOccurrences("   abba   ")); //	-> "al"
console.log(maxOccurrences("12   3   21")); //	-> "1"
console.log(maxOccurrences("    ")); //	-> ""
console.log(maxOccurrences("")); //	-> ""

console.log("\n--------TASK4--------\n");
/*
Requirement:
Write a function named starOut() which takes a string argument and returns it back with 
every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""
*/
function starOut(str) {
  const asterisk = "*";
  let firstChar;
  let lastChar;

  if (!str || str.split("").every((char) => char === asterisk)) return "";

  if (str.includes(asterisk)) {
    firstChar = str.slice(0, str.indexOf(asterisk) - 1);
    lastChar = str.slice(str.lastIndexOf(asterisk) + 2);
    return firstChar + lastChar;
  } else {
    return str;
  }
}
console.log(starOut("ab*cd")); // 	-> "ad"
console.log(starOut("ab**cd")); //-> "ad"
console.log(starOut("xm*sm*sy")); //-> "xy"
console.log(starOut("abc")); //-> "abc"
console.log(starOut("***")); //-> ""
console.log(starOut("   ")); //-> "  "
console.log(starOut("")); //-> ""

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. 
A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666
*/
function romanToInt(str) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  const arrayOfRomanNums = Array.of(...str);

  for (let i = 0; i < arrayOfRomanNums.length; i++) {
    let curr = obj[arrayOfRomanNums[i]];
    let next = obj[arrayOfRomanNums[i + 1]];

    if (curr < next) {
      result = next - curr;
      i++;
    } else {
      result += curr;
    }
  }
  return result;
}
console.log(romanToInt("I")); //-> 1
console.log(romanToInt("IV")); //-> 4
console.log(romanToInt("CXII")); //-> 112
console.log(romanToInt("MMM")); //-> 3000
console.log(romanToInt("MMMDCCCLXXXVIII")); //-> 3888
console.log(romanToInt("MDCLXVI")); //-> 1666
