import { PaddleController } from "./paddle_controller.js";

export class OrientationPaddleController extends PaddleController {
    constructor() {
        super();
        window.addEventListener("deviceorientation", (e) => this.handleOrientationEvent(e), true);
    }

    handleOrientationEvent(e) {
        const beta = Math.round(e.beta);
        const threshold = 7;
        if (beta < -threshold) {
            this.paddle.changeDirection("left");
        } else if (beta > threshold) {
            this.paddle.changeDirection("right");
        } else {
            this.paddle.changeDirection("none");
        }
    }
}