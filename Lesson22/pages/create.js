// Create user page
// On submit: send a POST request to https://dummyjson.com/users/add
// with a JSON body ({ firstName, lastName }) and the header 'Content-Type: application/json'.
// Show the created user (response) or an error in #statusMessage.
const createUserForm = document.getElementById('createUserForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

const statusMessage = document.getElementById('statusMessage');

createUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // TODO: Trim inputs and validate them
  fetch('https://dummyjson.com/users/addaa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed creating a user, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      statusMessage.textContent = `User is created successfully. First name: ${data.firstName}; last name: ${data.lastName}; id: ${data.id}`;
      statusMessage.classList.remove('hidden');
    })
    .catch((error) => {
      statusMessage.textContent = `An error occured when creating a user.`;
      statusMessage.classList.remove('hidden');
      console.error(error);
    });
});
