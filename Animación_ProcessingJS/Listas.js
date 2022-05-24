// Autor: Roberto Jaime Rico Sandoval.
// Fille: Objetos en JavaScript.
// Date: 22/ 05/ 2022

var torta = {
   
    Title: "Torta Gloria Trevi",
    
    Servings: 9,
    
    Ingredients: ["Milanesa de res", "Pierna ahumada", "Quesillo", "Chipotle", "Jitomate", "Cebolla", "Aguacate", "Telera"]
    
 };
 
 background(14, 125, 106);
 fill(255, 250, 255);
 textSize(20);
 
 text(torta.Title, 10, 23);
 text("Toping: " + torta.Servings, 10, 55);
 text("Ingredientes: " + torta.Ingredients[0] + "\n" + torta.Ingredients[1] + "\n" + torta.Ingredients[2] + "\n" + torta.Ingredients[3] + "\n" + torta.Ingredients[4] + "\n" + torta.Ingredients[5] + "\n" + torta.Ingredients[6] + "\n" + torta.Ingredients[7], 10, 85);