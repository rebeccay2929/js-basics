// console.log('Hello World :)');
// // let name = 'Bex';
// // let age = '20';
// // let isApproved = true;
// // let firstName = undefined;
// // let selectedColor = null;


// let person = {
//     name:'bex',
//     age: '20'
// };


// person.name = 'Jo';

// console.log (person);
 
// let selectedColor = ['red', 'blue' ];
// selectedColor[2]= 1;
// console.log (selectedColor.length);


// function greet(name, lastName) {
//     console.log('hi there ' + name + ' ' + lastName);
// }

// greet('Anna', 'Fields');


// function square(number) {
//     return number * number
// };


// console.log(square(2));






// const getFileXten = (str) => str.slice (str.lastIndexOf('.'));

const replaceChar = (str) => 
str.split("").map(char => String.fromCharCode(char.charCodeAt (0) + 1)).join('');
console.log(replaceChar('abcd'));

