// First version written in class: request in a plain script (run in the browser console / via a <script> tag).
// Paste your key locally only — never commit a real key (the historical file had one hard-coded).
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';

fetch('https://api.unsplash.com/photos/random', {
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
})
  .then((response) => {
    console.log('Response', response);
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
