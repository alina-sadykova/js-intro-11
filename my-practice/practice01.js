/*
Given an "out" string length 4, such as "<<>>", and a word, 
return a new string where the word is in the middle of the out 
string, e.g. "<<word>>". Note: use str.substring(i, j) to extract 
the String starting at index i and going up to but not including 
index j.

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"

*/
function makeOutWord(str1, str2) {
  let firstHalf = str1.slice(0, 2);
  let secondHalf = str1.slice(-2);
  return firstHalf + str2 + secondHalf;
}
console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));

/*

Given a string of even length, return the first half. 
So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/
function firstHalf(string) {
  let secondHalf = string.length / 2;
  let firstHalf = string.slice(0, secondHalf);
  return firstHalf;
}
console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));

/*
Given 2 strings, return their concatenation, 
except omit the first char of each. The strings will 
be at least length 1.

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/

const nonStart = (str1, str2) => str1.slice(1).concat(str2.slice(1));

console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));

/*
Given a string, return a string length 1 from its front, 
unless front is false, in which case return a string length 1 
from its back. The string will be non-empty.

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/
function theEnd(param1, param2) {
  if (param2) {
    return param1[0];
  } else {
    return param1.at(-1);
  }
}
console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("oh", true));

/*
Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/
const endsLy = (string) => string.endsWith("ly");

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));

/*
Given a string of odd length, return the string length 3 from 
its middle, so "Candy" yields "and". The string length will be at 
least 3.

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/
function middleThree(string) {
  let middleIndex = (string.length - 1) / 2;
  return `${string[middleIndex - 1]}${string[middleIndex]}${
    string[middleIndex + 1]
  }`;
}
console.log(middleThree("Candy"));
console.log(middleThree("and"));
console.log(middleThree("solving"));

/*
Given 2 strings, a and b, return a new string made of the first 
char of a and the last char of b, so "yo" and "java" yields "ya". 
If either string is length 0, use '@' for its missing char.

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/
function lastChars(str1, str2) {
  if (str1.length <= 0) {
    return "@" + str2.at(-1);
  } else if (str2.length <= 0) {
    return str1[0] + "@";
  } else {
    return str1[0] + str2.at(-1);
  }
}
console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));

/*
Given a string, if the string begins with "red" or "blue" return 
that color string, otherwise return the empty string.

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/
function seeColor(string) {
  if (string.startsWith("red")) {
    return "red";
  } else if (string.startsWith("blue")) {
    return "blue";
  } else {
    return "";
  }
}
console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));

/*
Given a string, return a new string made of 3 copies of the first 
2 chars of the original string. The string may be any length. 
If there are fewer than 2 chars, use whatever is there.

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/
function extraFront(string) {
  if (string.length > 1) {
    return string.slice(0, 2).concat(string.slice(0, 2), string.slice(0, 2));
  } else {
    return string.concat(string, string);
  }
}
console.log(extraFront("Hello"));
console.log(extraFront("ab"));
console.log(extraFront("H"));

/* ???????
Given a string and a second "word" string, we'll say that the word 
matches the string if it appears at the front of the string, except 
its first char does not need to match exactly. On a match, 
return the front of the string, or otherwise return the empty string. 
So, so with the string "hippo" the word "hi" returns "hi" and "xip" 
returns "hip". The word will be at least length 1.

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h"
*/

function startWord(word, string) {
  if (string.length >= 2 && word.slice(1, 3) === string.slice(1)) {
    return word[0].concat(string.slice(0));
  }
}
console.log(startWord("hippo", "hi"));
// console.log(startWord("hippo", "xip")); //hip
// console.log(startWord("hippo", "i")); //h
// console.log(startWord("hello", "h")); //h

/*
Given two strings, a and b, return the result of putting them 
together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/

function makeAbba(a, b) {
  return a + b + b + a;
}
console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));

/*
Given a string, return a new string made of 3 copies of the last 2 
chars of the original string. The string length will be at least 2.

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"
*/

function extraEnd(string) {
  return string
    .slice(-2, string.length)
    .concat(string.slice(-2, string.length), string.slice(-2, string.length));
}
console.log(extraEnd("Hello"));
console.log(extraEnd("ab"));

/*
Given a string, return a version without the first and last char, 
so "Hello" yields "ell". The string length will be at least 2.

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
*/
function withoutEnd(string) {
  return string.slice(1, string.length - 1);
}
console.log(withoutEnd("Hello"));
console.log(withoutEnd("java"));
console.log(withoutEnd("coding"));

