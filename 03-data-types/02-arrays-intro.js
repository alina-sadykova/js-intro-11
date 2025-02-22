// ARRAYS

let studentName = "Ayah";

let names = ["John", "Max", "Alex"];

// To access any specific element in an array
let secondName = names[1];
console.log(secondName);
console.log(typeof secondName);
console.log(names[3]); //undefined

// ADD element to an array
const cities = ["Rome", "Berlin"];
console.log(cities.length); // 2
console.log(cities);

// 1.update an existing element
cities[1] = "Chicago";
console.log(cities);

// 2.add a new element
// cities[2] = "Miami";
cities.push("Miami");
cities.push("Paris", "Madrid");
console.log(cities);

const studentIds = [100, 101, 102, 103, 104];
let firstElement = studentIds[0];
let lastElement = studentIds[studentIds.length - 1];
console.log(lastElement);
console.log("type", typeof studentIds); //object
console.log("is array", Array.isArray(studentIds)); //true

// 3.remove first element or elements, add or replace elements
// array.splice(startIndex, deleteCount, item1, item2, ...)
cities.splice(0, 2);
console.log("splice:", cities);

// HOW TO CREATE AN ARRAY?
//array literals with []
const arr = [];

//or new Array() constructor
const myList = new Array(10, 20, 30);
// but newArray() gets confusing when you pass one number,
// which means a number of empty slots

// why reference type?
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1); //[ 1, 2, 3 ]
console.log(arr2); //[ 1, 2, 3 ]
console.log(arr1 === arr2); //true
arr1[0] = 10;
console.log(arr1); //[ 10, 2, 3 ]
console.log(arr2); //[ 10, 2, 3 ]
