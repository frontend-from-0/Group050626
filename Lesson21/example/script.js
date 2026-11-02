const button = document.getElementById('fetch-button');
const image = document.getElementById('random-image');

const BASE_URL = 'https://api.unsplash.com';
const RANDOM_IMAGE_ENDPOINT = '/photos/random';
const AUTH_PARAM = `client_id=${UNSPLASH_API}`;

function fetchData() {

  fetch(BASE_URL + RANDOM_IMAGE_ENDPOINT + `?${AUTH_PARAM}&orientation=portrait&collection=5AIZ9tmhr9A`)
    .then((response) => {
      
      if (!response.ok) {
        throw new Error(
          'An error occured when fetching an image',
          response.statusText,
        );
      }
     return response.json();
    })
    .then((imageData) => {
      console.log('Received image data', imageData);
      image.setAttribute('src', imageData.urls.regular);
      image.setAttribute('alt', imageData.alt_description);
    })
    .catch((error) =>
      console.error(error),
    );
}

button.addEventListener('click', fetchData);
