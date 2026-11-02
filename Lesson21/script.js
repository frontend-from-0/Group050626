/* Json - JavaScript Object Notation
- JSON is a lightweight data interchange format.
- It is often used to transmit data between a server and a web application.
- JSON data is represented as key-value pairs, similar to JavaScript objects.
*/

/* Asyncronous programming
- Asynchronous operations do not block the execution and allow other tasks to run concurrently.

Callbacks:
   - Callbacks are a common way to handle asynchronous operations in JavaScript.
   - A callback function is passed as an argument to another function and gets invoked when the operation completes.

   function greet() {
    const name = getUserName();
    return name + ' hi';
   }

Promises:
   - Promises provide an alternative to callbacks for handling asynchronous operations.
   - A promise represents the eventual completion or failure of an asynchronous operation.
   - Promises can be chained and allow for a more readable code structure.

Async/Await:
   - Async/await is a modern syntax introduced in ES2017 for writing asynchronous code in a more synchronous style.
   - Async functions return a promise and can use the `await` keyword to pause the execution until a promise settles.
*/

/* AJAX (Asynchronous JavaScript and XML)
- AJAX is a technique for updating parts of a web page without requiring a full page reload.
- It allows for asynchronous communication between the client and server.
*/

/* API requests: Fetch API
The Fetch API is a modern JavaScript API that provides an interface for making network requests, typically for retrieving resources from a server. It offers a more powerful and flexible alternative to the older XMLHttpRequest (XHR) object for making HTTP requests.


Example requests

HTTPS methods: 
- GET (to request data)
- POST (to send data)
- UPDATE
- DELETE

GET request
fetch('https://api.example.com/data?name=John&surname=Doe')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const requestData = {
  name: 'John',
  age: 25
};


POST request
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' - Required in POST and PUT requests to specify the format of the data that is being sent
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


*/

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// Same code using AJAX
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/posts`;

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.log('Error:', xhr.status, xhr.statusText);
    }
  }
};

xhr.open('GET', url, true);
xhr.send();
