const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const h3 = document.querySelector("h4");

window.addEventListener("keydown", function (e) {
  h1.textContent = e.which;
  ( e.key === " " ) ? p.textContent = "Spacebar" : p.textContent = e.key;
})