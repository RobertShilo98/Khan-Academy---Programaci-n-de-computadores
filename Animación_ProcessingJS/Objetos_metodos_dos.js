// Autor: Roberto Jaime Rico Sandoval.
// Fille: Métodos en objetos.
// Date: 23/ 05/ 2022

// Clase constructora de objetos.
var SmileyFace = function(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};

// Método draw de la clase SmileyFace.
SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};


// Método speak de SmileyFace.
SmileyFace.prototype.speak = function(voz) {
    text(voz, this.centerX, this.centerY);
};

// Generación de un nuevo objeto.
var carita = new SmileyFace(200, 300);
// Llamada a los métodos de la clase.
carita.draw();
carita.speak("Hola");

// Generación de un nuevo objeto.
var carita2 = new SmileyFace(100, 100);
carita2.draw();
carita2.speak("Buen día");

var carita3 = new SmileyFace(300, 150);
// Llamada a los métodos de la clase.
carita3.draw();
carita3.speak("Me gusta la mota");

