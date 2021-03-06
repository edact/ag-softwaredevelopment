//Objektvariablen
var agCommands;
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

    //Objekt für die Kommandos wird erzeugt
    agCommands = new AgCommands();

    //Objekt des Autos wird erzeugt
    agCar = new AgCar();

    //Array für die Autospur wird erzeugt
    agTrail = [];

    //Objekt für das Ziel wird erzeugt
    agGoal = new AgGoal();

    //Kommandos werden ausgeführt
    agCommands.execute();
}

//diese p5.js-Standardfunktion wird Frame für Frame erneut ausgeführt
function draw() {
    //Hintergrund
    background(0,136,255);

    //durch alle Spurelemente iterieren
    for(var i = agTrail.length - 1; i >= 0; i--) {
        //Spurelement anzeigen
        agTrail[i].show();
    }

    //Ziel wird angezeigt
    agGoal.show();

    //Auto wird angezeigt
    agCar.show();

    //Gitter wird gezeichnet
    for(i = -7; i <= 7; i++) {
        for(j = -7; j <= 7; j++) {
            translate(canvasSize/2, canvasSize/2);
            noFill();
            rectMode(CENTER);
            stroke(33,33,33);
            rect(carSize * i, carSize * j, carSize, carSize);
            translate(-canvasSize/2, -canvasSize/2);
        }
    }
}

//Klasse für das Ziel, das erreicht werden soll
function AgGoal() {
    this.x = carSize * goalX;
    this.y = carSize * goalY;

    //Ziel anzeigen
    this.show = function () {
        fill(255,255,0);
        translate(canvasSize/2, canvasSize/2);
        ellipse(this.x, this.y, carSize);
        translate(-canvasSize/2, -canvasSize/2);
    }
}

//Klasse für ein Spurelement, das durch das Auto erzeugt wird
function AgTrail(x,y) {
    this.x = x;
    this.y = y;

    //Spurelement anzeigen
    this.show = function() {
        fill(0,0,255);
        ellipse(this.x, this.y, trailSize, trailSize);
    }
}
