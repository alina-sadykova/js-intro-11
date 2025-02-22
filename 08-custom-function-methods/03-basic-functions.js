/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false
*/
function isEven(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return number % 2 === 0;
}
console.log(isEven(3)); // false
console.log(isEven(9)); // false
console.log(isEven(12)); // true
console.log(isEven(-12)); // true

/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/
function initials(fname, lname) {
  let firstNameInitial = fname[0];
  let lastNameInitial = lname[0];
  return `${firstNameInitial}.${lastNameInitial}.`;
}
console.log(initials("John", "Doe"));
console.log(initials("Adam", "Smith"));

function inits(fullname) {
  let splitName = fullname.split(" ");

  let firstName = splitName[0].toUpperCase();
  let lastName = splitName[1].toUpperCase();

  return `${firstName[0]}${lastName[0]}`;
}
console.log(inits("john Doe"));
