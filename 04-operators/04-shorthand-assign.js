// = assignment operator

// shorthand assignment operator
let num = 5;
//increase by 5
num += 5; // same as -> num = num + 5
console.log(num); //10

// find their product, addition, division, subst, remainder, exp

let num1 = 6;
let num2 = 4;
console.log("add", num1 + num2); //10
console.log("subst", num1 - num2); //2
console.log("product", num1 * num2); //24
console.log("division", num1 / num2); //1.5
console.log("modulus", num1 % num2); //2
console.log("expon", num1 ** num2); //1296

// find area and perimeter
let side1 = 5;
let side2 = 8;

console.log(`The area is ${side1 * side2}.`); //40
console.log(`The perimeter is ${2 * (side1 + side2)}.`); //26

//find monthly, biweekly, weekly avergae amount of salary
let annualSalary = 120000;
let monthly = 12;
let biweekly = 26;
let weekly = 52;

console.log(`Monthly salary is ${annualSalary / monthly}.`); //Monthly salary is 10000
console.log(`Biweekly salary is ${Math.floor(annualSalary / biweekly)}.`); //Biweekly salary is 4615
console.log(`Weekly salary is ${Math.floor(annualSalary / weekly)}.`); //Weekly salary is 2307.
