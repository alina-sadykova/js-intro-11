/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.

-> "TechTechTech" 
-> "AppleApple”
-> ""
->""
-> "11"
-> "222222"
*/
console.log("\n--------TASK1--------\n");

function doubleOrTripleWord(str) {
  if (str.length % 2 !== 0) return str + str;
  else return str + str + str;
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as 
an argument and returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
-> "HelloWorld" 
-> "IJavaScript” 
-> "HelloHello"
-> ""
-> ""
*/
console.log("\n--------TASK2--------\n");

function firstlastWord(word) {
  if (word.length >= 1) {
    return word.split(" ")[0] + word.split(" ").at(-1);
  } else {
    return "";
  }

  // --- OPTION 2
  if (word.length >= 1) {
    return (
      word.slice(0, word.indexOf(" ")) + word.slice(word.lastIndexOf(" ") + 1)
    );
  } else {
    return "";
  }
}
console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));

/*
Write a function named hasVowel() which takes a string argument 
and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
console.log("\n--------TASK3--------\n");

function hasVowel(str) {
  const vowels = ["a", "e", "o", "u", "i"];
  const arrayOfChars = str.toLowerCase().split("");
  let hasVowel = false;
  arrayOfChars.forEach((char) => {
    if (vowels.includes(char)) hasVowel = true;
  });
  return hasVowel;

  // --- OPTION 2
  if (/[a,e,o,u,i]/.test(str.toLowerCase())) return true;
  else return false;
}
console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

/*
Write a function named as startVowel() which takes a string 
word as an argument and returns true if given string starts with a vowel, 
and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
-> false 
-> true
-> true
-> false
-> false 
-> false
*/
console.log("\n--------TASK4--------\n");

function startVowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowels.includes(str[0])) return true;
  else return false;

  // --- OPTION 2
  if (/[a,e,i,o,u,A,E,I,O,U]/.test(str[0])) return true;
  else return false;
}
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));
