/**
 *
 * 1. Date input - date
 * 2. Buttons with class slot - time
 * 3. Date Span
 * 4. Time Span
 * 5. Confirm booking button
 * 6. Form element
 */

const dateInput = document.getElementById('date');
const timeButtons = document.querySelectorAll('.slot');
const dateSpan = document.getElementById('selected-date');
const timeSpan = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const formElement = document.getElementById('booking-form');

const confirmation = document.getElementById('confirmation-msg');
const error = document.getElementById('error-msg');

const data = {
  date: null,
  time: null,
};

/* 
Select the date, date will be written on the right side of the screen


....

Write name -> name should be displayed on the right side
Write email & / phone -> they should be displayed on the right side


...
After all inputs are filled, confirmation button should become enabled
User should should be able to submit the form (press enter on keyboard or click confirm button), and see the confirmation message on the screen
*/

// Event types: click, change, submit, blur...
dateInput.addEventListener('change', function () {
  const selectedDate = new Date(dateInput.value).toLocaleDateString('tr-TR');

  if (!selectedDate || selectedDate === 'Invalid Date') {
    dateSpan.textContent = '-';
    data.date = null;
  } else {
    dateSpan.textContent = selectedDate;
    data.date = selectedDate;
  }

  allowSubmit();
});

// If you had selected timeSlotButtons using document.getElementsByClassName('slot') then you'd have to copy them first, before being able to run forEach on them!!!!
// const copy = [...timeSlotButtons]; copy.forEach....

timeButtons.forEach((button) => {

  button.addEventListener('click', function () {
    if (button.textContent) {
      timeSpan.textContent = button.textContent;
      data.time = button.textContent;
    } else {
      timeSpan.textContent = '-';
      data.time = null;
    }

    allowSubmit();
  });

});

function allowSubmit() {
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', true);
  }
}


formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
  if (data.date && data.time) {
    formElement.classList.add('hidden');
    confirmation.classList.remove('hidden');
  } else {
    error.classList.remove('hidden');
    confirmation.classList.add('hidden');
  }
});