// Autor: ROberto Jaime Rico Sandoval
// Fille: Loop en array.
// Date: 19/ 05/ 2022

var animal = ["Dog", "Cat", "Perico","Señor","Internet"];
var x = 0;

while(x < animal.length){
    fill(7, 128, 122);
    text(animal[x],x * 70 + 10,x * 30 + 20);
    x++;
}

