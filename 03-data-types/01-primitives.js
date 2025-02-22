// --------STRING

let fullName = "John Doe";

console.log(fullName); //string

console.log(typeof fullName); //string

// typeof operator shows what type of data your variable is.

// '' an empty string is still a string.
// ' ' a string with a space is still a string with.

console.log(typeof ""); //string
console.log(typeof "13"); //string

// ---------NUMBER
let wholeNum = 0;
let decimalNum = 15.99;

console.log(typeof wholeNum); //number
console.log(typeof decimalNum); //number

// Convert decimal numbers in string into a number
let price = parseFloat("2149.99") / 2;
console.log(price);

// --------BigInt is for larger numbers (larger than 1 or -1)
// JS numbers are stored in a 64-bit floating-point format

let biggestNumber = Number.MAX_SAFE_INTEGER;
let smallestNumber = Number.MIN_SAFE_INTEGER;
console.log(biggestNumber); //9007199254740991
console.log(smallestNumber); //-9007199254740991

let number1 = 9007199254740991;
console.log(number1); //9007199254740991

let number2 = 9007199254740991n; //add n to make it into bigInt
console.log(number2); //9007199254740991

// console.log(9007199254740991n + 5); //error: cannot mix bigint and other types
console.log(9007199254740991n + 5n);

let number3 = BigInt("90071992547409917"); //wrap it in BigInt() and inside string to convert it into bigInt
console.log(number3);

console.log(typeof number1); //number
console.log(typeof number2); //bigint
console.log(typeof number3); //bigint

// -------- BOOLEAN (True or False)
let b1 = true;
let b2 = false;
console.log(b1);
console.log(b2);
console.log(typeof b1);
console.log(typeof b2);

let age = 15;
let allowed = age >= 16;
console.log(allowed); //false

if (age >= 16) {
  console.log("You are allowed to get a driving license");
} else {
  console.log("You are NOT allowed to get a driving license");
}

// TRUTHY and FALSY

// FALSY: false, null, undefined, 0, -0, '', NaN
// TRUTHY: true, number besides 0, '0', 'text', [], {}

console.log(typeof (5 === 5)); //boolean
console.log(typeof ("Hi" === "hi")); //boolean

// ------------UNDEFINED (variable declared but no value assigned)
let today;
console.log(today); //undefined
console.log(typeof today); //undefined

let tomorrow = undefined;
console.log(tomorrow); //undefined

// *** what is the difference between undefined and null?
/* example: address form
Required fields : undefined
Street
City
State
ZIP

Optional fields : null
Street 2
Apt number
*/

// ---------NULL (I dont have SSN information, intentional absence of any object value, NO VALUE)
let SSN = null;
console.log(SSN); //null
console.log(typeof SSN); //object, even if it is primitive data type, it is an object in JS

// ---------SYMBOL
let s1 = Symbol("Foo");
let s2 = Symbol("SOS");
let s3 = Symbol("XOX");

console.log(s1); //Symbol(Foo)
console.log(s2); //Symbol(SOS)
console.log(s3); //Symbol(XOX)
console.log(typeof s1); //symbol
console.log(typeof s2); //symbol
console.log(typeof s3); //symbol
