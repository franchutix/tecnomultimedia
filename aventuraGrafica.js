//encargado de hacer el pasaje de las pantallas
class AventuraGrafica {
  constructor() {
    this.programa = new Programa();
  }

  setup() {
    createCanvas(600, 600);

    // Agregar todas las pantallas al programa
    this.programa.agregarPantalla(new Pantalla1());
    this.programa.agregarPantalla(new Pantalla2());
    this.programa.agregarPantalla(new Pantalla3());
    this.programa.agregarPantalla(new Pantalla4());
    this.programa.agregarPantalla(new Pantalla5());
    this.programa.agregarPantalla(new Pantalla6());
    this.programa.agregarPantalla(new Pantalla7());
    this.programa.agregarPantalla(new Pantalla8());
    this.programa.agregarPantalla(new Pantalla9());
    this.programa.agregarPantalla(new Pantalla10());
    this.programa.agregarPantalla(new Pantalla11());
    this.programa.agregarPantalla(new Pantalla12());
    this.programa.agregarPantalla(new Pantalla13());
    this.programa.agregarPantalla(new Pantalla14());
    this.programa.agregarPantalla(new Pantalla15());

    this.programa.cambiarPantalla(0); 
  }

  draw() {
    this.programa.mostrarPantallaActual();
  }

  mousePressed() {
    const pantallaActual = this.programa.getPantallaActual();
    const x = mouseX;
    const y = mouseY;

    if (pantallaActual === 1) {
      if (x >= 260 && x <= 360 && y >= 300 && y <= 400) {
        this.programa.cambiarPantalla(2);
      } else if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(14);
      }
    } else if (pantallaActual === 2) {
      if (x >= 350 && x <= 450 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(4);
      } else if (x >= 140 && x <= 240 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(3);
      }
    } else if (pantallaActual === 3) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(1);
      }
    } else if (pantallaActual === 4) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(5);
      }
    } else if (pantallaActual === 5) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(6);
      }
    } else if (pantallaActual === 6) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(7);
      }
    } else if (pantallaActual === 7) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(8);
      }
    } else if (pantallaActual === 8) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(9);
      }
    } else if (pantallaActual === 9) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(10);
      }
    } else if (pantallaActual === 10) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(11);
      }
    } else if (pantallaActual === 11) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(12);
      }
    } else if (pantallaActual === 12) {
      if (x >= 140 && x <= 240 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(13);
      } else if (x >= 350 && x <= 450 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(15);
      }
    } else if (pantallaActual === 13) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(1);
      }
    } else if (pantallaActual === 15) {
      if (x >= 260 && x <= 360 && y >= 420 && y <= 520) {
        this.programa.cambiarPantalla(1);
      }
    }
  }
}
