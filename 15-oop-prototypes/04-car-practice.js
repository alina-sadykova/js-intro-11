const Car = require("./prototypes/car");
/*
Create 3 car objects with below info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000

1. Log each car object to the console
2. Execute drive and stop methods for each car
3. Get each cars price information in the format -> {year make model} is ${price}.
Example: 2023 Tesla X is $80000.
*/
const car1 = new Car("Tesla", "X", 2023, 80000);
const car2 = new Car("BMW", "X7", 2022, 60000);
const car3 = new Car("Tesla", "Y", 2020, 27000);

// console.log(car1);
// console.log(car2);
// console.log(car3);

// console.log(car1.drives());
// console.log(car2.drives());
// console.log(car3.breaks());

// console.log(`${car1.year} ${car1.make} ${car1.model} is ${car1.price}`);
// console.log(`${car2.year} ${car2.make} ${car2.model} is ${car2.price}`);
// console.log(`${car3.year} ${car3.make} ${car3.model} is ${car3.price}`);

const cars = [car1, car2, car3];
cars.forEach((car) => {
  console.log(car);
  car.drives();
  car.breaks();
  console.log(`${car.year} ${car.make} ${car.model} is ${car.price}`);
  console.log();
});
