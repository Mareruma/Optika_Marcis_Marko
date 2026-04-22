// https://github.com/Mareruma/Optika_Marcis

// https://www.w3schools.com/CSS//css_padding.asp
// https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html
// https://p5js.org/reference/p5/text/
// https://p5js.org/reference/p5/round/
// CVG fizika, Tēma: "Optika"

let d, f, F;
let x, y;
let H, h;
let garums;
let koeficients;
let attela_apaksa;
let attela_augsa;

function setup() {
    new Canvas(400, 500);
    F = 50;
    garums = 50;
}

function update() {
    background("white");

    x = mouseX;
    y = mouseY;

    // Hitbox pārbaudes
    if (x >= 197) {
        x = 196;
    } else if (x <= 10) {
        x = 11;
    }
    if (y >= 390) {
        y = 389;
    } else if (y <= 10) {
        y = 11;
    }

    // Nepieciešamo lielumu aprēķini
    d = 200 - x;
    f = (F * d) / (d - F);
    h = 200 - y;
    H = (f * h) / d;
    koeficients = H / h;

    attela_augsa = 200 + H;
    attela_apaksa = attela_augsa - garums * koeficients;

    // Asis
    strokeWeight(1);
    stroke("black");
    line(0, 200, 400, 200);
    line(200, 0, 200, 400);
    
    //lēca
    strokeWeight(7);
    stroke("lightblue");
    line(200, 150, 200, 250);

    // Fokusa attālums 1
    strokeWeight(5);
    stroke("black");
    point(200 - F, 200);

    // Fokusa attālums 2
    strokeWeight(5);
    stroke("black");
    point(200 + F, 200);

    // 1. Principiālais stars
    strokeWeight(1);
    stroke("red");
    line(x, y, 200, y);
    line(200, y, 200 + f, attela_augsa);

    // 2. Principiālais stars
    strokeWeight(1);
    stroke("blue");
    line(x, y, 200 + f, attela_augsa);

    // 3. Principiālais stars
    strokeWeight(1);
    stroke("green");
    line(x, y, 200, attela_augsa);
    line(200, attela_augsa, 200 + f, attela_augsa);

    // Ķermeņa līnija
    strokeWeight(3);
    stroke("black");
    line(x, y, x, y + garums);

    // Attēla līnija
    strokeWeight(3);
    stroke("gray");
    line(200 + f, attela_apaksa, 200 + f, attela_augsa);


    // Mērvienību rādīšana
    strokeWeight(1);
    stroke("black");
    rect(0, 400, 405, 105);
    strokeWeight(0);
    textSize(15);
    text("F = "+ F + "px", 10, 415);
    text("d = " + d + "px", 10, 430);
    text("f = " + round(f) + "px", 10, 445);
    text("H = " + round(H) + "px", 10, 460);
    text("h = " + h + "px", 10, 475);

    text("x = " + x, 210, 415);
    text("y = " + y, 210, 430);

}