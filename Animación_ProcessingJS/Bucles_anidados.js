/* Autor: Khan Academy */

imageMode(CENTER);


for (var j = 0; j < 13; j++) {
    fill(255, 0, 0);
    text(j, 13, j*30+30);
    for (var i = 0; i < 12; i++) {
        fill(130, 56, 56);
        text(i, i*36, j*30+30);
        image(getImage("cute/Heart"), i*36, j*30, 40, 60);
    }
}

