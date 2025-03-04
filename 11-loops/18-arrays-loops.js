const nums = [-1, 1, 3, 0, 2, 6, 8];
console.log(`\n------- Task01 --------\n`);

// Please find the first even number from the array -> 0

let firstEven;

for (const num of nums) {
  if (num % 2 === 0) {
    firstEven = num;
    break;
  }
}

console.log(firstEven);

// for(let i = 0; i < nums.length; i++) {
//   if(nums[i] % 2 === 0) {
//     firstEven = nums[i];
//     break;
//   }
// }

console.log(`\n------- Task02 --------\n`);
// Find the first city that has the odd length  -> Chicago
const cities = ["Berlin", "Rome", "Chicago", "Kyiv", "Istanbul", "Tokyo"];
for (let city of cities) {
  if (city.length % 2 !== 0) {
    console.log(city);
  }
}

console.log(`\n------- Task03 --------\n`);

let citiesWithMoreThanFiveChar = [];
for (let city of cities) {
  if (city.length > 5) citiesWithMoreThanFiveChar.push(city);
}
console.log(citiesWithMoreThanFiveChar);
