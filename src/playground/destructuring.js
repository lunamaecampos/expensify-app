//
// const person = {
//   name: 'Luna',
//   age: 25,
//   location: {
//     city: 'los angeles',
//     temp: 92
//   }
// }
//
// const { name:firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
// const { name: publisherName = 'Self-Published'} = book.publisher
//
// console.log(publisherName);

const address = ['1209 Juniper St', 'Los Angeles', 'California', '90027'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
