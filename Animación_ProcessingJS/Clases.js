// Autor: Roberto Jaime Rico Sandoval.
// Fille: Array en objeto.
// Date: 22/ 05/ 2022

var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "Vacaciones de terror",
        review: "Dross- Hoy no dormi !!"
    }
];

for (var i = 0; i < movies.length; i++){
    
    fill(84, 140, 209);
    textAlign(CENTER, CENTER);  // Alineación de textos.
    textSize(20);
    text(movies[i].title, 200, 50*i+30);
    textSize(15);
    text(movies[i].review, 200, 50*i+50);

}

