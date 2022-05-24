/* Autor: Khan Academy */

var winston = {
    age: 19,
    eyes: "black",
    likes: ["programming", "being programmed"],
    isCool: true,
    birthplace: {
        city: "Mountain View",
        state: "California"
    }
  };
  
  fill(0, 0, 0);
  textSize(16);
  while(winston.age <= 40) {
      text("Winston is " + winston.age + " years old", 10, winston.age*20 - 350);
      winston.age++;
      if (winston.age === 30) {
          winston.wife = "Winnefer";
      }
      if (winston.age === 32) {
          winston.twins = ["Winston, JR", "Winstonia"];
      }
  }

