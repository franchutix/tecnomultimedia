class Mosquetero {
  constructor() {
    this.tamaño = 40;
    this.x = 195;
    this.y = height - this.tamaño;
    this.laberinto = null;
    this.vidas = 3; // Inicialmente, el jugador tiene 3 vidas
  }

  mostrar() {
    image(mosquetero, this.x, this.y, this.tamaño, this.tamaño);
  }

  mover() {
    let xAnterior = this.x;
    let yAnterior = this.y;

    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      if (this.enCamino(this.x - 2, this.y)) {
        this.x -= 2;
      }
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + this.tamaño < width) {
      if (this.enCamino(this.x + 2, this.y)) {
        this.x += 2;
      }
    }
    if (keyIsDown(UP_ARROW) && this.y > 0) {
      if (this.enCamino(this.x, this.y - 2)) {
        this.y -= 2;
      }
    }
    if (keyIsDown(DOWN_ARROW) && this.y + this.tamaño < height) {
      if (this.enCamino(this.x, this.y + 2)) {
        this.y += 2;
      }
    }

    if (!this.enCamino(this.x, this.y)) {
      this.x = xAnterior;
      this.y = yAnterior;
    }
  }

  enCamino(x, y) {
    for (const area of this.laberinto.caminos) {
      if (
        x + this.tamaño > area.x &&
        x < area.x + area.ancho &&
        y + this.tamaño > area.y &&
        y < area.y + area.alto
      ) {
        return true;
      }
    }
    return false;
  }

  perderVida() {
    this.vidas--;
    if (this.vidas <= 0) {
      juego.perdio = true; // Si se quedó sin vidas, muestra el cartel de "perdiste"
      this.vidas = 3; // Reinicia las vidas
      setTimeout(() => {
        juego.perdio = false; // Restablece el estado del juego
        juego.reiniciar(); // Redirige al juego a la pantalla inicial
      }, 3000); // 3000 milisegundos (3 segundos)
    }
  }
}
