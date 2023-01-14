"use strict";

// Accordion Features
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    // accordions.forEach((accordion) =>
    //   accordion.classList.remove("activate-accordion")
    // );
    accordion.classList.toggle("activate-accordion");
  });
});
