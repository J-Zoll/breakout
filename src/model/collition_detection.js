import { GameStatus } from "./game_status";

export class CollitionDetection {
    constructor(game) {
        this.game = game;
    }
    _ballCollitionDetection(ball, paddle, canvas, wall) {
        // collition with borders
        if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
            ball.bounceX();
        }
        if (ball.y < ball.radius) {
            ball.bounceY();
        }
        if (ball.y > canvas.height) {
            this.game.gameStatus = GameStatus.GAME_OVER;
        }

        //collition with paddle
        if (ball.y + ball.radius > paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {
            ball.bounceUp();
        }

        // collition with brick
        for (let i = 0; i < wall.length; i++) {
            if (this._isCollition(ball, wall[i])) {
                wall.splice(i, 1);
                ball.bounceY();
            }
        }
    }

    _isCollition(ball, brick) {
        return ball.y > brick.y
            && ball.y < brick.y + brick.height
            && ball.x > brick.x
            && ball.x < brick.x + brick.width;
    }

    _paddleCollitionDetection(paddle, canvas) {
        if (paddle.x < 0) {
            paddle.x = 0;
        }
        if (paddle.x + paddle.width > canvas.width) {
            paddle.x = canvas.width - paddle.width;
        }
    }

    run(ball, paddle, canvas, wall) {
        this._ballCollitionDetection(ball, paddle, canvas, wall);
        this._paddleCollitionDetection(paddle, canvas);
    }
}