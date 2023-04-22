var ball = document.getElementById("ball");
var score = document.getElementById("score");
var sonidoRebote = document.getElementById("sonidoRebote");
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var dx = 4; // Aumenta la velocidad en el eje x
var dy = 4; // Aumenta la velocidad en el eje y
var scoreValue = 0;

// Función para mover la pelota
function moveBall() {
	x += dx;
	y += dy;

	if (x + ball.clientWidth / 2 > window.innerWidth || x - ball.clientWidth / 2 < 0) {
		dx = -dx;
	}

	if (y + ball.clientHeight / 2 > window.innerHeight || y - ball.clientHeight / 2 < 0) {
		dy = -dy;
	}

	ball.style.left = x - ball.clientWidth / 2 + "px";
	ball.style.top = y - ball.clientHeight / 2 + "px";

	if (x - ball.clientWidth / 2 <= 0 && y - ball.clientHeight / 2 <= 0) {
		scoreValue += 1;
		score.textContent = scoreValue;
	}

	window.requestAnimationFrame(moveBall);
}

sonidoRebote.
son
play();
// Iniciar movimiento de la pelota
moveBall();
