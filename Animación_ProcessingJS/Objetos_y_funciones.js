// Autor: Roberto Jaime Rico Sandoval.
// Fille: Estante.
// Date: 23/ 05/ 2022

var x;
var y;
var xWord = 13;
var xGem = 13;
var estanteY = 120;

// Clase libro.
var booksOne = [
    {
       title: "The Giver",
       autor: "Sepa la burguer",
       cali: 2,
       recom: undefined,
    },
    
    {
       title: "El libro vaquero",
       autor: "El pajero 1997",
       cali: 5,
       recom: undefined,
    },
    
    {
       title: "El del Jairo Cortez",
       autor: "Señor Cortinaz",
       cali: 0,
       recom: undefined,
    },
    
    {
       title: "El uriel",
       autor: "Un pinche naco",
       cali: 5,
       recom: undefined,
    },
    
    {
       title: "The Dog",
       autor: "King",
       cali: 4.5,
       recom: undefined,
    },
    
    {
       title: "HP lovecraft",
       autor: "The tulum",
       cali: 3,
       recom: undefined,
    },
    
    {
       title: "The place",
       autor: "KFar caspian",
       cali: 5,
       recom: undefined,
    },
    
    {
       title: "Siwawawi",
       autor: "El naquiel",
       cali: 1,
       recom: undefined,
    },
]; 
    

// Dibujar estante.
for(var iter = 0; iter < 2; iter++){
    fill(173, 117, 33);
    rect(0, estanteY, width, 10);
    
    estanteY += 180;
}


var librero = function(x, y){
    
    for (var i = 0; i < booksOne.length; i++) {
    
    // Dibujo del color del libro.
    fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
    
    // Titulo y autor del libro.
    rect(x,y,80,80);
    textSize(9);
    fill(156, 148, 148);
    text(booksOne[i].title, xWord, 60);
    textSize(10);
    fill(10, 10, 10);
    text(booksOne[i].autor, xWord,80);
    
    // Puntuación del libro.
    if(booksOne[i].cali <= 0){
        fill(227, 24, 20);
        textSize(20);
        text(booksOne[i].cali,xWord + 33,164);
        booksOne[i].recom = false;
    }
    
    else if(booksOne[i].cali > 0 && booksOne[i].cali < 3){
        fill(20, 107, 227);
        textSize(20);
        text(booksOne[i].cali,xWord + 33,164);
        booksOne[i].recom = true;
    }else{
        fill(19, 153, 9);
        textSize(20);
        text(booksOne[i].cali,xWord + 33,164);
        booksOne[i].recom = true;
    }
    
    // Libros no recomendados.
    if(booksOne[i].recom === false){
        fill(204, 16, 16);
        rect(x, 98, 80,20);
        fill(255, 255, 255);
        textSize(9);
        text("No recomendado", x + 5, 112);
    }
    
    xWord += 100;
    x += 100;

}

}; 

librero(10, 38);
librero(10, 218);

