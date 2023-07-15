//enlace a video explicativo: https://youtu.be/wIcp5RMx1wQ
//obra elegida: los tres mosqueteros
//legajo: 95512/9
PImage empezar;
PImage reiniciar;
PImage creditos;
PImage portada;
PImage botona;
PImage botonb;
PImage imagen1;
PImage imagen2;
PImage imagen3;
PImage imagen4;
PImage imagen5;
PImage imagen6;
PImage imagen7;
PImage imagen8;
PImage imagen9;
PImage imagen10;
PImage imagen11;
String texto1 = "autor: Francisco Tomas Oliver";
String texto2 = "programador: Francisco Tomas Oliver";
String texto3 = "artista: Francisco Tomas Oliver";
int numPantallas = 15;
int pantallaActual = 1;
int indiceTexto = 0;
String[] linea = new String[0];
PImage[] imagenes = new PImage[numPantallas];

void setup() {
  size(600, 600);
  linea = loadStrings("textos.txt");
  for (int i = 0; i < linea.length; i++) {
    linea[i] = linea[i].replaceAll("\\\\n", "\n");
  }

  reiniciar = loadImage("reiniciar.png");
  botona = loadImage("botona.png");
  botonb = loadImage("botonb.png");
  empezar = loadImage("empezar.png");
  creditos = loadImage("creditos.png");
  imagenes[0] = loadImage("portada.png");
  imagenes[1] = loadImage("imagen1.png");
  imagenes[2] = loadImage("imagen2.png");
  imagenes[3] = loadImage("imagen3.png");
  imagenes[4] = loadImage("imagen4.png");
  imagenes[5] = loadImage("imagen5.png");
  imagenes[6] = loadImage("imagen6.png");
  imagenes[7] = loadImage("imagen7.png");
  imagenes[8] = loadImage("imagen8.png");
  imagenes[9] = loadImage("imagen9.png");
  imagenes[10] = loadImage("imagen10.png");
  imagenes[11] = loadImage("imagen11.png");
}

void draw() {
  background(255);
  for (int pantalla = 1; pantalla <= numPantallas; pantalla++) {
    if (pantalla == pantallaActual) {
      switch (pantalla) {
      case 1:
        pantalla1();
        break;
      case 2:
        pantalla2();
        break;
      case 3:
        pantalla3();
        break;
      case 4:
        pantalla4();
        break;
      case 5:
        pantalla5();
        break;
      case 6:
        pantalla6();
        break;
      case 7:
        pantalla7();
        break;
      case 8:
        pantalla8();
        break;
      case 9:
        pantalla9();
        break;
      case 10:
        pantalla10();
        break;
      case 11:
        pantalla11();
        break;
      case 12:
        pantalla12();
        break;
      case 13:
        pantalla13();
        break;
      case 14:
        pantalla14();
        break;
      case 15:
        pantalla15();
        break;
      }
    }
  }
}

void pantalla1() {
  background(255);
  image(imagenes[0], 0, 0, 600, 600);
  image(empezar, 260, 300, 100, 100);
  image(creditos, 260, 420, 100, 100);
}

void pantalla2() {
  image(imagenes[1], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonAyB();
  TamañoYcolor();
  text(linea[0], 58, 65);
}

void pantalla3() {
  image(imagenes[7], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  BotonReiniciar();
  TamañoYcolor();
  text(linea[32], 58, 65);
}

void pantalla4() {
  image(imagenes[7], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[3], 58, 65);
}

void pantalla5() {
  image(imagenes[8], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[6], 58, 65);
}

void pantalla6() {
  image(imagenes[3], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[9], 58, 65); 
}

void pantalla7() {
  image(imagenes[5], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[12], 58, 65); 
}

void pantalla8() {
  image(imagenes[4], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[15], 58, 65); 
}

void pantalla9() {
  image(imagenes[6], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[18], 58, 65);
}

void pantalla10() {
  image(imagenes[10], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[21], 58, 65);
}

void pantalla11() {
  image(imagenes[10], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonA();
  TamañoYcolor();
  text(linea[24], 58, 65);
}

void pantalla12() {
  image(imagenes[9], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  ColocarBotonAyB();
  TamañoYcolor();
  text(linea[27], 58, 65);
}

void pantalla13() {
  image(imagenes[9], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  BotonReiniciar();
  TamañoYcolor();
  text(linea[34], 58, 65);
}

void pantalla14() {
  image(imagenes[0], 0, 0, 600, 600);
  image(reiniciar, 260, 420, 100, 100);
  ColocarCuadradoDeTexto();
  fill(255);
  textSize(25);
  text(texto1, 110, 100);
  text(texto2, 110, 150);
  text(texto3, 110, 200);
}

void pantalla15() {
  image(imagenes[9], 0, 0, 600, 600);
  ColocarCuadradoDeTexto();
  BotonReiniciar();
  TamañoYcolor();
  text(linea[30], 58, 65);
}

void mousePressed() {
  if (pantallaActual == 1) {
    if (VerificadorDeClick(260, 300, 100, 100)) {
      pantallaActual = 2;
    } else if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 14;
    }
  } else if (pantallaActual == 14) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 1;
    }
  } else if (pantallaActual == 2) {
    if (VerificadorDeClick(350, 420, 100, 100)) {
      pantallaActual = 4;
    } else if (VerificadorDeClick(140, 420, 100, 100)) {
      pantallaActual = 3;
    }
  } else if (pantallaActual == 3) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 1;
    }
  } else if (pantallaActual == 4) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 5;
    }
  } else if (pantallaActual == 5) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 6;
    }
  } else if (pantallaActual == 6) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 7;
    }
  } else if (pantallaActual == 7) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 8;
    }
  } else if (pantallaActual == 8) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 9;
    }
  } else if (pantallaActual == 9) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 10;
    }
  } else if (pantallaActual == 10) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 11;
    }
  } else if (pantallaActual == 11) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 12;
    }
  } else if (pantallaActual == 12) {
    if (VerificadorDeClick(140, 420, 100, 100)) {
      pantallaActual = 13;
    } else if (VerificadorDeClick(350, 420, 100, 100)) {
      pantallaActual = 15;
    }
  } else if (pantallaActual == 13) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 1;
    }
  } else if (pantallaActual == 15) {
    if (VerificadorDeClick(260, 420, 100, 100)) {
      pantallaActual = 1;
    }
  }
}
