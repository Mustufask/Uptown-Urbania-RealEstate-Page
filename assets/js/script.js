'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

// Get the modal trigger button, modal container, and modal close button

const modalTrigger = document.querySelector('.modal-trigger');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');

// When the user clicks the modal trigger button, show the modal container

modalTrigger.addEventListener('click', function () {
  modalContainer.style.display = 'block';
});

// When the user clicks the modal close button, hide the modal container
modalClose.addEventListener('click', function () {
  modalContainer.style.display = 'none';
});

// When the user clicks anywhere outside of the modal content, hide the modal container
window.addEventListener('click', function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the form values
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const gender = form.elements.gender.value;
  const message = form.elements.message.value;

  // Perform any necessary validation
  if (!name) {
    alert('Please enter your name.');
    return;
  }

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  // Submit the form data to a server using AJAX or fetch
  // ...

  // Reset the form
  form.reset();

  // Show a success message
  alert('Form submitted successfully!');
});

//Variables to store all values with dom manipulation
const days = document.getElementById('days');
const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

//Inbuilt javascript date function
const currentYear = new Date().getFullYear()

const newCountTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

//Update countdown time
function updateCountdownTime () {
  const currentTime = new Date();
  const diff = newCountTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

//Calling the function with interval of 1 second
setInterval(updateCountdownTime, 1000);
