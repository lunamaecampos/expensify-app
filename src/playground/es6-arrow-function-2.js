// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55,1, 1001));

// this keyword - no longer bound with arrow functions

const user = {
  name: 'Luna',
  cities: ['Los Angeles', 'San Francisco', 'Orange'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());


//Challenge area

const multiplier = {
  // numbers - array of numbers
  // multiplierBy - single number
  //multiply - return a new array where the numbers have been multiplied
  numbers: [10, 20, 30],
  multiplierBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplierBy * number);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
