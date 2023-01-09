const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


class Ball {
    constructor(color, radius, x, y, speed) {
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

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

class Paddle {
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

function drawPaddle(paddle) {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.color;
    ctx.fill();
    ctx.closePath();
}

class PaddleController {
    paddle;

    connect(paddle) {
        this.paddle = paddle;
    }
}

class KeyBoardPaddleController extends PaddleController {
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

class OrientationPaddleController extends PaddleController {
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

class Brick {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function drawBrick(brick) {
    ctx.beginPath();
    ctx.rect(brick.x, brick.y, brick.width, brick.height);
    ctx.fillStyle = brick.color;
    ctx.fill();
    ctx.closePath();
}

function buildWall(blueprint) {
    borderOffset = canvas.height / 25;
    brickDistanceX = canvas.height / 40;
    brickDistanceY = canvas.height / 60;
    numBricksY = 4;
    numBricksX = 6;
    brickWidth = (canvas.width - 2 * borderOffset - (numBricksX - 1) * brickDistanceX) / numBricksX;
    brickHeight = (canvas.height * (2 / 5) - borderOffset - (numBricksY - 1) * brickDistanceY) / numBricksY;

    bricks = [];
    xCoord = borderOffset;
    yCoord = borderOffset;
    for (let y = 0; y < numBricksY; y++) {
        for (let x = 0; x < numBricksX; x++) {
            if (blueprint[y][x] == 1) {
                bricks.push(
                    new Brick(xCoord, yCoord, brickWidth, brickHeight, "black")
                )
            }
            xCoord = xCoord + brickWidth + brickDistanceX;
        }
        xCoord = borderOffset;
        yCoord = yCoord + brickHeight + brickDistanceY;
    }
    return bricks;
}

function drawWall(wall) {
    wall.forEach(brick => drawBrick(brick));
}

class GameStatus {
    static RUNNING = 0;
    static VICTORY = 1;
    static GAME_OVER = 2;
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(ball);
    drawPaddle(paddle);
    drawWall(wall);
}

function update() {
    if (wall.length == 0) {
        gameStatus = GameStatus.VICTORY;
    }

    ball.move();
    paddle.move();
    collitionDetection();
}

function ballCollitionDetection() {
    // collition with borders
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.bounceX();
    }
    if (ball.y < ball.radius) {
        ball.bounceY();
    }
    if (ball.y > canvas.height) {
        gameStatus = GameStatus.GAME_OVER;
    }

    //collition with paddle
    if (ball.y + ball.radius > paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {
        ball.bounceUp();
    }

    // collition with brick
    for (let i = 0; i < wall.length; i++) {
        if (isCollition(ball, wall[i])) {
            wall.splice(i, 1);
            ball.bounceY();
        }
    }
}

function isCollition(ball, brick) {
    return ball.y > brick.y
        && ball.y < brick.y + brick.height
        && ball.x > brick.x
        && ball.x < brick.x + brick.width;
}

function paddleCollitionDetection() {
    if (paddle.x < 0) {
        paddle.x = 0;
    }
    if (paddle.x + paddle.width > canvas.width) {
        paddle.x = canvas.width - paddle.width;
    }
}

function collitionDetection() {
    ballCollitionDetection();
    paddleCollitionDetection();
}

function handleGameState() {
    switch (gameStatus) {
        case GameStatus.GAME_OVER:
            alert("GAME OVER");
            document.location.reload();
            break;
        case GameStatus.VICTORY:
            alert("VICTORY");
            document.location.reload();
    }
}

function gameLoop() {
    draw();
    handleGameState();
    update();
    requestAnimationFrame(gameLoop);
}

var paddleWidth = width / 5;
var paddleHeight = height / 20;
var paddleOffset = paddleHeight / 2;
var paddle = new Paddle(
    (width - paddleWidth) / 2,
    height - paddleHeight - paddleOffset,
    paddleWidth,
    paddleHeight,
    "black",
    7,
    new OrientationPaddleController(),
);
ballRadius = canvas.height / 30;
var ball = new Ball(
    "black",
    ballRadius,
    width / 2,
    height - paddleHeight - paddleOffset - ballRadius,
    3
)

blueprintOne = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
];

blueprintTest = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
];

wall = buildWall(blueprintOne);

var gameStatus = GameStatus.RUNNING;

gameLoop();