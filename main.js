document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle Functionality
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("click", function () {
      const answer = this.querySelector(".answer");
      // Toggle the answer display
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
  });

  // Demo: Hero Section Search Button Action
  document.getElementById("hero-search-btn").addEventListener("click", function () {
    const query = document.getElementById("hero-search-input").value;
    alert("Search Query: " + query);
  });

  // Demo: Footer Search Button Action
  document.getElementById("footer-search-btn").addEventListener("click", function () {
    const query = document.getElementById("footer-search-input").value;
    alert("Search Query: " + query);
  });
});
