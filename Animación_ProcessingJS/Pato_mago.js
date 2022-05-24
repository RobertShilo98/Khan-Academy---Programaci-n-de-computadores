// Autor: Roberto Jaime Rico Sandoval.
// Fille: Pato mago.
// Date: 30/ 04 / 2022

var cicA = 95;
var cicB = 60;
var cicC = 45;
var cicD = 85;
var cicX = 20;

var eyes1 = 15;
var eyes2 = 35;
var eyes3 = 197;
var eyes4 = 213;
var pul1 = 5;
var pul2 = 10;
var long = 110;
var long2 = 118;

draw = function() {
    
    // Escena.
    
    // Botón mágico.
    var x = 2;
    
    
    var magic = (eyes1+x);
    var magic2 = (eyes2+x);
    var magic3 = (pul1+x);
    var magic4 = (pul2+x);
    var magic5 = (long-x,long2-x);
    var magic6 = (eyes3-x);
    var magic7 = (eyes4+x);
    
    // Fondo.
    background(0, 0, 0);
    
    // Telón arriba.
    fill(212, 38, 38);
    ellipse(cicX,20,cicA,cicB);
    ellipse(cicX + 70,20,cicA,cicB);
    ellipse(cicX + 140,20,cicA,cicB);
    ellipse(cicX + 210,20,cicA,cicB);
    ellipse(cicX + 280,20,cicA,cicB);
    ellipse(cicX + 350,20,cicA,cicB);
    
    // telón a los lados.
    ellipse(cicX-5,cicB+15,cicC,cicD);
    ellipse(cicX-15,cicB+65,cicC,cicD);
    ellipse(cicX-25,cicB+105,cicC,cicD);
    ellipse(cicX+370,cicB+15,cicC,cicD);
    ellipse(cicX+380,cicB+65,cicC,cicD);
    ellipse(cicX+385,cicB+105,cicC,cicD);
    
    // Cuerpo pato.
    fill(232, 213, 37);
    rect(170,340,70,60,5);
    fill(0, 0, 0);
    ellipse(206,362,5,10);
    ellipse(206,382,5,10);
    ellipse(206,402,5,10);
    // Cabeza.
    fill(232, 213, 37);
    rect(183,235,46,110,5);
    
    // Moño.
    fill(230, 34, 60);
    arc(206,344,65,76,-23,7);
    arc(210,344,72,76,-184,-149);
    fill(0, 0, 0);
    ellipse(206,340,13,12);
    
    // Sombrero.
    fill(5, 117, 6);
    ellipse(206,231,81,40);
    rect(187,magic5,36,magic5,5);
    fill(0,0,0);
    rect(187,210,36,17,5);
    fill(196, 193, 12);
    ellipse(205,220,10,10);
    
    // Ojos.
    fill(255, 255, 255);
    ellipse(magic6,273,magic,magic2);
    ellipse(magic7,273,magic,magic2);
    fill(0, 0, 0);
    ellipse(magic6,273,magic3,magic4);
    ellipse(magic7,273,magic3,magic4);
    
    // pico.
    fill(252, 151, 10);
    triangle(206,342,216,305,194,305);
    fill(0, 0, 0);
    ellipse(201,312,5,15);
    ellipse(209,312,5,15);
    
};

