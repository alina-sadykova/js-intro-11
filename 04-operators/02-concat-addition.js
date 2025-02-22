let n1 = 3;
let n2 = "5";
let n3 = 4;
let n4 = "10";

console.log(n1 + n2); //"35"
console.log(typeof (n1 + n2)); //string
console.log(typeof (n1 + (n3 + n4) + n2)); // string '34105'

console.log(n2 * n1); //15 compiler error

console.log(n4 / n2); //2
console.log("hello" / 2); //NaN

console.log(5 * true); //5
console.log(5 * ""); //0
console.log(5 * "    "); //0

console.log(5 + "    "); //5 string
console.log(typeof (5 + "    ")); //string

console.log("Sum of" + 3 + 5);
("35");
console.log("Sum of" + 6 - 5); //NaN
