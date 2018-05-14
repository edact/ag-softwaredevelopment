//Objektvariablen
var agCar;
var agTrail;
var agGoal;

//Variablen für Abmessungen etc.
var canvasSize = 600;
var carSize = canvasSize/15;
var trailSize = canvasSize/25;
var goalX = -4;
var goalY = 4;

//diese p5.js-Standardfunktion wird zum Start einmal ausgeführt
function setup() {
    //die Leinwand wird erzeugt
    createCanvas(canvasSize, canvasSize);


    //Elemente sollen ohne Rahmen gezeichnet werden
    noStroke();

    //Objekt des Autos wird erzeugt
    agCar = new AgCar();
    agTrail = [];
    agGoal = new AgGoal();
}

//diese p5.js-Standardfunktion wird Frame für Frame erneut ausgeführt
function draw() {
    //Hintergrund
    background(0,136,255);

    //durch alle Spurelemente iterieren
    for(var i = agTrail.length - 1; i >= 0; i--) {
        //Spur anzeigen
        agTrail[i].show();
    }

    //Ziel wird angezeigt
    agGoal.show();

    //Auto wird angezeigt
    agCar.show();
}

function AgCar() {
    this.x = canvasSize/2;
    this.y = canvasSize/2;
    this.direction = 0;
    this.trail = [];

    this.show = function () {
        fill(0,0,255);
        translate(this.x, this.y);
        rotate(this.direction);
        triangle(-carSize/2, -carSize/2 + 5, -carSize/2, carSize/2 - 5, carSize/2,0);
        rotate(-this.direction);
        translate(-this.x, -this.y);
    }

    this.turnLeft = function() {
        this.direction -= PI/2;
    }

    this.turnRight = function() {
        this.direction += PI/2;
    }

    this.moveForward = function () {
        agTrail.push(new AgTrail(this.x, this.y));

        if(cos(this.direction) == 1) {
            this.x += carSize;
        }
        if(cos(this.direction) == -1) {
            this.x -= carSize;
        }

        if(sin(this.direction) == 1) {
            this.y += carSize;
        }
        if(sin(this.direction) == -1) {
            this.y -= carSize;
        }

        if(this.x - canvasSize/2 - agGoal.x == 0 && this.y - canvasSize/2 - agGoal.y == 0) {
            alert('YOU WON\n steps: '+agTrail.length);
        }
    }
}

function AgGoal() {
    this.x = carSize * round(random(-7.5, 7.5));
    this.x = carSize * goalX;
    this.y = carSize * round(random(-7.5, 7.5));
    this.y = carSize * goalY;

    this.show = function () {
        fill(255,255,0);
        translate(canvasSize/2, canvasSize/2);
        ellipse(this.x, this.y, carSize);
        translate(-canvasSize/2, -canvasSize/2);
    }
}

function AgTrail(x,y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        fill(0,0,255);
        ellipse(this.x, this.y, trailSize, trailSize);
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        agCar.moveForward();
    }

    if (keyCode == LEFT_ARROW) {
        agCar.turnLeft();
    }

    if (keyCode == RIGHT_ARROW) {
        agCar.turnRight();
    }
}
