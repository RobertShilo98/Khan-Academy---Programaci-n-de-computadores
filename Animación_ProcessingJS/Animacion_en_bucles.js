// Autor: Roberto Jaime Rico Sandoval.
// Fille: Una casa de campo.
// Date: 18/ 05/ 2022

background(219, 255, 255);

var x = 75;
var y =  0;
var y1 = 5;
var mx1 = 60;
var my = 165;
var mx2 = 340;

// Sol.
var sun = 0;
fill(247, 180, 10);
ellipse(sun,30,120,100);

fill(238, 208, 157);
rect(60, 150, 280, 207);

// Maderas.
for (var madera = 0; madera < 7; madera++){
    stroke(166, 108, 7);
    strokeWeight(2);
    line(mx1,my,mx2,my);
    my += 30;
}

strokeWeight(1);
fill(120, 80, 19);
rect(180, 280, 40, 77);

// Ventanas.
for (var ventana1 = 0; ventana1 < 3; ventana1++){
    image(getImage("cute/WindowTall"),x,160, 70, 70);
    x += 90;
}

// Pasto.
for (var pasto = 0; pasto < 4; pasto++){
    image(getImage("cute/GrassBlock"),y,330,100,90);
    y += 100;
}

// Arbustos.
for (var arb = 0; arb < 4; arb++){
    image(getImage("cute/TreeUgly"),y1,315,50,50);
    y1 += 110;
}

// Techo.
image(getImage("cute/RoofSouthWest"),40,35,100,120);
image(getImage("cute/RoofSouthEast"),260,35,100,120);
image(getImage("cute/RoofSouth"),139,35,121,120);

