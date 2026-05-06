// https://github.com/Mareruma/Optika_Marcis

// https://www.w3schools.com/CSS//css_padding.asp
// https://www.w3schools.com/jsref/jsref_abs.asp
// https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html
// https://p5js.org/reference/p5/text/
// https://p5js.org/reference/p5/round/
// CVG fizika, Tēma: "Optika"

let d, f, F;
let x, y;
let H, h;
let garums, platums;
let koeficients;
let attela_apaksa, attela_augsa, attela_augstums;
let kermenis, attels;
let zimulisImg;
let lielumsX, lielumsY; // ķermenim
let parveidojums;

let lielumsXa, lielumsYa; // attēlam

function preload() {
    zimulisImg = loadImage("pencil.jpg");
}

function setup() {
    new Canvas(400, 500);

    kermenis = new Sprite();
    attels = new Sprite();
    F = 50;
    platums = 40;
    garums = 100;
    parveidojums = 100;

    kermenis.img = zimulisImg;
    attels.img = zimulisImg;
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
    attela_apaksa = attela_augsa + garums * koeficients;

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

    kermenis.x = x;
    kermenis.y = y + garums /4;
    kermenis.physics = KINEMATIC;
    kermenis.scale = garums / zimulisImg.height;

    attela_augstums = garums * koeficients;
    attels.x = 200 + f;
    attels.y = attela_augsa - attela_augstums / 4;
    attels.scale = attela_augstums / zimulisImg.height;
    attels.physics = KINEMATIC;
    attels.rotation = 180;


    // Mērvienību rādīšana
    strokeWeight(1);
    stroke("black");
    rect(0, 400, 405, 105);
    strokeWeight(0);
    textSize(15);
    text("F = "+ F / parveidojums + "m", 10, 415);
    text("d = " + d / parveidojums + "m", 10, 430);
    text("f = " + round(f / parveidojums, 2) + "m", 10, 445);
    text("H = " + round(H / parveidojums, 2) + "m", 10, 460);
    text("h = " + round(h / parveidojums, 2) + "m", 10, 475);

    text("x = " + x / parveidojums + "m", 210, 415);
    text("y = " + round(y / parveidojums, 2) + "m", 210, 430);
    text("1m = " + parveidojums + "px", 210, 475);

}