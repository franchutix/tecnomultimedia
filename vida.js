class Vida {
  constructor(totalVidas) {
    this.totalVidas = totalVidas;
    this.vidasRestantes = totalVidas;
    this.tamañoIcono = 20; // Tamaño de los íconos de vida
    this.margen = 10; // Margen entre los íconos
  }

  perderVida() {
    if (this.vidasRestantes > 0) {
      this.vidasRestantes--;
    }
  }

  reiniciar() {
    this.vidasRestantes = this.totalVidas;
  }

  mostrar() {
    for (let i = 0; i < this.vidasRestantes; i++) {
      // Dibuja íconos de vida en la esquina superior izquierda
      const x = this.margen + i * (this.tamañoIcono + this.margen);
      const y = this.margen;
      image(vidas, x, y, this.tamañoIcono, this.tamañoIcono);
    }
  }
}
