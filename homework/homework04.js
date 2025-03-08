console.log("\n--------TASK1--------\n");
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

console.log("\n--------TASK2--------\n");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log("\n--------TASK3--------\n");
for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

console.log("\n--------TASK4--------\n");
for (let i = 0; i <= 7; i++) {
  console.log(`The square of ${i} is ${i * i}`);
}

console.log("\n--------TASK5--------\n");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

console.log("\n--------TASK6--------\n");
let r = Math.floor(Math.random() * 10) + 1;
let factorial = 1;
for (let i = r; i >= 1; i--) {
  factorial *= i;
}
console.log(`Factorial of number ${r} is ${factorial}`);

console.log("\n--------TASK7--------\n");
let randomNumber = 0;
let attempts = 0;
let pluralAttempts = "attempt";
do {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts++;
} while (randomNumber % 5 !== 0);
if (attempts > 1) pluralAttempts = "attempts";
console.log(
  `The random number is ${randomNumber} and it took ${attempts} ${pluralAttempts} to generate it.`
);

console.log("\n--------TASK8--------\n");
let countries = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(countries);
console.log(countries.sort());

console.log("\n--------TASK9--------\n");
let cartoonDogs = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];
console.log(cartoonDogs);

let hasPluto = false;
for (let i = 0; i < cartoonDogs.length; i++) {
  if (cartoonDogs[i] === "Pluto") hasPluto = true;
  // // OPTION 2
  // if (cartoonDogs[i].includes("Pluto")) hasPluto = true;
}
// // OPTION 3 - for of
// for (let dog of cartoonDogs) {
//   if (dog === "Pluto") hasPluto = true;
// }

// // OPTION 4

console.log(hasPluto);

console.log("\n--------TASK10--------\n");
let cartoonCats = ["Garfield", "Tom", "Sylvester", "Azrael"];
console.log(cartoonCats.sort());

let hasGarfieldAndFelix;
for (let i = 0; i < cartoonCats.length; i++) {
  cartoonCats[i] === "Garfield" && cartoonCats[i] === "Felix"
    ? (hasGarfieldAndFelix = true)
    : (hasGarfieldAndFelix = false);

  // // OPTION 2
  // cartoonCats[i].includes("Garfield") && cartoonCats[i].includes("Felix")
  //   ? (hasGarfieldAndFelix = true)
  //   : (hasGarfieldAndFelix = false);
}

// OPTION 3 - for of
for (let cat of cartoonCats) {
  cat === "Garfield" && cat === "Felix"
    ? (hasGarfieldAndFelix = true)
    : (hasGarfieldAndFelix = false);
}
console.log(hasGarfieldAndFelix);

console.log("\n--------TASK11--------\n");
let numbers = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// // OPTION 2 - for of
// for (let number of numbers) {
//   console.log(number);
// }

console.log("\n--------TASK12--------\n");
let objects = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
console.log(objects);

let elementsStartsWithBorP = 0;
let elementsHasBookOrPen = 0;
for (let i = 0; i < objects.length; i++) {
  if (
    objects[i].toUpperCase().startsWith("B") ||
    objects[i].toUpperCase().startsWith("P")
  )
    elementsStartsWithBorP++;
  if (
    objects[i].toLowerCase().includes("book") ||
    objects[i].toLowerCase().includes("pen")
  )
    elementsHasBookOrPen++;
}
console.log(`Element starting with 'B' or 'P' = ${elementsStartsWithBorP}`);
console.log(`Element having 'book' or 'pen' = ${elementsHasBookOrPen}`);

console.log("\n--------TASK13--------\n");
let listOfNumbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(listOfNumbers);

let numberMoreThanTen = 0;
let numberLessThanTen = 0;
let numberEqualTen = 0;
for (let i = 0; i < listOfNumbers.length; i++) {
  if (listOfNumbers[i] > 10) numberMoreThanTen++;
  else if (listOfNumbers[i] < 10) numberLessThanTen++;
  else numberEqualTen++;
}
console.log(`Elements that are more than 10 = ${numberMoreThanTen}`);
console.log(`Elements that are less than 10 = ${numberLessThanTen}`);
console.log(`Elements that are 10 = ${numberEqualTen}`);

console.log("\n--------TASK14--------\n");
let firstArray = [5, 8, 13, 1, 2];
let secondArray = [9, 3, 67, 1, 0];
let thirdArray = [];
for (let i = 0; i < firstArray.length; i++) {
  for (let j = 0; j < secondArray.length; j++) {
    if (firstArray[i] > secondArray[i]) {
      thirdArray.push(firstArray[i]);
      break;
    } else {
      thirdArray.push(secondArray[i]);
      break;
    }
  }
}
console.log(`1st array is = ${firstArray}`);
console.log(`2nd array is = ${secondArray}`);
console.log(`3rd array is = ${thirdArray}`);

console.log("\n--------TASK15--------\n");
const firstDuplicate = (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j]) {
        return items[i];
      }
    }
  }
  return -1;
};

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

console.log("\n--------TASK16--------\n");
const getDuplicates = (items) => {
  let listOfDuplicates = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j] && !listOfDuplicates.includes(items[i])) {
        listOfDuplicates.push(items[i]);
      }
    }
  }
  return listOfDuplicates;
};
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

console.log("\n--------TASK17--------\n");
const reverseStringWords = (item) => {
  let reversedText = "";
  let singleValue = item.trim().split(" ").reverse().join(" ");
  for (let i = singleValue.length - 1; i >= 0; i--) {
    reversedText += singleValue[i];
  }
  return reversedText;
};
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

console.log("\n--------TASK18--------\n");
const getEvens = (num1, num2) => {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let listOfNumbers = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      listOfNumbers.push(i);
    }
  }
  return listOfNumbers;
};
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

console.log("\n--------TASK19--------\n");
const getMultipleOf5 = (num1, num2) => {
  let listOfNumbers = [];

  // OPTION 1
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  for (let i = min; i <= max; i++) {
    if (i % 5 === 0) {
      listOfNumbers.push(i);
    }
  }
  return num1 > num2 ? listOfNumbers.reverse() : listOfNumbers;

  // OPTION 2
  // if (num1 > num2) {
  //   for (let i = num1; i >= num2; i--) {
  //     if (i % 5 === 0) {
  //       listOfNumbers.push(i);
  //     }
  //   }
  // } else if (num1 < num2) {
  //   for (let i = num1; i <= num2; i++) {
  //     if (i % 5 === 0) {
  //       listOfNumbers.push(i);
  //     }
  //   }
  // } else {
  //   listOfNumbers.push(num1);
  // }

  // return listOfNumbers;
};
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

console.log("\n--------TASK20--------\n");
const fizzBuzz = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let newValue = [];
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newValue.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newValue.push("Fizz");
    } else if (i % 5 === 0) {
      newValue.push("Buzz");
    } else {
      newValue.push(i);
    }
  }
  if (newValue.length > 1) return newValue.join(" | ");
  else return newValue.join();
};
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));
