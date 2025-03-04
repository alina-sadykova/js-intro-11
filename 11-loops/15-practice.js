console.log(`\n------- Task01 --------\n`);
const nums = [1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5];
// Find the sum of first 3 and last 3 elements -> 31
let sum = 0;
let newNums = [];
let firstThreeElements = nums.slice(0, 3);
let lastThreeElements = nums.slice(-3);
newNums.push(...firstThreeElements, ...lastThreeElements);
for (let num of newNums) {
  sum += num;
}
console.log(sum);

// Solution 2
let sum2 = 0;

for (let i = 0; i <= 2; i++) {
  sum2 += nums[i] + nums.at(-1 - i);
}
console.log(sum2);
