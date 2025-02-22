/**
 * @param {*} char must be a single character
 * @returns true if a single character is a digit
 * @returns false if multiple characters provided
 */
function isDigit(char) {
  return /^\d$/.test(char);
  // Other ways:
  //   return /[0-9]/.test(char);
  //   let charCode = char.charCodeAt(0);
  //   return charCode >= 48 && charCode <= 57;
}

function isLowerCase(char) {
  return /^[a-z]$/.test(char);
}

function isUpperCase(char) {
  return /^[A-Z]$/.test(char);
}

function isLetter(char) {
  return isLowerCase(char) || isUpperCase(char);
  //   return /^[A-Za-z]+$/.test(char);
}

function isSpace(char) {
  return char === " ";
  //   return /\s/.test(char);
}

function isDigitOrLetter(char) {
  return isDigit(char) || isLetter(char);
  //   return /^[a-zA-Z0-9]$/.test(char);
}

function isSpecial(char) {
  return !isSpace(char) && !isDigitOrLetter(char);
  //   return /^[^a-zA-Z0-9 ]$/.test(char);
}

function isVowel(char) {
  return isLetter(char) && !isSpace(char)
    ? /^[a,e,i,u,o]$/i.test(char)
    : "NOT A LETTER";
}

module.exports.CharacterHelper = {
  isDigit,
  isLowerCase,
  isUpperCase,
  isLetter,
  isSpace,
  isDigitOrLetter,
  isSpecial,
  isVowel,
};
