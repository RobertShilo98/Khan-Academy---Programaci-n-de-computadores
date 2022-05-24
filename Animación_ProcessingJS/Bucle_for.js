// Autor: Roberto Jaime Rico Sandoval.
// Fille: Bucle for.
// Date: 17/ 05/ 2022

background(255, 255, 247);
stroke(173, 222, 237);


// Rayas horizontales.
for (var i = 0; i < 20; i++) {
    var lineY = 20 + (i * 20);
    line(0, lineY, 400, lineY);
}

// Rayas verticales.
for (var x = 0; x < 20; x++){
    var lineX = 20 + (x * 20);
    line(lineX, 0, lineX, 400);
}

