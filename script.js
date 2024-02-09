"use strict";
let currentSlide = 1;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    const transformValue = -(currentSlide - 1) * 500 / slides.length;
    document.querySelector('.slider').style.transform = `translateX(${transformValue}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
  var userButton = document.getElementById('userButton');

  userButton.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
});


/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toogle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}
addEventOnElem(filterBtn, "click", filter);
document.addEventListener("DOMContentLoaded", function() {
    var contactButton = document.getElementById("cartButton");

    contactButton.addEventListener("click", function() {
      window.location.href = "cart.html";
    });
  });

addEventOnElem(filterBtn, "click", filter);
document.addEventListener("DOMContentLoaded", function() {
    // Get the "Contact Us" button element
    var contactButton = document.getElementById("Contact");

    contactButton.addEventListener("click", function() {
      window.location.href = "contact.html";
    });
  });
  function addToCart(name, price) {
    // Add the selected product to the cartItems array
    cartItems.push({ name, price });
  
    // Call the updateCart function to refresh the cart details
    updateCart();
  }

// ... (existing code) ...

// Open Cart Page function
function openCartPage() {
  // Redirect to the cart.html page
  window.location.href = 'cart.html';
}

// Attach click event to the cart button
document.getElementById('cartButton').addEventListener('click', openCartPage);

  
