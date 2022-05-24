/* Autor: Khan Academy */

background(255, 145, 0);
text("Click inside the rectangle:", 100, 95);
rect(100, 100, 150, 150);

mouseClicked = function() {
    //println("clicked!");
    println(mouseX);
    println(mouseY);
    println(mouseX > 100 && mouseX < 250);
    println(mouseY > 100 && mouseY < 250);
    if (mouseX > 100 && mouseX < 250 && mouseY > 100 && mouseY < 250) {
        println("inside the if! wooo!");
        rect(mouseX, mouseY, 5, 5);
    }
};

