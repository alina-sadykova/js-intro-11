const numbers = [1, -2, 3, 4, 5];

let flag = true;

// for (let num of numbers) {
//   if (num <= 0) {
//     flag = false;
//     break;
//   }
// }

// numbers.forEach((num) => {
//   if (num <= 0) {
//     flag = false;
//   }
// });
// console.log(flag);

let allPos = numbers.every((num) => {
  console.log("num", num);
  return num > 0;
});
console.log(allPos);

const cities = ["Chicago", "Rome", "Berlin"];
let someCity = cities.some((city) => city.length === 10);
console.log(someCity);
