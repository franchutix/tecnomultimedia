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
    this.vida = new Vida(3); // Crea un objeto Vida con 3 vidas iniciales
  }

  iniciar() {
    this.estado = "juego";
  }

  reiniciar() {
    this.estado = "portada";
    this.mosquetero.x = 195;
    this.mosquetero.y = height - this.mosquetero.tamaño;
    this.gano = false;
    this.vida.reiniciar(); // Restablece las vidas
  }

  dibujar() {
    if (this.perdio) {
      image(perdiste, 0, 0, width, height);
      setTimeout(() => {
        this.perdio = false;
        this.reiniciar();
      }, 3000); // 3 segundos
    } else if (this.gano) {
      image(ganaste, 0, 0, width, height);
      setTimeout(() => {
        this.gano = false;
        this.reiniciar();
      }, 3000); // 3 segundos
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

      // Verifica si el jugador llegó al castillo
      if (dist(this.mosquetero.x, this.mosquetero.y, 50, 0) < 50) {
        this.gano = true;
      }

      // Dibuja las vidas restantes
      this.vida.mostrar();
    }
  }
}
