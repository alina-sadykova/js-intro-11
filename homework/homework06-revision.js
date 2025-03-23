console.log("\n--------TASK13--------\n");
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of 
one element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) 			-> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) 	-> "pen"
mostRepeated([10]) 					-> 10
mostRepeated(["TechGlobal"]) 				-> "TechGlobal"
*/
const mostRepeated = (arr) => {
  let count = {};
  let mostRepeatedElement;
  let mostRepeatedCount = 0;
  for (let el of arr) {
    if (count[el]) count[el] += 1;
    else count[el] = 1;

    if (count[el] > mostRepeatedCount) {
      mostRepeatedElement = el;
      mostRepeatedCount = count[el];
    }
  }
  return mostRepeatedElement;
};
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 			-> 4
console.log(
  mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])
); // 	-> "pen"
console.log(mostRepeated([10])); // 					-> 10
console.log(mostRepeated(["TechGlobal"])); // 				-> "TechGlobal"
console.log(
  mostRepeated(["123", "pen", "pencil", "pen", "123", "abc", "pen", "pencil"])
); // 	-> "pen"

console.log("\n--------TASK12--------\n");
/*
Requirement: 
Write a method named secondMin() takes an array argument and returns 
the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array 
has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMin([7, 4, 4, 4, 23, 23, 23]) 	-> 7
secondMin([3, 4, 5, 6]) 		-> 4
secondMin([10]) 		-> 10
*/
const secondMin = (arr) => {
  //[7, 4, 4, 4, 23, 23, 23]
  if (arr.length === 1) return arr[0];
  let min = arr[0]; //4
  let secondMin = min + 1; //7

  for (let num of arr) {
    //4
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin && num !== min) {
      secondMin = num;
    }
  }

  return secondMin;
};
console.log(secondMin([3, 4, 5, 6])); // 		-> 4
console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMin([7, 7, 8, 6, 4, 4, 23, 23, 23])); // 	-> 7
console.log(secondMin([10])); //

console.log("\n--------TASK10--------\n");
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an 
argument and returns true if the given date is valid or returns 
false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("") 			-> false
isDateFormatValid("15/30/2020") 		-> false
isDateFormatValid("10-30-2020 ") 		-> false
isDateFormatValid("10.30.2020") 		-> false
isDateFormatValid("5/30/2020") 		-> false
isDateFormatValid("05/30/2020 ") 		-> true
isDateFormatValid("10/2/2020") 		-> false
isDateFormatValid("10/02/2020 ") 		-> true
*/
function isDateFormatValid(date) {
  let dateAsArray = date.split("/");
  let month = dateAsArray[0];
  let day = dateAsArray[1];
  let year = dateAsArray[2];

  // verify format
  if (month.length !== 2 || day.length !== 2 || year.length !== 4) return false;
  if (dateAsArray.length !== 3) return false;

  // verufy month
  if (month > "12" || month < "1") return false;

  // verify days
  let isLeap = false;
  if (Number(year) % 4 === 0) isLeap = true;

  let maxDays;
  if (["01", "03", "05", "07", "08", "10", "12"].includes(month)) maxDays = 30;
  else if (["04", "06", "09", "11"].includes(month)) maxDays = 30;
  else if (isLeap) maxDays = 29;
  else maxDays = 28;

  if (Number(month) > maxDays || Number(day) < 1) return false;

  //verify year
  if (Number(year) < 1) return false;
  return true;
}

console.log(isDateFormatValid("")); //-> false
console.log(isDateFormatValid("15/30/2020")); //-> false
console.log(isDateFormatValid("10-30-2020 ")); //-> false
console.log(isDateFormatValid("10.30.2020")); //-> false
console.log(isDateFormatValid("5/30/2020")); //-> false
console.log(isDateFormatValid("05/30/2020 ")); //-> true
console.log(isDateFormatValid("10/2/2020")); //-> false
console.log(isDateFormatValid("10/02/2020 ")); //-> true
