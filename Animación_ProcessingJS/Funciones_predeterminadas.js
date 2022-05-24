// Autor: Roberto Jaime Rico Sandoval.
// Fille: Modificación de objetos.
// Date: 22/ 05/ 2022

var paintBrush = {
    x: 100,
    y: 100,
    img: getImage("avatars/duskpin-seed")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function(){
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    
    paintCanvas();
};

