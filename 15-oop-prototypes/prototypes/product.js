class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  sell(num) {
    if (this.quantity >= num) this.quantity -= num;
    else throw new Error(`We do not have ${num} ${this.name} in stock`);
  }
  return(num) {
    this.quantity += num;
  }
  applyDiscount(percentage) {
    if (percentage <= 1) this.price -= this.price * percentage;
  }
}
module.exports = Product;
