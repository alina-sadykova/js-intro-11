// Objects
// let fname = "John";
// let lname = "Doe";
// let age = 32;
// let vip = false;

let person = {
  fname: "John",
  lname: "Doe",
  age: 32,
  vip: false,
};

console.log(person);
console.log(typeof person);

// DOT notation
let fname = person.fname;
console.log(typeof fname);

// BRACKET notation if the key has space in it or start with a number
// Use case: when we loop through keys and values.
let fname1 = person["fname"];
console.log(typeof fname1);

// HOW TO UPDATE THE VALUES?
const program = {
  name: "STED",
  start: "Jan 20, 2025",
  duration: "6 months",
};
console.log(program);

program.start = "Jan 27, 2025";
program["duration"] = "7 months";

console.log(program);

const student = {
  fullName: "John Doe",
  courses: ["JavaScrript", "Python"],
  address: {
    streetName: "123 Abc St",
    aptNum: null,
    city: "Chicago",
    state: "IL",
    zip: "52773",
  },
};
console.log("student", student);

// adding a new property
student.age = 25;

console.log("update", student);

//remove property
delete student.age;
console.log("remove", student);
