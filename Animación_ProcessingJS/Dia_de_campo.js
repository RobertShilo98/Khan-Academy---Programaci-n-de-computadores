// Autor: Roberto Jaime Rico Sandoval.
// Fille: La cena.
// Date: 20/ 04/ 2022

var f = createFont("roboto");

noStroke();

// Mantel base 1.
fill(207, 8, 8);
rect(0, 1, 108, 138);
rect(216, 1, 108, 138);
rect(108, 139, 108, 138);
rect(0, 277, 108, 121);
rect(216, 277, 108, 121);

// Mantel base 2.
fill(247, 244, 244);
rect(108, 1, 108, 138);
rect(0, 139, 108, 138);
rect(216, 139, 108, 138);
rect(108, 277, 108, 121);

// Pasto.
fill(17, 133, 46);
rect(324, 1, 75, 397);

// Plato largo argentino.
stroke(8, 0, 8);
fill(235, 240, 236);
rect(78, 31, 165, 334);
stroke(23, 0, 173);
rect(86, 45, 148, 304);

// Matahambre (Corte de carne).
fill(79, 59, 27);
stroke(163, 148, 150);
rect(101, 57, 118, 205, 15);

// Grill de la carne (Marcas por el asador)
strokeWeight(2.5);
stroke(8, 1, 2);
line(106,97,192,62);
line(106,132,209,83);
line(106,171,209,122);
line(106,210,209,161);
line(106,248,209,198);
line(134,261,213,229);

// Plato pequeño hondo.
strokeWeight(0.75);
fill(222, 222, 222);
ellipse(118,329,45,45);

// Plato mediano hondo.
strokeWeight(0.75);
fill(222, 222, 222);
ellipse(194,317,80,80);
ellipse(194,317,70,70);
// Papas azadas con orégano.
fill(219, 216, 17);
ellipse(194,317,20,18);
ellipse(194,299,20,18);
ellipse(194,338,20,18);
ellipse(171,317,20,18);
ellipse(213,329,20,18);
ellipse(215,309,20,18);
strokeWeight(2);
fill(148, 114, 59);
point(194, 317); point(190, 317);
point(194, 299); point(190, 299);
point(194, 338); point(190, 338);
point(171, 317); point(167, 320);
point(217, 305); point(212, 309);
point(212, 329); point(215, 334);
stroke(17, 74, 16);
point(195, 344); point(210, 334);
point(174, 335); point(179, 344);
point(167, 328); point(188, 328);
point(177, 328); point(171, 310);
point(183, 307); point(176, 298);
point(199, 318); point(199, 302);
point(225, 328); point(218, 328);
point(217, 295); point(208, 297);

// Salsa tipo chimichurri.
fill(14, 77, 26);
ellipse(118,329,35,35);
strokeWeight(4);
stroke(1, 3, 1);
point(109, 328);
point(119, 338);
stroke(226, 237, 19);
point(119, 317);
point(123, 328);
point(111, 339);

// Pan tipo baguette.
fill(237, 180, 90);
stroke(74, 59, 4,181);
strokeWeight(1);
ellipse(48,265,51,181);
// respiraderos del pan.
fill(242, 217, 179);
stroke(92, 83, 48,181);
strokeWeight(0.5);
rotate(25);
ellipse(176,257,13,62);
rotate(18);
ellipse(217,161,13,62);
rotate(25);
ellipse(227,42,13,42);

// Firma.
rotate(-71);
textFont(f);
fill(0, 0, 0);
text("R . R . S", 253, 394);

