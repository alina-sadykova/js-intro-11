const Person = require("./Person");

class Programmer extends Person {
  constructor(fullname, age, companyName) {
    super(fullname, age); // invokes parent class constructor
    this.companyName = companyName;
  }

  code(language) {
    console.log(`Programmer codes in ${language}`);
  }
}
// const programmer = new Programmer("John B", 20, "Apple");
// programmer.eat();
// programmer.sleep();
// console.log(programmer.walk());
// programmer.code("JS");

module.exports = Programmer;
