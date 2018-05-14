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
