export class Ball {
    constructor(x, y, radius, color, speed) {
        this.color = color;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = speed;
        this.dy = -speed;
    }

    move() {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }

    bounceX() {
        this.dx = -this.dx;
    }

    bounceY() {
        this.dy = -this.dy;
    }

    bounceUp() {
        this.dy = - Math.abs(this.dy);
    }
}