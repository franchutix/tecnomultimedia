//link al video explicativo: https://youtu.be/Phj9RS5jAjg
//juego elegido: Pacman
//historia: Los Tres Mosqueteros
let juego;
let mosquetero;
let enemigo;
let castillo;
let portada;
let cesped;
let camino;
let camino2;
let perdiste;
let ganaste;


function preload() {

  castillo = loadImage("data/castillo.png");
  portada = loadImage("data/portada.png");
  cesped = loadImage("data/cesped.jpg");
  camino = loadImage("data/camino.png");
  camino2 = loadImage("data/camino2.png");
  mosquetero = loadImage("data/mosquetero.png");
  enemigo = loadImage("data/enemigo.png");
  ganaste = loadImage("data/ganaste.png");
  perdiste = loadImage("data/perdiste.png");
}

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  if (keyCode === ENTER) {
    juego.iniciar();
  }
}
