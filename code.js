const aboutBox = document.querySelector(".about-box");
const sideForm = document.querySelector(".side-form");

document.querySelector(".register-link").addEventListener("click", function(e) {
  e.preventDefault();
  sideForm.classList.toggle("visible");
  aboutBox.classList.add("active");

});

document.querySelector(".about-link").addEventListener("click", function(f) {
  f.preventDefault();
  aboutBox.classList.toggle("active");
  sideForm.classList.add("visible");
});

document.querySelector(".home-page").addEventListener("click", function(g) {
  g.preventDefault();
  sideForm.classList.add("visible");
  aboutBox.classList.add("active");
});