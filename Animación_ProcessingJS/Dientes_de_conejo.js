// Autor: Roberto Jaime Rico Sandoval.
// Fille: Bad Bunny.
// Date: 28/ 03/ 2022

var eyes = 20;
var tooth = 15;

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, eyes, eyes);  // left eye
ellipse(230, 150, eyes, eyes);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, tooth); // left tooth
rect(200, 200, 15, tooth); // right tooth

