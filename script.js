// Crear un contexto de audio
var contextoAudio = new (window.AudioContext || window.webkitAudioContext)();

// Cargar los archivos de sonido
var sonidoRebote = new Audio('rebote.mp3');
var sonidoAmbiental = new Audio('playa.mp3');

// Definir las propiedades de la pelota
var x = lienzo.width / 2;
var y = lienzo.height / 2;
var radio = 20;
var velocidadX = 2;
var velocidadY = -2;

// Contador
var contador = 0;

// Función para actualizar el contador en el HTML
function actualizarContador() {
  document.getElementById('contador').textContent = contador;
}

// Lógica de movimiento de la pelota
function moverPelota() {
  // ... Código para dibujar la pelota, detectar rebotes, etc.

  // Reproducir sonido de rebote cuando la pelota rebota
  if (rebota) {
    sonidoRebote.currentTime = 0; // Reiniciar el sonido
    sonidoRebote.play(); // Reproducir el sonido de rebote
  }

  
  }

 
// Actualizar el contador
  contador++;
  actualizarContador();

  // Llamar a la función de movimiento de la pelota en el siguiente cuadro de animación
  requestAnimationFrame(moverPelota);
}

// Iniciar la reproducción del sonido ambiental
sonidoAmbiental.
son
loop = true; // Repetir el sonido en un bucle
sonidoAmbiental.play(); // Reproducir el sonido ambiental

// Llamar a la función de movimiento de la pelota para iniciar la animación
moverPelota();
