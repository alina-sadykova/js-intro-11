console.log("\n--------TASK1--------\n");
/*
Write a function named as console.log(older30() which takes an array of 
user objects as an argument and returns the count of users who are older than 30 when invoked.
*/
function older30(arr) {
  let countOfUsers = 0;
  arr.forEach((user) => {
    if (user.age > 30) countOfUsers++;
  });
  return countOfUsers;
}
console.log(
  older30([
    {
      firstName: "Tech",
      lastName: "Global",
      email: "tech.global@techglobal.com",
      age: 3,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      age: 30,
    },
  ])
); //-> 0

console.log(
  older30([
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 47,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      age: 30,
    },
    {
      firstName: "Alex",
      lastName: "Smith",
      email: "alexsmith@outlook.com",
      age: 32,
    },
  ])
); //-> 2

console.log(
  older30([
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 31,
    },
    {
      firstName: "Alex",
      lastName: "Smith",
      email: "alexsmith@outlook.com",
      age: 32,
    },
  ])
); //-> 2

console.log("\n--------TASK2--------\n");
/*
Write a function named as averageAge() which takes an 
array of user objects as an argument and returns the average age of users when invoked.
*/
function averageAge(users) {
  let averageAge = 0;
  users.forEach((user) => {
    averageAge += user.age / users.length;
  });
  return averageAge;
}
console.log(
  averageAge([
    {
      firstName: "Tech",
      lastName: "Global",
      email: "tech.global@techglobal.com",
      age: 4,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      age: 30,
    },
  ])
); //-> 17

console.log(
  averageAge([
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 46,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      age: 30,
    },
    {
      firstName: "Alex",
      lastName: "Smith",
      email: "alexsmith@outlook.com",
      age: 32,
    },
  ])
); //-> 36

console.log(
  averageAge([
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 31,
    },
    {
      firstName: "Alex",
      lastName: "Smith",
      email: "alexsmith@outlook.com",
      age: 32,
    },
  ])
); //-> 31.5

console.log("\n--------TASK3--------\n");
/*
Write a function named getProductBrands() which takes an object as 
an argument and returns an array of product brands from the items array within the given object when invoked.

NOTE: If the items array is empty, then return empty array.
*/

function getProductBrands(product) {
  return product.items.map((el) => el.specifications.brand);
}
console.log(
  getProductBrands({
    userId: 12345,
    items: [],
  })
); //-> []

console.log(
  getProductBrands({
    userId: 12345,
    items: [
      {
        productId: 1,
        productName: "Smart Watch",
        price: 199.0,
        quantity: 1,
        specifications: {
          brand: "Samsung",
          model: "Galaxy Watch 4",
          color: "Black",
        },
      },
    ],
  })
); //-> ['Samsung']

console.log(
  getProductBrands({
    userId: 12345,
    items: [
      {
        productId: 1,
        productName: "Camera",
        price: 699.0,
        quantity: 1,
        specifications: {
          brand: "Canon",
          resolution: "24MP",
          type: "DSLR",
        },
      },
      {
        productId: 2,
        productName: "Drone",
        price: 799.0,
        quantity: 1,
        specifications: {
          brand: "DJI",
          camera: "4K",
          "flight time": "30 minutes",
        },
      },
    ],
  })
); //-> ['Canon', 'DJI']

console.log("\n--------TASK4--------\n");
/*Write a function named as mostAffordable() which takes an object as 
an argument and returns the most affordable product name from the items 
array within the given object when invoked.

NOTE: The total price should be calculated by multiplying the price of 
each item by its quantity and summing up all the individual prices. 
If the items array is empty, then return zero.
*/
function mostAffordable(products) {
  console.log(
    products.items.reduce((prevVal, currVal) => {
      console.log(prevVal);
    })
  );
  //   products.items.reduce((acc, curr) => {
  //     console.log(acc);
  //   });
}
console.log(
  mostAffordable({
    userId: 12345,
    items: [],
  })
); //-> undefined

console.log(
  mostAffordable({
    userId: 12345,
    items: [
      {
        productId: 1,
        productName: "Smart Watch",
        price: 199.0,
        quantity: 1,
        specifications: {
          brand: "Samsung",
          model: "Galaxy Watch 4",
          color: "Black",
        },
      },
    ],
  })
); //-> 'Smart Watch'

console.log(
  mostAffordable({
    userId: 12345,
    items: [
      {
        productId: 1,
        productName: "Camera",
        price: 699.0,
        quantity: 1,
        specifications: {
          brand: "Canon",
          resolution: "24MP",
          type: "DSLR",
        },
      },
      {
        productId: 2,
        productName: "Drone",
        price: 799.0,
        quantity: 1,
        specifications: {
          brand: "DJI",
          camera: "4K",
          "flight time": "30 minutes",
        },
      },
      {
        productId: 3,
        productName: "Smart Speaker",
        price: 129.0,
        quantity: 2,
        specifications: {
          brand: "Amazon",
          "voice assistant": "Alexa",
          connectivity: "Wi-Fi",
        },
      },
    ],
  })
); //->  'Smart Speaker'
