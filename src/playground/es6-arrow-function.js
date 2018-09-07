const square = function (x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9  ));

// Challenge - Use arrow functions
// getFirstName ('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const fullName = 'Luna Campos';

// if (fullName) {
//   firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Luna Campos'));
