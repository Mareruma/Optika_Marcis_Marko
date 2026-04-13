let kermenis, attels;
let d, f, F;

function setup() {
    new Canvas(400, 400);

    kermenis = new Sprite();
    kermenis.strokeWeight = 0;
    kermenis.x = 30;
    kermenis.y = 30;
    kermenis.w = 50;
    kermenis.h = 50;
    kermenis.color = "red";

    attels = new Sprite();
    attels.strokeWeight = 0;
    attels.x = 370;
    attels.y = 370;
    attels.w = 50;
    attels.h = 50;
    attels.color = "green";

}

function update() {

    background("white");

    kermenis.x = mouseX;
    kermenis.y = mouseY;

    // Rāmis
    strokeWeight(1);
    stroke("black");
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);


    // Fokusa attālums 1
    strokeWeight(5);
    point(200 - F, 200);

    // Fokusa attālums 2
    strokeWeight(5);
    point(200 + F, 200);

    // 1. Principiālais stars
    strokeWeight(1);
    stroke("red");
    line(kermenis.x, kermenis.y, 200, kermenis.y);
    line(200, kermenis.y, attels.x, attels.y);

    // 2. Principiālais stars
    strokeWeight(1);
    stroke("blue");
    line(kermenis.x, kermenis.y, attels.x, attels.y);

    // 3. Principiālais stars
    strokeWeight(1);
    stroke("green");
    line(kermenis.x, kermenis.y, 200, attels.y);
    line(200, attels.y, attels.x, attels.y);


    // formula ir F = (d*f)/(d+f)
    d = 200 - kermenis.x;
    if(d < 0){
        d *= -1;
    }
    f = 400 - attels.x;
    if(f < 0){
        f *= -1;
    }
    F = (d*f)/(d+f);
    if(F < 0){
        F *= -1;
    }


    attels.x = 400 - kermenis.x;
    attels.y = 400 - kermenis.y;

    if (kb.presses(" ")) {
        paraditAprekinus(); 
    }
}

function paraditAprekinus() {
    alert("F = " + F + "px" + "\n" + "f = " + f + "px" + "\n" + "d = " + d + "px");
    

}
