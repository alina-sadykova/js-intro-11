function evenOdd(number) {
  return number % 2 === 0 ? "EVEN" : "ODD";
}

console.log(evenOdd(2));
console.log(evenOdd(3));

// Task 2
function posNegZero(number) {
  return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}
console.log(posNegZero(-1));

const posNegZero2 = (number) =>
  number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";

console.log(posNegZero2(1));

// Task 3
/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/
const startE = (string) => string.toLowerCase().startsWith("e");

console.log(startE("Emily"));
console.log(startE("emily"));
console.log(startE("Alex"));
console.log(startE(""));
console.log(startE("John"));

// Task 4
/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
const divisible5 = (number) => number % 5 === 0;

console.log(divisible5(7));
console.log(divisible5(10));
console.log(divisible5(0));
console.log(divisible5(99));

// Task 5
const fooBar = (number) => {
  //   if (number % 5 === 0 && number % 7 === 0) return "foorbar";
  //   else if (number % 7 === 0) return "bar";
  //   else if (number % 5 === 0) return "foo";
  //   return number;
  return number % 5 === 0 && number % 7 === 0
    ? "foobar"
    : number % 7 === 0
    ? "bar"
    : number % 5 === 0
    ? "foo"
    : number;
};
console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));
