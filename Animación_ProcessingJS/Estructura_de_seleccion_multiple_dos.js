// Autor: Roberto Jaime Rico Sandoval.
// Fille: COndicionales.
// Date: 15/ 05/ 2022


// Escena.
background(0, 0, 0);

fill(255, 255, 255);
rect(11,10,160,64);
textSize(20);
fill(0, 0, 0);
text("Richter Scale:", 28, 45);

// Metrics.

noStroke();
fill(60, 0, 255);
rect(12,330,25,30);
fill(2, 130, 29);
rect(12,300,25,30);
fill(199, 135, 6);
rect(12,270,25,30);
fill(199, 43, 8);
rect(12,240,25,30);
fill(199, 10, 35);
rect(12,205,25,30);

fill(255, 255, 255);
textSize(16);
text("Normal",50,360);
text("Anormal",50,325);
text("Shaking",50,293);
text("Shaking Serious",50,260);
text("Earthquake",50,225);

// Scale Card.

var answer = random(0,10);
answer = answer.toFixed(1);

if (answer > 0 && answer < 1) {
    
    fill(60, 0, 255);
    noStroke();
    rect(280,149,110,149);
    fill(255, 255, 255);
    textSize(17);
    text("Scale Normal:", 283, 200);
    textSize(50);
    text(answer, 301, 267);
    
}
else if(answer > 0 && answer <= 2){
    
    fill(2, 130, 29);
    noStroke();
    rect(270,149,124,148);
    fill(255, 255, 255);
    textSize(17);
    text("Scale Anormal:", 276, 200);
    textSize(50);
    text(answer, 299, 267);
}
else if(answer > 2 && answer <= 4){
    
    fill(199, 135, 6);
    noStroke();
    rect(270,149,124,148);
    fill(255, 255, 255);
    textSize(17);
    text("Scale Shaking:", 276, 200);
    textSize(50);
    text(answer, 300, 267);
}
else if(answer > 4 && answer <= 6){
    
    fill(199, 43, 8);
    noStroke();
    rect(242,149,152,148);
    fill(255, 255, 255);
    textSize(14);
    text("Scale Shaking Serious:", 247, 200);
    textSize(50);
    text(answer, 285, 267);
} else {
    fill(199, 10, 35);
    noStroke();
    rect(226,149,171,142);
    fill(255, 255, 255);
    textSize(17);
    text("ALERT!! Earthquake", 235, 200);
    textSize(50);
    text(answer, 285, 267);
}

