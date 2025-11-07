// Get the elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Add click event to hamburger
hamburger.addEventListener("click", () => {
  // Toggle navigation
  navLinks.classList.toggle("active");

  // Toggle hamburger animation
  hamburger.classList.toggle("toggle");
});

// Close menu when a link is clicked
// This is good for one-page navigation
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});
