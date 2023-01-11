import { Paddle } from "../model/paddle.js";

export class PaddleController {
    paddle;

    connect(paddle) {
        this.paddle = paddle;
    }
}