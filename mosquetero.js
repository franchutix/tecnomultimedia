class Mosquetero {
  constructor() {
    this.tamaño = 40;
    this.x = 195;
    this.y = height - this.tamaño;
    this.laberinto = null;
    this.colisionCooldown = 0;
 
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

    this.verificarColision();
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

  verificarColision() {
    if (
      this.laberinto &&
      this.laberinto.enemigoEnColision(this.x, this.y, this.tamaño) &&
      millis() - this.colisionCooldown > 3000
    ) {
      const distancia = dist(this.x, this.y, juego.enemigo.x, juego.enemigo.y);
      if (distancia < 0.5) {
        this.colisionCooldown = millis();
        juego.perdio = true;
        juego.reiniciar();
      }
    }
  }
}
