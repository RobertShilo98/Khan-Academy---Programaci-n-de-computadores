// Autor: Roberto Jaime Rico Sandoval.
// Fille: Noche estrellada en la ciudad.
// Date: 21/ 04/ 2022

var xPos = 200;
var yPos = 200;
var lineL = 50;
var lineW = 5;
var ventana = 25;
var d = 209;
var xCar = 300;
var n1 = 20;
var n2 = 300;
var radius = 20;
var radiusA = 28;

noStroke();

draw = function() {
    // Animadores (incrementos cardinales).
    xPos++;
    yPos++;
    d -= 3;
    xCar -= 2;
    n1 += 2;
    n2 -= 2;
    radius += 1.2;
    radius --;
    radiusA += 1.2;
    radiusA --;
    
    // Cielo.
    background(29, 40, 115);
    
    // Estrellas en movimiento
    fill(255, 242, 0);
    image(getImage("cute/Star"),xPos, yPos, 18, 18);
    image(getImage("cute/Star"),xPos-100,yPos-70, 18, 18);
    image(getImage("cute/Star"),xPos-120,yPos-70, 18, 18);
    image(getImage("cute/Star"),xPos-200,yPos-120, 18, 18);
    image(getImage("cute/Star"),xPos-115,yPos-45, 18, 18);
    image(getImage("cute/Star"),xPos-180,yPos-180, 18, 18);
    image(getImage("cute/Star"),xPos-167,yPos-190, 18, 18);
    image(getImage("cute/Star"),xPos-62,yPos-162, 18, 18);
    
    // Estrellas estáticas.
    image(getImage("cute/Star"),200, 100, 18, 18);
    image(getImage("cute/Star"),120, 140, 18, 18);
    image(getImage("cute/Star"),170, 11, 18, 18);
    image(getImage("cute/Star"),10, 160, 18, 18);
    image(getImage("cute/Star"),87, 94, 18, 18);
    image(getImage("cute/Star"),382, 20, 18, 18);
    image(getImage("cute/Star"),302, 180, 18, 18);
    image(getImage("cute/Star"),262, 130, 18, 18);
    
    // Pavimento.
    fill(99, 91, 91);
    rect(-1,359,401,41);
    // Líneas de trasito.
    fill(230, 245, 19);
    rect(-1,378,lineL, lineW);
    rect(66,378,lineL, lineW);
    rect(66+66,378,lineL, lineW);
    rect(66+66+66,378,lineL, lineW);
    rect(66+66+66+66,378,lineL, lineW);
    rect(66+66+66+66+66,378,lineL, lineW);
    
    //paisaje uwu.
    
    // Edificios.
    fill(191, 32, 32);
    rect(-1, 250, 90, 109);
    fill(181, 177, 177);
    rect(-1,246,94,4);
    fill(186, 241, 242);
    rect(2,269,ventana,ventana);
    rect(55,269,ventana,ventana);
    rect(2,319,ventana,ventana);
    rect(55,319,ventana,ventana);
    
    fill(57, 115, 48);
    rect(300, 250, 90, 109);
    fill(181, 177, 177);
    rect(298,246,94,4);
    fill(186, 241, 242);
    rect(305,269,ventana,ventana);
    rect(358,269,ventana,ventana);
    rect(305,319,ventana,ventana);
    rect(358,319,ventana,ventana);
    
    //Pasto.
    fill(4, 196, 17);
    rect(89,336,211,23);
    
    image(getImage("cute/GrassBlock"), 89,312,212,36);
    image(getImage("cute/TreeTall"), 167, 254, 58, 100);
    
    // Personajes.
    image(getImage("space/girl4"), 98, 262, 75, 141);
    image(getImage("avatars/leafers-ultimate"), 350, 199, 62, 52);
    
    // Cañon.
    fill(125, 105, 105);
    rect(304 ,240 ,42 ,8 );
    fill(228, 50, 237);
    rect(315, 221, 20, 20, 4);
    image(getImage("cute/Star"),317, 221, 15, 15);
    
    // Disparo.
    image(getImage("cute/Star"),317, d, 17, 17);
    
    // Carro.
    fill(39, 42, 207);
    rect(xCar+37,348,40,20, 4);
    rect(xCar+46,341,20,10);
    fill(176, 237, 231);
    rect(xCar+49,344,10,8, 4);
    fill(51, 46, 46);
    ellipse(xCar+45,365,15,15);
    ellipse(xCar+65,365,15,15);
    
    // Nubes.
    fill(9, 18, 84);
    ellipse(n1,100,radiusA,radius);
    ellipse(n1+15,100,radiusA,radius);
    ellipse(n1+5,90,radiusA,radius);
    
    ellipse(n2+80,130,radiusA,radius);
    ellipse(n2+60,130,radiusA,radius);
    ellipse(n2+65,117,radiusA,radius);
};

