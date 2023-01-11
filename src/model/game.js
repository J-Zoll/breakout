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
import { isMobile } from "../util.js";

export class Game {
    constructor() {
        this.startScreenMobile = document.getElementById("start-screen-mobile");
        this.startScreenDesktop = document.getElementById("start-screen-desktop");
        this.startScreen = isMobile() ? this.startScreenMobile : this.startScreenDesktop;
        this.gameOverScreen = document.getElementById("game-over-screen");
        this.victoryScreen = document.getElementById("victory-screen");
        this.canvas = document.getElementById("canvas");

        this._hideEverything();

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var paddleWidth = canvas.width / 4;
        var paddleHeight = canvas.height / 20;
        var paddleOffset = paddleHeight / 2;
        var paddleController = isMobile() ? new OrientationPaddleController() : new KeyBoardPaddleController();
        this.paddle = new Paddle(
            (this.canvas.width - paddleWidth) / 2,
            this.canvas.height - paddleHeight - paddleOffset,
            paddleWidth,
            paddleHeight,
            "black",
            7,
            paddleController,
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
        this.gameStatus = GameStatus.STARTING;

        this.viewController = new ViewController(canvas, this);
        this.collitionDetection = new CollitionDetection(this)
    }

    _handleGameStatus() {
        switch (this.gameStatus) {
            case GameStatus.GAME_OVER:
                this._handleGameOver();
                break;
            case GameStatus.VICTORY:
                this._handleVictroy();
                break;
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

        if (this.gameStatus != GameStatus.RUNNING) {
            return;
        }

        this._update();
        requestAnimationFrame(() => this.gameLoop());
    }

    _hideEverything() {
        this.canvas.hidden = true;
        this.startScreenMobile.hidden = true;
        this.startScreenDesktop.hidden = true;
        this.gameOverScreen.hidden = true;
        this.victoryScreen.hidden = true;
    }

    start() {
        // show start Screen
        this.startScreen.hidden = false;
        var startButton = this.startScreen.querySelector("#start-button")
        startButton.onclick = () => {
            this._hideEverything();
            this.canvas.hidden = false;
            this.gameStatus = GameStatus.RUNNING;
            this.gameLoop();
        };
    }

    _handleGameOver() {
        //show victory screen
        this._hideEverything();
        this.gameOverScreen.hidden = false;
        var playAgainButton = this.gameOverScreen.querySelector("#play-again-button")
        playAgainButton.onclick = () => window.location.reload();
    }

    _handleVictroy() {
        //show victory screen
        this._hideEverything();
        this.victoryScreen.hidden = false;
        var playAgainButton = this.victoryScreen.querySelector("#play-again-button")
        playAgainButton.onclick = () => window.location.reload();
    }
}