// Update user page: ./pages/update.html?userId=1
// 1. Read userId from the URL (URLSearchParams).
// 2. GET https://dummyjson.com/users/{userId} and pre-fill the form.
// 3. On submit: send a PUT (or PATCH) request with the new data and show the result in #statusMessage.

console.log(window);

const searchUrl = window.location.search;
const searchParams = new URLSearchParams(searchUrl);
const userId = searchParams.get('userId');

if (!userId) {
  // redirect the user to home page
  console.log('Not sure what user to update!!!');
}


fetch(`https://dummyjson.com/users/${userId}`).then(res => res.json()).then(console.log);