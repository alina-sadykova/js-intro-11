const vehicle = {
  move: function () {
    console.log("MOVE");
  },
};

const suv = {
  __proto__: vehicle,
  drive: function () {
    console.log("SUV DRIVE");
  },
};

const myHonda = {
  __proto__: suv,
  electricCharge: true,
};

console.log(myHonda.electricCharge);
myHonda.drive();
myHonda.move();

// Prototype chaining
console.log(myHonda.__proto__); // { drive: [Function: drive] }
console.log(myHonda.__proto__.__proto__); // { move: [Function: move] }
console.log(myHonda.__proto__.__proto__.__proto__); // [Object: null prototype] {}
console.log(myHonda.__proto__.__proto__.__proto__.__proto__); // null
console.log(suv.__proto__); // { move: [Function: move] }

const date = new Date();
console.log(date.__proto__); // {}
