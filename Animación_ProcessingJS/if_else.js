/* Autor: Khan Academy */

// generate a random number between 0 and 1
var number = random(0, 1);

var integer = round(number);

// display the text
fill(0, 0, 0);
textSize(100);
text(number, 100, 110);
text(integer, 160, 350);

if (integer === 0) {
    fill(132, 0, 255);
} 
else {
    fill(217, 255, 0);
}

ellipse(200, 200, 100, 100);

