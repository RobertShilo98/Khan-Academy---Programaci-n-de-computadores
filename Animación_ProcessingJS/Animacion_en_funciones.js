// Autor: Roberto Jaime Rico Sandoval.
// Fille: Pecesillou.
// Date: 13/ 05/ 2022

/*SI presionas el canvas, se dibujaran burbujas y peces :)*/

var cantidadP = 1;

// Fondo/escenario.
background(15, 150, 191);
noStroke();

fill(209, 177, 90);
rect(-2,333,406,73, 5);
stroke(77, 51, 3);
strokeWeight(5);
point(59,365);
point(44,382);
point(44,346);
point(149,346);
point(193,371);
point(164,371);
point(132,394);
point(276,394);
point(325,369);
point(369,340);

image(getImage("cute/ChestClosed"),144,346,40,40);
image(getImage("cute/TreeTall"), -7,190,39,236);
image(getImage("cute/TreeTall"), 78,260,51,236);
image(getImage("cute/TreeTall"), 202,190,53,236);

draw = function(){
    var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
        
        var colores1 = floor(random(0, 250));
        var colores2 = floor(random(0, 250));
        var colores3 = floor(random(0, 250));
    
        var centerX;
        var centerY;
        var bodyLength;
        var bodyHeight;
        var bodyColor;
    
        noStroke();
        fill(bodyColor);
    
        // body
        ellipse(centerX, centerY, bodyLength, bodyHeight);
    
        // tail
        var tailWidth = bodyLength/4;
        var tailHeight = bodyHeight/2;
        triangle(centerX-bodyLength/2, centerY,
            centerX-bodyLength/2-tailWidth, centerY-tailHeight,
            centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    
        // eye
        fill(33, 33, 33);
        ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
    
    };
    
    // Burbujas.
    mouseClicked = function(){
    
        var tamB = Math.floor(Math.random()*30);
        stroke(204, 229, 237);
        strokeWeight(tamB);
        point(mouseX,mouseY);
        
        if (mouseClicked){
            // Invocación de las funciones.
            drawFish(floor(random(-1, 375)), floor(random(20, 385)), floor(random(-100, 100)),     floor(random(40, 80)), color(floor(random(0,250)),floor(random(0,250)),floor(random(0,250))));
            
        }
};
    
};

