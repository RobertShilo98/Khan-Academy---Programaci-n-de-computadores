// Autor: Roberto Jaime Rico Sandoval.
// Fille: Bucle While.
// Date: 15/ 05/ 2022

fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
var y = 0;

while(x < 350){
    text(x, x, 40);
    x += 50;
}

while(y < 350){
    text(y, 0, y);
    y += 50;
}

