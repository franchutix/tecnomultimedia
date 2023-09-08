//link al video explicativo: https://youtu.be/-uej4KHUl-M
//juego seleccionado: MISSILE COMMAND

let pantalla = "carga";
let portada;
let baseRoja;
let edificio;
let explosion;
let edificiosRotos;
let torreta;
let gameOver;
let restart;
let puntero;
let misilesEnemigos = [];
let explosiones = [];
let velocidadMisil = 80;
let misilDisparado = false;
let puntos = 0; // Puntos totales
let puntosJuego = 0; // Puntos obtenidos durante el juego
let misilesDisponibles = 10;
let puntosFinales = 0;
let enTransicion = false;
setInterval(generarMisilEnemigo, 7000);
let misilImagen;
let fuente;

function preload() {
  restart = loadImage("data/restart.png");
  gameOver = loadImage("data/gameOver.png");
  portada = loadImage("data/portada.png");
  baseRoja = loadImage("data/baseRoja.png");
  edificio = loadImage("data/edificios.png");
  explosion = loadImage("data/explosion.png");
  edificiosRotos = loadImage("data/edificiosRotos.png");
  torreta = loadImage("data/torreta.png");
  puntero = loadImage("data/puntero.png");
  misilImagen = loadImage("data/misilenemigo.png");
  fuente = loadFont("data/PressStart2P-vaV7.ttf");
}

function setup() {
  createCanvas(500, 500);
  noCursor();
  frameRate(60);
  textFont(fuente);
}

function draw() {
  background(0);

  if (pantalla === "carga") {
    image(portada, 0, 0, width, height);
    if (mouseIsPressed && !enTransicion) {
      pantalla = "juego";
    }
  } else if (pantalla === "juego") {
    dibujarEdificios();
    image(baseRoja, 0, height - 30, width, 30);
    image(torreta, 210, 470, 80, 30);
    textSize(16);
    fill(255);
    textAlign(CENTER, TOP);
    text("i" + misilesDisponibles, 250, 500);
    textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text("" + nf(puntosJuego, 4), width / 2, 10);

    for (let i = 0; i < misilesEnemigos.length; i++) {
      let misil = misilesEnemigos[i];
      if (misil.activo) {
        image(misilImagen, misil.x, misil.y, 10, 10);
        let angulo = obtenerAngulo(misil.x, misil.y, misil.objetivoX, misil.objetivoY);
        misil.velocidadX = 2 * cos(radians(angulo));
        misil.velocidadY = 2 * sin(radians(angulo));
        misil.x += misil.velocidadX;
        misil.y += misil.velocidadY;
        let distancia = dist(misil.x, misil.y, misil.objetivoX, misil.objetivoY);
        if (distancia < 10) {
          activarExplosión(misil.objetivoX, misil.objetivoY);
          misil.activo = false;
          let distanciaTorretaMisil = dist(misil.x, misil.y, 250, 470);
          if (distanciaTorretaMisil < 10) {
            puntosJuego += 300;
          }
        }
        for (let j = 0; j < explosiones.length; j++) {
          let explosión = explosiones[j];
          if (explosión.activa) {
            let distancia = dist(misil.x, misil.y, explosión.x, explosión.y);
            if (distancia < explosión.tamaño / 2) {
              misil.activo = false;
            }
          }
        }
      }
    }

    for (let i = explosiones.length - 1; i >= 0; i--) {
      let explosión = explosiones[i];
      if (explosión.activa) {
        let tiempoTranscurrido = millis() - explosión.inicio;
        let t = constrain(tiempoTranscurrido / 3000, 0, 1);

        let tamañoExplosión = lerp(1, 43, t);
        image(explosión.imagen, explosión.x - tamañoExplosión / 2, explosión.y - tamañoExplosión / 2, tamañoExplosión, tamañoExplosión);

        if (tiempoTranscurrido >= 3000) {
          explosión.activa = false;
          explosiones.splice(i, 1);
        }
      }
    }

    image(puntero, mouseX, mouseY, 20, 10);
    if (mouseIsPressed && !misilDisparado) {
      if (misilesDisponibles > 0) {
        let misil = {
          x: 250,
          y: 470,
          objetivoX: mouseX,
          objetivoY: mouseY,
          velocidadX: 0,
          velocidadY: 0,
          activo: true
        };
        let distanciaX = misil.objetivoX - misil.x;
        let distanciaY = misil.objetivoY - misil.y;
        let tiempoDeLlegada = 2000;
        misil.velocidadX = distanciaX / tiempoDeLlegada;
        misil.velocidadY = distanciaY / tiempoDeLlegada;
        misilesEnemigos.push(misil);
        misilesDisponibles--;
        misilDisparado = true;
      } else {
        pantalla = "gameOver";
        enTransicion = true;
      }
    } else if (!mouseIsPressed) {
      misilDisparado = false;
    }
  } else if (pantalla === "gameOver") {
    cursor();
    image(gameOver, 0, 0, width, height);
    textSize(24);
    fill(255);
    textAlign(CENTER, BOTTOM);
    text("Puntos finales: " + puntosJuego, width / 2, height - 110);
    let botonAncho = 120;
    let botonAlto = 40;
    let botonX = width / 2 - botonAncho / 2;
    let botonY = height / 2 - botonAlto / 2 + 80;
    image(restart, botonX, botonY, botonAncho, botonAlto);
    if (mouseIsPressed && mouseX >= botonX && mouseX <= botonX + botonAncho && mouseY >= botonY && mouseY <= botonY + botonAlto && enTransicion) {
      reiniciarJuego();
      enTransicion = false;
    }
  }
}

function dibujarEdificios() {
  image(edificio, 55, 470, 25, 15);
  image(edificio, 115, 470, 25, 15);
  image(edificio, 175, 470, 25, 15);
  image(edificio, 300, 470, 25, 15);
  image(edificio, 365, 470, 25, 15);
  image(edificio, 425, 470, 25, 15);
}

function activarExplosión(x, y) {
  let nuevaExplosión = {
    x: x,
    y: y,
    inicio: millis(),
    activa: true,
    imagen: explosion,
    tamaño: 43
  };
  explosiones.push(nuevaExplosión);
}

function generarMisilEnemigo() {
  let misil = {
    x: random(width),
    y: 0,
    objetivoX: random(width),
    objetivoY: height,
    activo: true
  };
  misilesEnemigos.push(misil);
}

function obtenerAngulo(pX1, pY1, pX2, pY2) {
  return atan2(pY2 - pY1, pX2 - pX1) * 180 / PI;
}

function reiniciarJuego() {
  pantalla = "carga";
  puntosFinales = puntosJuego;
  puntosJuego = 0;
  misilesDisponibles = 10;
  misilesEnemigos = [];
  explosiones = [];
  enTransicion = false;
}
