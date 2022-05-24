/** 
Autor: Roberto Jaime Rico Sandoval.
Fille: Animación de numes.
Date: XXXXXX
**/

noStroke();
var leftX = 156;
var rightX = 212;
var sunRadius = 100;

draw = function() {
    
    // Incremento de variable sobre animaciones.
    leftX -= 1;
    rightX += 1;
    sunRadius += 1;
    
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 84, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
};

