PImage oeste; 

void setup() {
  size(800, 400);
  background ( 149, 214, 255);
  oeste=loadImage("data/colectivo.jpg");
  image(oeste, 0, 0, 400, 400);
}
void draw() {
fill (198, 132, 94);
rect (490, 20, 70, 500); //edificio 1 naranja 
rect (390, 7, 100, 500); // edificio 2 naranja
fill (193, 191, 191);
rect (390, 6, 100, 10);  // detalle cemento edificio 2 
fill ( 149, 214, 255);
rect ( 395, 26, 40, 50);  // ventana edificio 2 izquierda 
rect ( 445, 26, 40, 50);  // ventana edificio 2 derecha
fill (255, 255, 255);
rect ( 395, 26, 40, 5); // reja edificio 2 ventana izquierda
rect ( 395, 37, 40, 5);
rect ( 395, 47, 40, 5);
rect ( 445, 26, 40, 5); //reja edificio 2 ventana derecha
rect ( 445, 37, 40, 5);
rect ( 445, 47, 40, 5);
rect ( 445, 57, 40, 5);
rect ( 445, 67, 40, 5);
fill (1, 142, 56);
ellipse (440, 140, 100, 150); //arbol
fill (255, 245, 214);
rect (670, 0, 200, 400); //edificio 1
fill (233, 233, 233);
rect (675, 8, 80, 100);   //ventana edifico beige 1, izquierda
rect (770, 8, 80, 100);   //ventana edifico beige 1, derecha
fill (255, 245, 214);
rect (676, 100, 200, 10); // balcon edificio beige 1, piso
fill (255, 255, 255);
rect (674, 60, 200, 5);   // barra superior de reja balcon edifico beige 1
rect (680, 60, 5, 40); 
rect (691, 60, 5, 40); 
rect (702, 60, 5, 40); 
rect (713, 60, 5, 40); 
rect (724, 60, 5, 40); 
rect (735, 60, 5, 40); 
rect (747, 60, 5, 40); 
rect (758, 60, 5, 40); 
rect (768, 60, 5, 40); 
rect (779, 60, 5, 40); 
rect (790, 60, 5, 40); 
fill ( 233, 233, 233);
rect (675, 120, 80, 90); //ventana abajo izquierda edifcio beige 1
rect (770, 120, 80, 90); //ventana abajo derecha edifcio beige 1
fill (255, 245, 214);
rect ( 550, 0, 120, 500); // edificio 2 beige 
rect (570, 8, 80, 105);   // marco ventana edificio beige 2 
fill ( 233, 233, 233);
rect (582, 20, 55, 80);   //ventana edifico beige 2 
fill (124, 123, 122);
rect (390, 278, 450, 400); // pavimento
fill ( 255, 255, 255);
stroke (0, 0, 0);
rect (400, 150, 350, 130);   //carroceria
fill (222, 17, 7);
rect (390, 260, 10, 20);     //parachoques
fill (222, 17, 7);           //color franja abajo
stroke (222, 17, 7);
rect ( 401, 244, 348, 35);   // fraja roja abajo
fill (43, 43, 44);
stroke (0, 0, 0);
ellipse ( 478, 275, 55, 55); //rueda delantera 
ellipse ( 670, 275, 55, 55); //rueda trasera 
fill (173, 173, 173);
ellipse ( 478, 275, 25, 25); //lantas delanteras
ellipse ( 670, 275, 25, 25); //lantas traseras
fill (255, 255, 255); 
rect (400, 150, 260, 10);
fill (92, 92, 93);
rect ( 475, 150, 275, 60);   //marco ventanillas traseras
rect (410, 150, 65, 65);     //marco negro ventanilla 
fill (222, 244, 255);
rect (428, 166, 38, 38);     //ventanillas
rect ( 500, 166, 38, 38);
rect ( 550, 166, 38, 38);
rect ( 600, 166, 38, 38);
rect ( 650, 166, 38, 38);
rect ( 700, 166, 38, 38);
stroke (222, 17, 7);
fill (222, 17, 7);          //color franja borde izquierdo
rect (401, 151, 10, 120);   //franja borde izquierdo 
fill (0, 0, 0);
stroke (0, 0, 0);
rect (412, 237, 338, 2);
fill (222, 17, 7); 
textSize(30);
text ("oeste", 545, 235);
stroke (0, 0, 0);
fill (255, 255, 255); 
rect (400, 150, 350, 13);
fill (0, 0, 0);
textSize(13);
text ("ABASTO-ROMERO-LA PLATA-OLMOS-ETCHEVERRY", 440, 162);
}
