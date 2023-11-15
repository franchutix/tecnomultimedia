//es donde se encuentran las pantallas 
class Programa {
  constructor() {
    this.pantallas = [];
    this.pantallaActual = 0;
  }

  agregarPantalla(pantalla) {
    this.pantallas.push(pantalla);
  }

  mostrarPantallaActual() {
    if (this.pantallaActual < this.pantallas.length) {
      this.pantallas[this.pantallaActual].mostrar();
    }
  }

  cambiarPantalla(pantalla) {
    this.pantallaActual = pantalla;
  }

  getPantallaActual() {
    return this.pantallaActual;
  }
}