/*
Given a string, return a "rotated left 2" version where the first 2 
chars are moved to the end. The string length will be at least 2.

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"
*/
function left2(string) {
  return string.slice(2) + string.slice(0, 2);
}
console.log(left2("Hello"));
console.log(left2("java"));
console.log(left2("Hi"));

let x = "abcd aa abcd";

console.log(">>>:", x.split("").join("."));

/*
Given a string, return a version without both the first and last 
char of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/
function withouEnd2(string) {
  return string.slice(1, -1);
}
console.log(withouEnd2("Hello"));
console.log(withouEnd2("abc"));
console.log(withouEnd2("ab"));

/*

Given a string and an int n, return a string made of the first 
and last n chars from the string. The string length will be at 
least n.

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/

function nTwice(string, int) {
  return string.slice(0, int) + string.slice(-int);
}
console.log(nTwice("Hello", 2));
console.log(nTwice("Chocolate", 3));
console.log(nTwice("Chocolate", 1));

/*
Given a string, return true if "bad" appears starting at index 0 
or 1 in the string, such as with "badxxx" or "xbadxx" but not 
"xxbadxx". The string may be any length, including 0. Note: 
use .equals() to compare 2 strings.

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/
const hasBad = (string) =>
  string.slice(0, 3) === "bad" || string.slice(1, 4) === "bad";

console.log(hasBad("badxx"));
console.log(hasBad("xbadxx"));
console.log(hasBad("xxbadxx"));

/*
Given two strings, append them together (known as "concatenation") 
and return the result. However, if the concatenation creates a 
double-char, then omit one of the chars, so "abc" and "cat" 
yields "abcat".

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/
const conCat = (str1, str2) => {
  if (str1.slice(-1) === str2[0]) {
    return str1.slice(0, -1).concat(str2);
  } else {
    return str1.concat(str2);
  }
};
console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));

/*
Given a string, return true if the first 2 chars in the string 
also appear at the end of the string, such as with "edited".

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/
const frontAgain = (str) => str.slice(0, 2) === str.slice(-2);

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));

/*
Given a string, if a length 2 substring appears at both its 
beginning and end, return a string without the substring at 
the beginning, so "HelloHe" yields "lloHe". The substring may 
overlap with itself, so "Hi" yields "". Otherwise, return the 
original string unchanged.

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/

function without2(str) {
  if (str.length > 2 && str.slice(0, 2) === str.slice(-2)) {
    return str.slice(2);
  } else if (str.length <= 2) {
    return "";
  } else {
    return str;
  }
}
console.log(without2("HelloHe"));
console.log(without2("HelloHi"));
console.log(without2("Hi"));

/*
Given a string, if the first or last chars are 'x', return the 
string without those 'x' chars, and otherwise return the string 
unchanged.

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi" 
*/

function withoutX(str) {
  if (str.length > 2 && str[0] === "x" && str.at(-1) === "x") {
    return str.slice(1, -1);
  } else if (str[0] === "x") {
    return str.slice(1);
  } else if (str.at(-1) === "x") {
    return str.slice(0, -1);
  } else {
    return str;
  }
}
console.log(withoutX("xHix"));
console.log(withoutX("xHi"));
console.log(withoutX("Hxix"));

/*
The web is built with HTML strings like "<i>Yay</i>" 
which draws Yay as italic text. In this example, the "i" tag 
makes <i> and </i> which surround the word "Yay". Given tag 
and word strings, create the HTML string with tags around the 
word, e.g. "<i>Yay</i>".

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/
function makeTags(str1, str2) {
  return `<${str1}>${str2}</${str1}>`;
}
console.log(makeTags("i", "Yay"));
console.log(makeTags("i", "Hello"));
console.log(makeTags("cite", "Yay"));

/*
Given a string, return the string made of its first two chars, 
so the String "Hello" yields "He". If the string is shorter 
than length 2, return whatever there is, so "X" yields "X", 
and the empty string "" yields the empty string "". Note that 
str.length() returns the length of a string.

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/
function firstTwo(string) {
  if (string.length < 2) {
    return string;
  } else {
    return string.slice(0, 2);
  }
}
console.log(firstTwo("Hello"));
console.log(firstTwo("abcdefg"));
console.log(firstTwo("a"));

/*
Given 2 strings, a and b, return a string of the form 
short+long+short, with the shorter string on the outside and 
the longer string on the inside. The strings will not be the 
same length, but they may be empty (length 0).

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/

function comboString(str1, str2) {
  if (str2.length < str1.length) {
    return str2.concat(str1, str2);
  } else {
    return str1.concat(str2, str1);
  }
}
console.log(comboString("Hello", "hi"));
console.log(comboString("hi", "Hello"));
console.log(comboString("aaa", "b"));
console.log(comboString("asas", ""));
