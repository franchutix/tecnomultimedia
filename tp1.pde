PImage imagen1;
PImage imagen2;
PImage imagen3;
PImage imagen4;
PImage imagen5;
PImage imagen6;
PImage boton_final;
String texto1 = "fue un avión de caza utilizado por el servicio \n imperial japones durante la segunda guerra mundial.";
String texto2 = "su designación oficial en el ejercito japones\n era caza tipo 4 o Frank.";
String texto3 = "se utilizo por primera vez en marzo de 1944 en\n Hankow contra los cazas Warhawk.";
String texto4 = "en octubre del mismo año\n tomo parte de la campaña de las filipinas. ";
String texto5 = "en abril del año siguiente fueron\n enviados a Okinawa para repeler\n el desembarco angloamericano.";
String texto6 = "logrando destruir varios aviones en tierra\n y 1.000L de combustible.";
PFont font;
int pantalla = 1; 
int numero = 0;

void setup() {
  background (255);
  size(640, 480);
  font=loadFont("AgencyFB-Reg-35.vlw");
  textFont(font);
  imagen1=loadImage("data/avion1.jpg"); 
  imagen2=loadImage("data/avion2.jpg");
  imagen3=loadImage("data/avion3.jpeg");
  imagen4=loadImage("data/avion4.jpeg");
  imagen5=loadImage("data/avion5.jpeg");
  imagen6=loadImage("data/avion6.jpg");
  boton_final=loadImage("data/boton_final.png");    
}
void draw(){

   background(200);
  if (pantalla == 1) {
     background (255);
      image(imagen1, 0, 0, 640, 480);
      fill(219, 0, 0);
      text(texto1, numero, 30);
       numero=numero+2;
          if (numero == 600){
          pantalla=2;
          numero=0;
        }
  } else if (pantalla == 2) {
       background(255);
      image(imagen2, 0, 0, 640, 480);
      fill(255);
      text(texto2, numero, numero);
       numero=numero+2;
          if (numero == 590){
          pantalla=3;
          numero=0;
          }
  } else if (pantalla == 3) {
       background(255);
      image(imagen3, 0, 0, 640, 480);
      fill(255);
      text(texto3, numero, 30);
       numero=numero+2;
       if (numero == 590){
          pantalla=4;
          numero=0;
          }
    } else if (pantalla == 4) {
       background(255);
      image(imagen4, 0, 0, 640, 480);
      fill(219, 0, 0);
      text(texto4, numero, numero);
       numero=numero+2;
    if (numero == 590){
          pantalla=5;
          numero=0;
          }
    } else if (pantalla == 5) {  
      background(0);
      image(imagen5, 0, 0, 640, 480);
      fill(219, 0, 0);
      text(texto5, numero, 30);
       numero=numero+2;
       if (numero == 590){
          pantalla=6;
          numero=0;
          }
     } else if (pantalla == 6) {
         background(0);
      image(imagen6, 0, 0, 640, 480);
      image(boton_final, 530, 410, 100, 50);
      fill(219, 0, 0);
      text(texto6, numero, numero);
      numero=numero+2;
     }
     
     
}
void mousePressed(){

if (mouseX>530 && mouseX<630 && mouseY>410 && mouseY<460 && pantalla==6){
    pantalla=1;
    numero=0;
}
}
