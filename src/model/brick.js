export class Brick {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

export function buildWall(blueprint) {
    let borderOffset = canvas.height / 25;
    let brickDistanceX = canvas.height / 40;
    let brickDistanceY = canvas.height / 60;
    let numBricksY = 4;
    let numBricksX = 6;
    let brickWidth = (canvas.width - 2 * borderOffset - (numBricksX - 1) * brickDistanceX) / numBricksX;
    let brickHeight = (canvas.height * (2 / 5) - borderOffset - (numBricksY - 1) * brickDistanceY) / numBricksY;

    let bricks = [];
    let xCoord = borderOffset;
    let yCoord = borderOffset;
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