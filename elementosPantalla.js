class ElementoPantalla {
  constructor(imagen, textos, x, y, ancho, alto) {
    this.imagen = imagen;
    this.texto = textos;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    if (this.imagen) {
      image(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    if (this.texto) {
      fill(255);
      textSize(15);
      text(this.texto, this.x, this.y);
    }
  }
}
class Pantalla1 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(portada, "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(empezar, "", 260, 300, 100, 100));
    this.elementos.push(new ElementoPantalla(creditos, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla2 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[1], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[0], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla3 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[7], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[32], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(reiniciar, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla4 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[7], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[3], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla5 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[8], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[6], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla6 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[3], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[9], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla7 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[5], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[12], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla8 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[4], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[15], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla9 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[6], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[18], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla10 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[10], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[21], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla11 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[10], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[24], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla12 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[9], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[27], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(botona, "", 140, 420, 100, 100));
    this.elementos.push(new ElementoPantalla(botonb, "", 350, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla13 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[9], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[34], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(reiniciar, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}

class Pantalla14 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(portada, "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(reiniciar, "", 260, 420, 100, 100));
    this.elementos.push(new ElementoPantalla(null, linea[0], 110, 100, 0, 0));
    this.elementos.push(new ElementoPantalla(null, linea[1], 110, 150, 0, 0));
    this.elementos.push(new ElementoPantalla(null, linea[2], 110, 200, 0, 0));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}


class Pantalla15 {
  constructor() {
    this.elementos = [];
    this.elementos.push(new ElementoPantalla(imagenes[9], "", 0, 0, 600, 600));
    this.elementos.push(new ElementoPantalla(null, linea[30], 58, 65, 0, 0));
    this.elementos.push(new ElementoPantalla(reiniciar, "", 260, 420, 100, 100));
  }

  mostrar() {
    background(255);
    for (const elemento of this.elementos) {
      elemento.mostrar();
    }
  }
}
