class Laberinto {
  constructor() {
    this.camino1 = camino;
    this.camino2 = camino2;

    this.caminos = [];

    this.caminos.push({ x: 35, y: 298, ancho: 170, alto: 40, imagen: this.camino1 });
    this.caminos.push({ x: 60, y: 77, ancho: 255, alto: 40, imagen: this.camino1 });
    this.caminos.push({ x: 30, y: 77, ancho: 40, alto: 225, imagen: this.camino2 });
    this.caminos.push({ x: 200, y: 260, ancho: 115, alto: 40, imagen: this.camino1 });
    this.caminos.push({ x: 310, y: 78, ancho: 40, alto: 290, imagen: this.camino2 });
    this.caminos.push({ x: 195, y: 300, ancho: 50, alto: 110, imagen: this.camino2 });
    this.caminos.push({ x: 240, y: 360, ancho: 107, alto: 40, imagen: this.camino1 });
  }

  mostrar() {
    this.caminos.forEach((area) => {
      image(area.imagen, area.x, area.y, area.ancho, area.alto);
    });
  }

  enCamino(x, y) {
    for (const area of this.caminos) {
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
}
