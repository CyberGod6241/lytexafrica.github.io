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


  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navLinks.classList.remove("nav-active");
    }
  }) ;



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
  //upcoming Events
  const special = document.querySelector('.special');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.open');
  const close = document.querySelector('.close-modal');


  overlay.addEventListener('click', function() {
    special.classList.remove('hidden')
    modal.classList.remove('hidden')
  })

  close.addEventListener('click', function() {
    special.classList.add('hidden')
    modal.classList.add('hidden');
  })


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      special.classList.add("hidden");
      modal.classList.add('hidden')
    }
})