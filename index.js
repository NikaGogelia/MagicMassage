"use strict";

// Navbar Features
const navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((n) => n.classList.remove("nav-active"));
    navLink.classList.add("nav-active");
  });
});

// Accordion Features
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (!accordion.classList.contains("activate-accordion")) {
      accordions.forEach((a) => a.classList.remove("activate-accordion"));
      accordion.classList.add("activate-accordion");
    } else {
      accordion.classList.remove("activate-accordion");
    }
  });
});
