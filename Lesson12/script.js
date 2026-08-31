/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.

const firstNumber = 5;
const secondNumber = 3;

console.log('Ex. 1. The sum is:', firstNumber + secondNumber);

// 2. Declare variables learnerName and learnerAge. Log a greeting: "Hello! I am (learnerName) and I am (learnerAge) years old."
const learnerName = 'Ece';
const learnerAge = '30';

// String concation (using + operator)
console.log(
  'Ex.2. Hello! I am ' +
    learnerName +
    ' and I am ' +
    learnerAge +
    ' years old.',
);
// String interpolation (using `` and variables ${})
console.log(
  `Ex. 2. Hello! I am ${learnerName} and I am ${learnerAge} years old.`,
);

// 3. Declare variables leftIntegerOperand=10 and rightIntegerOperand=4. Log the result of leftIntegerOperand-rightIntegerOperand,
// leftIntegerOperand*rightIntegerOperand, and leftIntegerOperand/rightIntegerOperand.
// CODE HERE

let leftIntegerOperand = 10;
let rightIntegerOperand = 4;
console.log(
  "Ex.3. 'the result of 'leftIntegerOperand minus rightIntegerOperandn is'",
  leftIntegerOperand - rightIntegerOperand,
);
console.log(
  "Ex.3. 'the result of 'leftIntegerOperand * rightIntegerOperandn is'",
  leftIntegerOperand * rightIntegerOperand,
);
console.log(
  "Ex.3. 'the result of 'leftIntegerOperand / rightIntegerOperandn is'",
  leftIntegerOperand / rightIntegerOperand,
);

// 4. Use template literals to log: "My name is (learnerName). I like JS." (reuse learnerName from exercise 2, or declare it again with the same value for a standalone answer).
// CODE HERE
console.log('Ex. 4', `My name is ${learnerName}. I like JS.`);

// 5. Declare a string secretPasswordString  "securePass". Log the length of secretPasswordString.
// CODE HERE
const secretPasswordString = 'securePass';
console.log('Ex. 5', secretPasswordString.length);

// const myObject = {
//   name: 'My object',
//   length: 5,
//   depth: 10,
//   width: 20
// }

// // dot notaion
// console.log(myObject.name)

// 6. Assign "hello world" to lowercasePhrase, convert lowercasePhrase to uppercase, and log the result.
// CODE HERE

const lowercasePhrase = 'hello world';

console.log(
  `Ex.6. uppercase version of this text is ${lowercasePhrase.toUpperCase()}`,
);

// 7. Declare helloToken = "Hello" and worldToken = "World". Concatenate them with a space in between and log the result.
const helloToken = 'Hello';
const worldToken = 'World';
console.log(`Ex.7 ${helloToken} ${worldToken}`);
console.log(helloToken.concat(' ', worldToken));

// 8. Declare sampleNumberForTypeof = 42. Log the type of sampleNumberForTypeof using typeof.
// CODE HERE
const sampleNumberForTypeof = 42;
console.log(
  'Ex. 8. The type of sampleNumberForTypeof is',
  typeof sampleNumberForTypeof,
);

// 9. Declare numericValue = 100, convert numericValue to a string, and log the result.
// CODE HERE
const numericValue = 100;
console.log(`Ex. 9. ${String(numericValue)}`);
console.log('Ex 9.1', numericValue + '');
console.log('Ex 9.2', `${numericValue}`);
console.log('Ex 9.3', numericValue.toString());

// 10. Declare stringFiftySource = "50", convert it to a number into parsedNumberFifty, and log the type of parsedNumberFifty to confirm the conversion.
// CODE HERE
const stringFiftySource = '50';
const parsedNumberFifty = parseInt(stringFiftySource);
console.log(
  `EX. 10. original type: ${typeof stringFiftySource}, result type:${typeof parsedNumberFifty} `,
);
// 11. Declare randomNumber as a random integer between 0 and 10 (inclusive) and log it.
// CODE HERE

const randomNumber = Math.floor(Math.random() * 11);
// 0 - 0.99999999
// 0 - 10.999..

// Math.floor(Math.random() * (upperLimit + 1 - lowerLimit)) + lowerLimit;

console.log('ex 11. ' + randomNumber);
// 12. Declare decimalToFloor=3.7 and decimalToCeil=3.2. Round decimalToFloor down using Math.floor and decimalToCeil up using Math.ceil; log both results.
const decimalToFloor = 3.7;
const decimalToCeil = 3.2;

console.log('Ex.12. Math.floor  of 3.7' + Math.floor(decimalToFloor));
console.log('Ex.12.1 Math.ceil of 3.2' + Math.ceil(decimalToCeil));

// 13. Declare a boolean variable enrolledInCourse = true. Log it.
// CODE HERE

const enrolledInCourse = true;
console.log('Ex.13', enrolledInCourse);

// 14. Initialize ticketCounter = 0, then increment it by 1 using ticketCounter++ and log ticketCounter.
// CODE HERE
let ticketCounter = 0;
console.log(`Ex.14.1 ${ticketCounter++}`);
console.log(`Ex.14.2 ${ticketCounter}`);
// 15. Initialize gameScorePoints = 10, add 5 to it using gameScorePoints += 5, then log gameScorePoints.
// CODE HERE

// 16. Declare residentName="Alice", residentAge=30, residentCity="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE

// 17. Declare variables bundlePartOne=5, bundlePartTwo=10, bundlePartThree=15. Log their total sum.
// CODE HERE

// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
// CODE HERE

// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
// CODE HERE

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
// CODE HERE

// 21. Log the value of Math.PI.
// CODE HERE

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// CODE HERE

// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
// CODE HERE

// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
// CODE HERE

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// CODE HERE

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// CODE HERE
