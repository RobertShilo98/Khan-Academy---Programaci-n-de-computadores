/* Auto: Khan Academy */

var drawWinston = function(facePosition) {
    var faceX = facePosition.x;
    var faceY = facePosition.y;
    
    fill(255, 255, 0);
    ellipse(faceX, faceY, 180, 180); // face
    fill(46, 46, 41);
    ellipse(faceX - 30, faceY - 50, 30, 30); // eyes
    ellipse(faceX + 44, faceY - 55, 30, 30);
    fill(252, 65, 65);
    ellipse(faceX + 19, faceY + 32, 82, 81); // mouth
};

var positions = [
  {x: 99, y: 117},
  {x: 294, y: 5},
  {x: 101, y: 316},
  {x: 294, y: 316},
  {x: 200, y: 200}
];
for (var i = 0; i < positions.length; i++) {
    drawWinston(positions[i]);
}

