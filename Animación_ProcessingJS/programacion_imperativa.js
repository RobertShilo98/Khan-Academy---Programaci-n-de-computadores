// Autor: Roberto Jaime Rico Sandoval.
// Fille: Lluvia.
// Date: 21/ 05/ 2022

var xPositions = [Math.floor(Math.random()*400)];
var yPositions = [0];
var ey = 0;
var xImage = 0;
var tam = 40;
var nunX = 20;
var nunX2 = 20;

draw = function() {
    // Fondo.
    background(204, 247, 255);
    image(getImage("avatars/aqualine-ultimate"),xImage,340,70,50);
    fill(0, 200, 255);
    rect(0,370,401,31);

    // Creación y posicionamiento de las gotas.
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        if(yPositions[i] > 400){
            yPositions[i] = 0;
        }
        ellipse(xPositions[i], yPositions[i], random(5,10), random(5,10));
        yPositions[i] += random(2,7);
        
    }
    
    fill(224, 221, 224);
    ellipse(nunX,40,tam,tam);
    ellipse(nunX+25,40,tam,tam);
    ellipse(nunX+10,20,tam,tam);
    
    ellipse(nunX2+300,40,tam,tam);
    ellipse(nunX2+330,40,tam,tam);
    ellipse(nunX2+320,18,tam,tam);
    
    
    if(xImage < 350 && ey === 0){
        xImage++;
        nunX++;
        nunX2--;
    }
    if(xImage === 350){
        ey = 1;
    }
    if(xImage <= 350 && ey === 1){
        xImage--;
        nunX--;
        nunX2++;
    }
    if(xImage === 0){
        ey = 0;
    }
        
};

// Haacer más gotas haciendo click sobre el lienzo.
var mouseClicked = function(){
    xPositions.push(random(0,400));
    yPositions.push(0);
};

