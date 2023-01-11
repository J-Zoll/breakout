import { level1, levelTest } from "./level";
import { collitionDetection } from "./collition_detection";
import { Ball } from "./ball";
import { Paddle } from "./paddle";
import { GameStatus } from "./game_status";
import { Brick, buildWall } from "./brick.js";

import { OrientationPaddleController } from "../controller/orientation_paddle_controller.js";
import { KeyBoardPaddleController, KeyboardPaddleController } from "../controller/keyboard_paddle_controller.js";
import { ViewController } from "../controller/view_controller.js";
import { CollitionDetection } from "./collition_detection";

export class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var paddleWidth = canvas.width / 4;
        var paddleHeight = canvas.height / 20;
        var paddleOffset = paddleHeight / 2;
        this.paddle = new Paddle(
            (this.canvas.width - paddleWidth) / 2,
            this.canvas.height - paddleHeight - paddleOffset,
            paddleWidth,
            paddleHeight,
            "black",
            7,
            new OrientationPaddleController(),
        );

        var ballRadius = this.canvas.height / 30;
        this.ball = new Ball(
            this.canvas.width / 2,
            this.canvas.height - paddleHeight - paddleOffset - ballRadius,
            ballRadius,
            "black",
            3,
        );

        this.wall = buildWall(level1);
        this.gameStatus = GameStatus.RUNNING;

        this.viewController = new ViewController(canvas, this);
        this.collitionDetection = new CollitionDetection(this)
    }

    _handleGameStatus() {
        switch (this.gameStatus) {
            case GameStatus.GAME_OVER:
                alert("GAME OVER");
                document.location.reload();
                break;
            case GameStatus.VICTORY:
                alert("VICTORY");
                document.location.reload();
        }
    }

    _update() {
        if (this.wall.length == 0) {
            this.gameStatus = GameStatus.VICTORY;
        }
        this.ball.move();
        this.paddle.move();
        this.collitionDetection.run(this.ball, this.paddle, this.canvas, this.wall);
    }

    gameLoop() {
        this.viewController.draw();
        this._handleGameStatus();
        this._update();
        requestAnimationFrame(() => this.gameLoop());
    }
}