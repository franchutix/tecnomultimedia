void dibujarCuadrado(int posX, int posY) {
  noStroke();
  fill(19, 69, 156);
  beginShape();
  vertex(posX + 400, posY + 27);
  vertex(posX + 400, posY + 48);
  vertex(posX + 417, posY + 27);
  vertex(posX + 417, posY + 6);
  endShape();
}
