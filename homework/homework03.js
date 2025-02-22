console.log("\n--------TASK1--------\n");

let r1 = Math.floor(Math.random() * 100) + 1;
console.log(r1 >= 50);

console.log("\n--------TASK2--------\n");

let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;
let random3 = Math.floor(Math.random() * 3) + 1;

if (random1 === random2 && random2 === random3) {
  console.log("TRIPLE MATCH");
} else if (random1 === random2 || random2 === random3 || random1 === random3) {
  console.log("DOUBLE MATCH");
} else {
  console.log("NO MATCH");
}

console.log("\n--------TASK3--------\n");

function hasA(string) {
  return /[aA]/.test(string);
  // Option 2
  //   return string.includes("A") || string.includes("a");
}
console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

console.log("\n--------TASK4--------\n");

function doubleOrTripleWord(string) {
  if (string.length % 2 === 0) {
    return string + string + string;
  } else {
    return string + string;
  }
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));
console.log(doubleOrTripleWord(2));

console.log("\n--------TASK5--------\n");

function firstWord(string) {
  return string.split(" ")[0];
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like Javascript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));

console.log("\n--------TASK6--------\n");

function lastWord(string) {
  return string.split(" ").at(-1);
}
console.log(lastWord("Hello World"));
console.log(lastWord("I like Javascript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));

console.log("\n--------TASK7--------\n");

function firstlastWord(string) {
  let words = string.split(" ");
  return words[0] + words.at(-1);
}
console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like Javascript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord(" "));

console.log("\n--------TASK8--------\n");

function startVowel(string) {
  let firstChar = string.toLowerCase().split("")[0];
  return (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  );
  // option 2
  //   return /^[aeiouAEIOU]/.test(string);

  // option 3
  // const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // return vowels.includes(string.charAt(0));
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));

console.log("\n--------TASK9--------\n");

function swap4(string) {
  if (string.length < 8) return "";
  return string.slice(-4) + string.slice(4, -4) + string.slice(0, 4);
}
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));
console.log(swap4("12345678910"));

console.log("\n--------TASK10--------\n");

function swapFirstLastWord(string) {
  // OPTION 1
  let separateWords = string.split(" "); // [ 'I', 'like', 'JavaScript']
  let tempWord = separateWords[0]; // 'I'
  separateWords[0] = separateWords[separateWords.length - 1]; // 'I' -> 'JavaScript'
  separateWords[separateWords.length - 1] = tempWord; // 'JavaScript' -> 'I

  if (
    separateWords.length >= 2 &&
    separateWords[0] !== "" &&
    separateWords[separateWords.length - 1] !== ""
  ) {
    return separateWords.join(" "); // [ 'JavaScript', 'like', 'I'] -> 'JavaScript like I'
  } else {
    return "";
  }

  // OPTION 2
  //   if (
  //     string.split(" ").length >= 2 &&
  //     string.split(" ")[0] !== "" &&
  //     string.split(" ")[string.split(" ").length - 1] !== ""
  //   ) {
  //     return (
  //       string.slice(string.lastIndexOf(" ")) +
  //       string.slice(string.indexOf(" "), string.lastIndexOf(" ")) +
  //       " " +
  //       string.slice(0, string.indexOf(" "))
  //     );
  //   } else {
  //     return "";
  //   }
}
console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello "));
