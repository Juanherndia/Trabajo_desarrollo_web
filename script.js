document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".carrusel img");
  const totalSlides = slides.length;

  if (totalSlides) {
    slides[0].classList.add("active");
  }

  window.cambiarSlide = function (step) {
    slides[index].classList.remove("active");
    index = (index + step + totalSlides) % totalSlides;
    slides[index].classList.add("active");
  };

  // Rotación automática del carrusel cada 3 segundos
  setInterval(() => {
    cambiarSlide(1);
  }, 3000);
});

// Función para buscar productos
function buscarProductos() {
  const input = document.getElementById("buscar");
  const filtro = input.value.toLowerCase();
  const productos = document.querySelectorAll(".producto");

  productos.forEach((p) => {
    const nombre = p.querySelector("h3").innerText.toLowerCase();
    p.style.display = nombre.includes(filtro) ? "" : "none";
  });
}