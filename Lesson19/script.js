const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;

/**
 *
 *
 * 1. I (user) want write something in email input field, and see if the input is not correct.
 */

const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneErrorMsg = document.getElementById('phoneError');
const firstName = document.getElementById('firstname');
const firstNameErrorMsg = document.getElementById('firstNameError');
const lastName = document.getElementById('lastname');
const lastNameErrorMsg = document.getElementById('lastNameError');
const formElement = document.getElementById('checkoutForm');

let isFormValid = true;

function validateEmail() {
  const emailTrimmedValue = emailInput.value.trim();
  if (!emailPattern.test(emailTrimmedValue)) {
    emailErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    emailErrorMsg.classList.add('hidden');
  }
}

function validatePhone() {
  const phoneTrimmedValue = phoneInput.value.trim();

  if (!phonePattern.test(phoneTrimmedValue)) {
    phoneErrorMsg.classList.remove('hidden');
    isFormValid = false;
  } else {
    phoneErrorMsg.classList.add('hidden');
  }
}



function validateName(input, errorElement) {
  const trimmedValue = input.value.trim();
  if (trimmedValue.length < 2) {
    errorElement.textContent = 'The value should be at least 2 characters.';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent = 'The name should only contain letters.';
    errorElement.classList.remove('hidden');
    isFormValid = false;
  } else {
    errorElement.classList.add('hidden');
  }
}


emailInput.addEventListener('change', validateEmail);
phoneInput.addEventListener('change', validatePhone);
firstName.addEventListener('change', function () {
  validateName(firstName, firstNameErrorMsg);
});

lastName.addEventListener('change', function () {
  validateName(lastName, lastNameErrorMsg);
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  validateEmail();
  validatePhone();
  validateName(firstName, firstNameErrorMsg);
  validateName(lastName, lastNameErrorMsg);

  if (isFormValid) {
    // remove hidden class from success element
  }
});
