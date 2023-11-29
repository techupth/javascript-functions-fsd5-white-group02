// Start coding here
let calculator = [
  {
    add: function add(a, b) {
      const result = a + b;
      return result;
    },
  },
  { subtract: function subtract(a, b) {} },

  { multiply: function multiply(a, b) {} },

  {
    divide: function divide(a, b) {
      const result = a / b;
      return result;
    },
  },
];
let addResult = calculator[0].add(10, 20);
let divideResult = calculator[3].divide(3000, 10);
console.log(addResult);
console.log(divideResult);
