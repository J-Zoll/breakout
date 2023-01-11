export class ViewController {
    constructor(canvas, game) {
        this.canvas = canvas;
        this.game = game;
        this.ctx = canvas.getContext("2d");
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this._drawBall(this.game.ball);
        this._drawPaddle(this.game.paddle);
        this._drawWall(this.game.wall);
    }

    _drawBall(ball) {
        this.ctx.beginPath();
        this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = ball.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    _drawPaddle(paddle) {
        this.ctx.beginPath();
        this.ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
        this.ctx.fillStyle = paddle.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    _drawBrick(brick) {
        this.ctx.beginPath();
        this.ctx.rect(brick.x, brick.y, brick.width, brick.height);
        this.ctx.fillStyle = brick.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    _drawWall(wall) {
        wall.forEach(brick => this._drawBrick(brick));
    }
}