class Juego {
  constructor() {
    this.estado = "portada";
    this.mosquetero = new Mosquetero();
    this.enemigo = new Enemigo();
    this.laberinto = new Laberinto();
    this.mosquetero.laberinto = this.laberinto;
    this.enemigo.laberinto = this.laberinto;
    this.enemigo.mosquetero = this.mosquetero;
    this.perdio = false;
    this.gano = false;
    this.mosquetero.vidas = 3; 
  }

  iniciar() {
    this.estado = "juego";
  }

  reiniciar() {
    this.estado = "portada";
    this.mosquetero.x = 195;
    this.mosquetero.y = height - this.mosquetero.tamaño;
    this.gano = false;
    this.mosquetero.vidas = 3; 
  }

  dibujar() {
    if (this.perdio) {
      image(perdiste, 0, 0, width, height);
      if (frameCount % 60 === 0) {
        this.perdio = false;
        this.reiniciar();
      }
    } else if (this.gano) {
      image(ganaste, 0, 0, width, height);
      if (frameCount % 60 === 0) {
        this.gano = false;
        this.reiniciar();
      }
    } else if (this.estado === "portada") {
      image(portada, 0, 0, width, height);
    } else if (this.estado === "juego") {
      image(cesped, 0, 0, width, height);
      image(camino2, 200, 300, 40, 110);
      image(camino, 35, 298, 170, 40);
      image(camino, 60, 77, 255, 40);
      image(camino2, 30, 77, 40, 225);
      image(camino, 205, 260, 110, 40);
      image(camino2, 310, 78, 40, 290);
      image(camino, 240, 360, 107, 40);
      image(castillo, 50, 0, 180, 70);

      this.mosquetero.mostrar();
      this.mosquetero.mover();

      this.enemigo.mostrar();
      this.enemigo.mover();
      this.enemigo.verificarColision();

      if (dist(this.mosquetero.x, this.mosquetero.y, 50, 0) < 50) {
        this.gano = true;
      }
    }
  }
}
