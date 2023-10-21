//link al video explicativo: https://youtu.be/Av2HL-DjS18
//juego elegido: Pacman
//historia: Los Tres Mosqueteros

let mosquetero;
let enemigo;
let castillo;
let portada;
let cesped;
let camino;
let camino2;
let perdiste;
let ganaste;
let vidas;

function preload() {
  vidas = loadImage("data/vidas.jpg");
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
  juego.enemigo.mosquetero = juego.mosquetero;
  juego.enemigo.camino = juego.laberinto.camino;
}

function keyPressed() {
  if (keyCode === ENTER) {
    juego.iniciar();
  }
}
