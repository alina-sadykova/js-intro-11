const date = new Date();

let dayOfTheWeek = 6;

console.log(dayOfTheWeek);
/*
Write a program that tells if the day is WEEKEND or a WEEKDAY
0 or 6 -> WEEKEND 
1-5    -> WEEKDAY
*/

if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
  console.log("WEEKEND");
} else {
  console.log("WEEKDAY");
}
console.log("END");

switch (dayOfTheWeek) {
  case 0:
  case 6:
    console.log("WEEKEND");
    break;
  default:
    console.log("WEEKDAY");
}
console.log("END");

switch (true) {
  case dayOfTheWeek === 0 || dayOfTheWeek === 6:
    console.log("WEEKEND");
    break;
  default:
    console.log("WEEKDAY");
}
console.log("END");
