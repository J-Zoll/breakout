import { PaddleController } from "./paddle_controller.js";

export class KeyBoardPaddleController extends PaddleController {
    constructor() {
        super();

        document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
    }

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.paddle.changeDirection("right");
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.changeDirection("left");
        }
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.changeDirection("none");
        }
    }
}