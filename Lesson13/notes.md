## Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation.

### Anonymos Function Declaration

function (parameter1, parameter2) {
return parameter1 \* parameter2;
};

### Named function:

function multiplyTwoNumbers (parameter1, parameter2) {
return parameter1 \* parameter2;
}
multiplyTwoNumbers(10, 40); // 400
multiplyTwoNumbers(1, 40); // 40

### Function Expression

const sumOfTwoNumbers = function (parameter1, parameter2) {
return parameter1 + parameter2;
};

sumOfTwoNumbers(10, 15);

### Arrow Function (introduced in ECMAScript 6 OR ES6)

Anonymus arrow function

() => {
console.log('Hello world');
};

### Single line arrow function experession

const greet = (name) => 'Hello '+ name;
greet('John');

### Multi line arrow function experession

const greet = () => {
return 'Hello world';
};

greet();

### IIFE (Immediately Invoked Function Expression)

(function multiplyTwoNumbers(parameter1, parameter2) {
console.log('Hello');
return parameter1 \* parameter2;
})();

## Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

### if Statement

if (condition) {

}

#### Same line if condition:

const today = 'Wednesday';
if (today === 'Wednesday') {
console.log('Join the lesson');
}

#### if ... else Statement

if (condtion) {
... some code
} else if (another condtion) {
... some code
} else if (another condtion) {
... some code
} else {
... some code
}


### Switch statement

switch (day) {
  case 'Monday':
    console.log('It\'s Monday');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
.... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
