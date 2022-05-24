// Autor: Roberto Jaime Rico Sandoval.
// Fille: Práctica final JS y animación (Herencía de objetos. 
// Date: 23/ 05/ 2022

/******************
* Método constructor (Clase).
*******************/
var Flower = function(x, y, height) {
    this.x = x;
    this.y = y;
    this.height = height;
};

/******************
*Método de crecimiento para las flores.
*******************/
Flower.prototype.growBy = function(growBy) {
    this.height += 2 * growBy;
};

/******************
*Nuevo tipo de objeto de la clase flor.
*******************/
/******************
*Aplicación de herencia.
*******************/
var Tulip = function(x, y, height) {
    // Llamada al método constructor.
    Flower.call(this, x, y, height);
};
// Declaración de objeto heredado de la clase Flower.
Tulip.prototype = Object.create(Flower.prototype);

// Dibujo del tulipan.
Tulip.prototype.draw = function() {
    noStroke();
    fill(16, 122, 12);
    rect(this.x, this.y, 10, -this.height);
    fill(255, 0, 0);
    // petals
    ellipse(this.x+5, this.y-this.height, 44, 44);
    triangle(this.x-16, this.y-this.height, 
            this.x+20, this.y-this.height,
            this.x-20, this.y-this.height-31);
    triangle(this.x-14, this.y-this.height, 
            this.x+24, this.y-this.height,
            this.x+3, this.y-this.height-39);
    triangle(this.x+-4, this.y-this.height, 
            this.x+26, this.y-this.height,
            this.x+29, this.y-this.height-36);
};

/******************
*Nuevo tipo de objeto de la clase flor.
*******************/
/******************
*Aplicación de herencia.
*******************/
var Sunflower = function(x, y, height) {
    // Llamada al método constructor.
    Flower.call(this, x, y, height);
};

// Declaración de objeto heredado de la clase Flower.
Sunflower.prototype = Object.create(Flower.prototype);

// Dibujo del girasol.
Sunflower.prototype.draw = function() {
    fill(16, 122, 12);
    
    rect(this.x, this.y, 10, -this.height);
    
    // petals
    stroke(0, 0, 0);
    fill(255, 221, 0);
    ellipse(this.x-10, this.y-this.height, 20, 18);
    ellipse(this.x+5, this.y-this.height-15, 20, 18);
    ellipse(this.x+5, this.y-this.height+15, 20, 18);
    ellipse(this.x+20, this.y-this.height, 20, 18);
    fill(20, 20, 20);
    ellipse(this.x+5, this.y-this.height, 20, 20);
};

/**************
*Salida principal (Main)
***************/

/** Creación de objetos instanciados y heredados **/
var tulip = new Tulip(40, 400, 160);
var tulip2 = new Tulip(124, 400, 166);
var sunflower = new Sunflower(180, 400, 105);
var sunflower2 = new Sunflower(304, 400, 112);

/** Dibujo del fondo del escenario. **/
var drawScene = function() {
    background(207, 250, 255);
    tulip.draw();
    tulip2.draw();
    sunflower.draw();
    sunflower2.draw();
};

/** Método predeterminado mouseClicked **/
mouseClicked = function() {
    tulip.growBy(10);
    sunflower.growBy(20);
    tulip2.growBy(13);
    sunflower2.growBy(23);
    drawScene();
};

drawScene();  // Llamada de la escena principal.

