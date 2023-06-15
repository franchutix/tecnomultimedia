//Comision 4
//Francisco Tomas Oliver
// Trabajo practico numero 4

int inicioY;
int inicioX;
PImage ilusion;


void setup() {
  size (800, 400);
  background(255);
  ilusion = loadImage("data/arteoptico.jpg");
  image(ilusion, 0, 0, 400, 400);
}

void draw() {


  //Dibujar cuadrados
  for (int inicioY = -26; inicioY < height; inicioY += 15) {
    for (int inicioX = 0; inicioX < width; inicioX +=17) {
      dibujarCuadrado(inicioX, inicioY);
      
   
      }
    }
  }
