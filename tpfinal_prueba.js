let aventura;
let portada;
let botona;
let botonb;
let creditos;
let empezar;
let reiniciar;
let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen6;
let imagen7;
let imagen8;
let imagen9;
let imagen10;
let imagen11;
let imagenes = [];
let linea = [];

function preload() {
  let nombres = ['botona', 'botonb', 'creditos', 'empezar', 'portada'];
  for (let nombre of nombres) {
    imagenes[nombre] = loadImage('data/' + nombre + '.png');
  }

  let cantidadImagenes = 11;
  for (let i = 1; i <= cantidadImagenes; i++) {
    imagenes['imagen' + i] = loadImage('data/imagen' + i + '.png');
  }


  let contenidoTexto = loadStrings('data/textos.txt');


  for (let i = 0; i < contenidoTexto.length; i++) {
    linea.push(contenidoTexto[i]);
  }
}

function setup() {
  aventura = new AventuraGrafica();
  aventura.setup();
}

function draw() {
  aventura.draw();
}

function mousePressed() {
  aventura.mousePressed();
}
