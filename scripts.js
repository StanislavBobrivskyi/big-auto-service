document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slider img");
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Initial slide
  slides[currentSlide].classList.add("active");

  // Auto-slide
  setInterval(nextSlide, 3000);
});
