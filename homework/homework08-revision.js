console.log("\n--------TASK9--------\n");
/*
Requirement:
Write a function named noXInVariables() which takes an array 
as argument and return an array that all the x or X removed 
from the elements. 
NOTE: If the element is existing of x or X letters only, then 
completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]
*/
function noXInVariables(arr) {
  return arr
    .map((el) =>
      typeof el === "string"
        ? el
            .split("")
            .filter((el) => el.toLowerCase() !== "x")
            .join("")
        : el
    )
    .filter((el) => el);
}
console.log(noXInVariables(["abc", 123, "#$%"])); //-> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); //-> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); //-> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); //-> ["yyy", "ABC"]

console.log("\n--------TASK8--------\n");
/*
Requirement:
Write a function named getCommons() which takes two string 
arrays as arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]
*/
function getCommons(arr1, arr2) {
  return arr1.reduce(
    (result, el) =>
      arr2.includes(el) && !result.includes(el) ? result.concat(el) : result,
    []
  );

  // ---OPTION 2
  let result = [];
  for (let el of arr1) {
    if (arr2.includes(el) && !result.includes(el)) result.push(el);
  }
  return result;
}
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //		-> []
console.log(
  getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])
); //	-> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //	-> ["C#"]

console.log("\n--------TASK6--------\n");
/*
Requirement:
Write a function named removeStringSpecialsDigits() which 
takes a string as argument and return a string without the 
special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"
*/
function removeStringSpecialsDigits(str) {
  let result = "";
  for (let char of str) {
    if (char === " " || (char >= "a" && char <= "z")) result += char;
  }
  return result;
}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //	-> "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); //		-> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //	-> "Automation"

console.log("\n--------TASK5--------\n");
/*
Requirement:
Write a function named reverseSentence() which takes a string 
as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not 
enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"
*/
function reverseSentence(str) {
  if (str.split(" ").length <= 1) return "There is not enough words!";

  let newStr = str.split(" ").reverse().join(" ").toLowerCase();
  return newStr[0].toUpperCase() + newStr.slice(1);
}
console.log(reverseSentence("Hello")); //		-> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); //		-> "Fun is javascript"
console.log(reverseSentence("This is a sentence")); //	-> "Sentence a is this"
