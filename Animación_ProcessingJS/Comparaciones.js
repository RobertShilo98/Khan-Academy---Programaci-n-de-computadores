// Autor: Roberto Jaime Rico Sandoval.
// Fille: Condicionales.
// Date: 14/ 05/ 2022

var theNumber = random(-15, 15);
var redom = round(theNumber);

fill(0, 0, 0);
textSize(30);
text("Analysis of: " + redom, 10, 36);

text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);

noFill();

if (redom > 0){
    stroke(19, 156, 12);
    rect(5, 60, 200, 40);
}

if (redom < 0){
    stroke(227, 25, 18);
    rect(5, 109, 200, 40);
}

if (redom === 0){
    stroke(9, 100, 235);
    rect(5, 155, 200, 40);
}

