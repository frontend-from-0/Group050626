// Keywords in JS: const, let, var, true, false, undefined

// Variable that does not change
const firstName = 'Anna';

// Variable that can change
let age = 30;

// Old keyword, similar to let
var oldVariableKeyword = 'Do use!!!';

console.log(`Hello world! I'm using backticks`);

const isAdmin = false;

// Values of something is now undefined 
let something;


console.log('This is something:', something);



const myRandomCollection = [undefined, null, 'hello', 123, true, false];


console.log('Person 1 is: ', firstName, age, isAdmin);

// key : value
const person = {
  name: 'Jane',
  age: 25,
  isAdmin: false,
  address: {
    line1: 'Some street 3',
    city: 'Gothenburg',
    country: 'Sweden'
  }
}

console.log('Name of the first person', person.name); // Name of the first person Jane

const person2 = {
  name: 'John',
  age: 20,
  isAdmin: false,
}



const myNumberCollection = [1, 2, 5, 23, 10, 123];
/* 
0 - 1
1 - 2
2 - 5
3 - 23
4 - 10
5 - 123
*/
