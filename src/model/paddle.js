export class Paddle {
    constructor(x, y, width, height, color, speed, controller) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.controller = controller;

        this.dx = 0;
        this.controller.connect(this);
    }

    move() {
        this.x = this.x + this.dx;
    }

    changeDirection(direction) {
        switch (direction) {
            case "left":
                this.dx = -Math.abs(this.speed);
                break;
            case "right":
                this.dx = Math.abs(this.speed);
                break;
            case "none":
                this.dx = 0;
                break;
            default:
                throw new Error("direction must be either 'left' or 'right'");
        }
    }
}