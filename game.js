//Objektvariablen
var agCar;
var agTrail;

//Variablen für Abmessungen etc.
var canvasSize = 1000;
var carSize = canvasSize/15;
var trailSize = canvasSize/25;

//diese p5.js-Standardfunktion wird zum Start einmal ausgeführt
function setup() {
    //die Leinwand wird erzeugt
    createCanvas(canvasSize, canvasSize);

    //Objekt des Autos wird erzeugt
    agCar = new AgCar();
    agTrail = [];
}

//diese p5.js-Standardfunktion wird Frame für Frame erneut ausgeführt
function draw() {
    //Hintergrund
    background(0,136,255);

    //Auto wird angezeigt
    agCar.show();

    //durch alle Spurelemente iterieren
    for(var i = agTrail.length - 1; i >= 0; i--) {
        //Spur anzeigen
        agTrail[i].show();
    }
}

function AgCar() {
    this.x = carSize;
    this.y = carSize;
    this.trail = [];

    this.show = function () {
        ellipse(this.x, this.y, carSize, carSize);
    }

    this.moveUp = function () {
        this.trackMovement();
        this.y = this.y - carSize;
    }

    this.moveDown = function () {
        this.trackMovement();
        this.y = this.y + carSize;
    }

    this.moveLeft = function () {
        this.trackMovement();
        this.x = this.x - carSize;
    }

    this.moveRight = function () {
        this.trackMovement();
        this.x = this.x + carSize;
    }

    this.trackMovement = function () {
        agTrail.push(new AgTrail(this.x, this.y));
    }
}

function AgTrail(x,y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        ellipse(this.x, this.y, trailSize, trailSize);
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        agCar.moveUp();
    }

    if (keyCode == DOWN_ARROW) {
        agCar.moveDown();
    }

    if (keyCode == LEFT_ARROW) {
        agCar.moveLeft();
    }

    if (keyCode == RIGHT_ARROW) {
        agCar.moveRight();
    }
}
