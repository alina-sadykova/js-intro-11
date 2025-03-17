const Person = require("./Person");

class Singer extends Person {
  constructor(fullname, age, bandName) {
    super(fullname, age);
    this.bandName = bandName;
  }
  sing() {
    return true;
  }
  playGuitar() {
    return true;
  }
}

// const singer = new Singer("Jane D", 30, "Stars");
// singer.eat();
// singer.sleep();
// console.log(singer.walk());
// console.log(singer.sing());
// console.log(singer.playGuitar());

module.exports = Singer;
