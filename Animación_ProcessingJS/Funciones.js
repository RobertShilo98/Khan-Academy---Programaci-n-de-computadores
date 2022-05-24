/* Autor: Khan Academy */

var drawWinston = function(faceX, faceY) {
    
    fill(255, 255, 0);
    ellipse(faceX, faceY, 190, 190); // face
    fill(46, 46, 41);
    ellipse(faceX - 30, faceY - 50, 30, 30); // eyes
    ellipse(faceX + 44, faceY - 55, 30, 30);
    fill(252, 65, 65);
    ellipse(faceX + 19, faceY + 32, 82, 81); // mouth
};

fill(255, 0, 0);
text("Toddler Winston:", 10, 20);
text("Teenage Winston:", 200, 20);
text("Twenty-Something Winston:", 10, 220);
text("Adult Winston:", 200, 220);
drawWinston(99, 117);
drawWinston(288, 142);
drawWinston(122, 322);
drawWinston(266, 321);

