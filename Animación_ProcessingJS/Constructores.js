/* Autor: Roberto Jaime Rico Sandoval */

// Object oriented programming

/* 
 Winston
 - nickname
 - age
 - x 
 - y
*/
var Winston = function(nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

var drawWinston = function(winston) {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, winston.x, winston.y);
    var txt = winston.nickname + ", " + winston.age;
    text(txt, winston.x+20, winston.y-10);
};

drawWinston(winstonTeen);
drawWinston(winstonAdult);

