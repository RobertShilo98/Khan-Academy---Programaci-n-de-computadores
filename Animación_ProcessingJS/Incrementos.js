/**
Autor: Roberto Jaime Rico Sandoval.
Fille: Incrementos.
Date: 23/ 04/ 2022
**/

var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

// Boca de la rana ramona-mamona.
fill(5, 5, 5);
ellipse(x, y, 156, 60);

//Pupilas de la rana ramona-mamona.
rect(x - 57, y - 55, 13, 13);
rect(x + 43, y - 55, 13, 13);

