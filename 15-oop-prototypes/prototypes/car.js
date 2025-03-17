class Car {
  constructor(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
  }
  drives() {
    console.log(`${this.make} ${this.model} drives!`);
  }
  breaks() {
    console.log(`${this.make} ${this.model} breaks!`);
  }
}

module.exports = Car;
