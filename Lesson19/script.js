//Variables for regEx patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;


//Variables
const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('emailError');
const form = document.getElementById('checkoutForm');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');

const cardnumber = document.getElementById("cardnumber");
const cardError = document.getElementById("cardError")

let formValid = true;

function validateEmail(value) {
  const trimmedValue = value.trim();
  if (!emailPattern.test(trimmedValue)) {
    errorEmail.textContent = 'Please provide a valid mail address.';
    emailError.classList.remove('hidden');
    formValid = false;
  } else {
    emailError.classList.add('hidden');
  }
}

function validatePhone(value) {
  const trimmedValue = value.trim();
  if (!phonePattern.test(trimmedValue)) {
    phoneError.textContent = 'Please provide a valid phone number';
    phoneError.classList.remove('hidden');
    formValid = false;
  } else {
    phoneError.classList.add('hidden');
  }
}

function validateName(value, errorElement) {
  const trimmedValue = value.trim();
  if (trimmedValue.length < 1) {
    errorElement.textContent = 'The value is required';
    errorElement.classList.remove('hidden');
    formValid = false;
  } else if (!namePattern.test(trimmedValue)) {
    errorElement.textContent =
      'The value should be at least 2 characters and contain letters. It can contain spaces and dashes but only in the middle of the name.';
    errorElement.classList.remove('hidden');
    formValid = false;
  } else {
    errorElement.classList.add('hidden');
  }
}

function validateCard (value){
    const trimmedValue = value.trim();
    if (trimmedValue.length < 1){
      cardError.textContent = "This value is required";
      cardError.classList.remove("hidden");
      formValid = false;
    } else if (!cardNumberPattern.test(trimmedValue)){
      cardError.textContent = "Card number should match the following format: 5123 4500 0000 0008";
      cardError.classList.remove("hidden");
      formValid = false;
    } else {
      cardError.classList.add("hidden");

    }
}

emailInput.addEventListener('blur', () => validateEmail(emailInput.value));
phoneInput.addEventListener('blur', () => validatePhone(phoneInput.value));
firstName.addEventListener('blur', () =>
  validateName(firstName.value, firstNameError),
);
lastName.addEventListener('blur', () =>
  validateName(lastName.value, lastNameError),
);

cardnumber.addEventListener("blur", () => validateCard(cardnumber.value));

form.addEventListener('submit', function (event) {
  event.preventDefault();

  validateEmail(emailInput.value);
  validatePhone(phoneInput.value);
  validateName(firstName.value, firstNameError);
  validateName(lastName.value, lastNameError);
  validateCard(cardnumber.value);


  if (formValid) {
    // Do something else to submit the form;
  }

  return;
});



/* 
** Form Validation **

0. Identify what information do you need to collect from the user (identify required and optional fields).

1. Identify all static parts (inputs and related fields / elements, e.g. placeholder elements for errors), and add HTML and CSS for them. Add CSS for dinamic parts as well.

2. Select form, inputs, error elements in JS (elements that trigger events, elements that provide values for validation, or elements that we need to update).

3. Prepare validation rules (including regexes ) for every input type.

4. Trigger validation using event listeners.

5. (Optional) you can have an help value to keep track of form valid state (e.g. let formValid = true).
*/