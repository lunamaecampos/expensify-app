var nameVar = "Luna";
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
  var petName = 'Hal';
  return petName;
}
getPetName();

// Block Scoping

const fullName = 'Luna Campos';
let  firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
