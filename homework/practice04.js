// Task 1
function middle(string) {
  if (string.length === 0) return "";
  if (string.length % 2 === 0) {
    return string[string.length / 2 - 1] + string[string.length / 2];
  } else {
    return string[Math.floor(string.length / 2)];
  }
}
console.log(middle("Tech")); //'ec
console.log(middle("Tec")); //'e
console.log(middle("a")); //'a
