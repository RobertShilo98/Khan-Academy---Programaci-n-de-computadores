/* Autor: Khan Academy */

background(66, 17, 143);

var number = 50;

if (number <= 48) {
    // top left
    fill(255, 255, 0);
    ellipse(100, 100, 100, 100);
}

if (number >= 48) {
    // top right
    fill(0, 225, 255);
    ellipse(300, 100, 100, 100);
}

if (number === 48) {
    // bottom left
    fill(255, 25, 117);
    ellipse(100, 300, 100, 100);
}

if (number !== 48) {
    // bottom right
    fill(0, 255, 68);
    ellipse(300, 300, 100, 100);
}

