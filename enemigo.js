class Enemigo {
  constructor() {
    this.tamaño = 50;
    this.x = 195;
    this.y = 50;
    this.laberinto = null;
    this.mosquetero = null;
  }

  mostrar() {
    image(enemigo, this.x, this.y, this.tamaño, this.tamaño);
  }

  mover() {
    if (this.mosquetero) {
      const dx = this.mosquetero.x - this.x;
      const dy = this.mosquetero.y - this.y;
      const length = sqrt(dx * dx + dy * dy);
      const speed = 2;
      const velX = (dx / length) * speed;
      const velY = (dy / length) * speed;

      const xAnterior = this.x;
      const yAnterior = this.y;

      if (this.enCamino(this.x + velX, this.y)) {
        this.x += velX;
      }
      if (this.enCamino(this.x, this.y + velY)) {
        this.y += velY;
      }

      if (!this.enCamino(this.x, this.y)) {
        this.x = xAnterior;
        this.y = yAnterior;
      }
    }
  }

  verificarColision() {
    if (
      this.laberinto &&
      this.mosquetero &&
      this.laberinto.enCamino(this.x, this.y) &&
      this.x + this.tamaño > this.mosquetero.x &&
      this.x < this.mosquetero.x + this.mosquetero.tamaño &&
      this.y + this.tamaño > this.mosquetero.y &&
      this.y < this.mosquetero.y + this.mosquetero.tamaño
    ) {
      juego.perdio = true;
      this.x = 195;
      this.y = 50;

      juego.perdio = false;
      juego.reiniciar();
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

  asignarMosquetero(mosquetero) {
    this.mosquetero = mosquetero;
  }
}
