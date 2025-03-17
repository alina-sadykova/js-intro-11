const Person = require("./Person");

class Dancer extends Person {
  constructor(fullname, age, groupName) {
    super(fullname, age);
    this.groupName = groupName;
  }
  dance() {
    return true;
  }
}
// const dancer = new Dancer("Ann H", 22, "Step Up");
// dancer.eat();
// dancer.sleep();
// console.log(dancer.walk());
// console.log(dancer.dance());

module.exports = Dancer;
