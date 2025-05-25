const imagen = document.getElementById('imagen');
const marco = document.getElementById('marco');

let posImagen = -350;
let posMarco = -700;

const velocidadImagen = 4.1;
const velocidadMarco = 4;

function animar() {

  let sigue = false;

  // Mover imagen
  if (posImagen < window.innerWidth + 300) {
    posImagen += velocidadImagen;
    imagen.style.left = posImagen + 'px';
    sigue = true;
  } else {
    imagen.style.display = 'none';
    marco.style.display = 'block'; // mostrar marco al terminar imagen
  }

  // Simular entrada del marco desde la izquierda
  if (posMarco < window.innerWidth / 2) {
    posMarco += velocidadMarco;
    marco.style.left = posMarco + 'px';
    marco.style.transform = 'translateX(-50%)';
    sigue = true;
  }

  if (sigue) {
    requestAnimationFrame(animar);
  }
}

window.onload = () => {
  marco.style.left = '-700px'; // inicia fuera de pantalla
      setTimeout(() => {
      animar();
    }, 5000);
};
