// Autor: Roberto Jaime Rico Sandoval.
// Fille: Mordidas a la manzána.
// Date: 21/04/2022

background(255, 255, 255);

// tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);
    
// stem
fill(48, 130, 31);
rect(176, 103, 12, 32); 
    
// take a bite out of the tomato!
//fill(255, 255, 255);
//ellipse(75, 200, 65, 65);
    
draw = function() {

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 60, 60);
};

