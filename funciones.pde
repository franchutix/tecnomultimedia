void ColocarCuadradoDeTexto() {
  fill(0, 200);
  rect(50, 40, 500, 350);
}

void ColocarBotonA() {
  image(botona, 260, 420, 100, 100);
}

void TamañoYcolor(){
  fill(255);
  textSize(15);
}

void ColocarBotonAyB() {
  image(botona, 350, 420, 100, 100);
  image(botonb, 140, 420, 100, 100);
}

void BotonReiniciar(){
 image(reiniciar, 260, 420, 100, 100);
}

boolean VerificadorDeClick(int x, int y, int ancho, int alto) {
  float distancia = dist(mouseX, mouseY, x + ancho/2, y + alto/2);
  return distancia <= ancho/2;
}
