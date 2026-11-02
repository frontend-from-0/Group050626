const image = document.getElementById('random-image');
document.getElementById('fetch-button').addEventListener('click', () => {
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
      
      image.setAttribute('src', data.urls.regular);
      image.setAttribute('alt', data.alt_description)

    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
