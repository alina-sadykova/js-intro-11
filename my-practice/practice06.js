console.log("\n--------TASK1--------\n");
const array = [2, 3, 4, 5, 6, 7];
const newArr = array.slice(0, 2);
console.log(array);
console.log(newArr);

const array2 = [2, 3, 4, 5, 1, 7];
const newArr2 = array2.splice(0, 2, 10, 11);
console.log(array2);
console.log(newArr2);

const mapArray = array2.map((el) => el * 2);
console.log("array2", array2);
console.log("mapArray", mapArray);

const filterArr = array2.filter((el) => el > 2);
console.log("filterArr", filterArr);

const reduceArr = array2.reduce((accum, value) => {
  return (accum += value);
});
console.log("reduceArr", reduceArr);

const someArr = array2.some((el) => el > 9);
console.log("someArr", someArr);

const everyArr = array2.every((el) => el > 9);
console.log("everyArr", everyArr);

const sortArr = array2.sort((a, b) => b - a);
console.log("sorted", sortArr);

let num = 1;
while (num < array2.length) {
  console.log(num++);
}

let digit = 2;
do {
  digit++;
} while (digit < array2.length);
console.log("digit", digit);

function product(...numbers) {
  return numbers.map((el) => el * 10);
}
console.log(product(...array2));

const array3 = array2;
array3.splice(0, 1);
console.log("array3", array3);
console.log("array2", array2);

const studentA = {
  fname: "John",
  age: 23,
  education: {
    highSchool: {
      name: "SMHS",
      city: "Smithville",
    },
    college: {
      name: "UCLA",
      city: "Chicago",
    },
  },
};
const studentB = { ...studentA };
studentA.lsname = "Doe";
studentA.education.college.country = "USA";
console.log("studentA", studentA);
console.log("studentB", studentB);
console.log(studentA === studentB);

const studentC = JSON.parse(JSON.stringify(studentA));
console.log("studentC", studentC);

studentA.address = {};
studentC.education.college.county = "Clay";
console.log("studentA", studentA);
console.log("studentC", studentC);
console.log(studentA === studentC);

let statusOfRequest = null;
console.log(null ?? "buy");
console.log(statusOfRequest ?? true);

const instructor = {
  fname: "John",
  lname: "Doe",
  fullname() {
    return `${this.fname} ${this.lname}`;
  },
};
console.log(instructor.fullname());

function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};
const cat = new Animal("Kiki");
cat.sayHello();

console.log(Animal.prototype);
console.log(cat.name);

const creature = {
  walk() {
    console.log("Creature walks");
  },
  speak() {
    console.log("Create speaks");
  },
};
const horse = Object.create(creature);
horse.run = () => console.log("Horse runs");
horse.walk();
horse.run();

class Animals {
  speak() {
    console.log("Animal speaks");
  }
}
class Cat extends Animals {
  meow() {
    console.log("Cat meows");
  }
}
const kitten = new Cat();
kitten.speak();
kitten.meow();

console.log(Animals.prototype.prototype);

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hi, this is ${this.name}`);
};
const user = new Person("Alice", 21);
user.greet();
