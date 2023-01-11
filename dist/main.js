/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/keyboard_paddle_controller.js":
/*!******************************************************!*\
  !*** ./src/controller/keyboard_paddle_controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyBoardPaddleController\": () => (/* binding */ KeyBoardPaddleController)\n/* harmony export */ });\n/* harmony import */ var _paddle_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle_controller.js */ \"./src/controller/paddle_controller.js\");\n\n\nclass KeyBoardPaddleController extends _paddle_controller_js__WEBPACK_IMPORTED_MODULE_0__.PaddleController {\n    constructor() {\n        super();\n\n        document.addEventListener(\"keydown\", (e) => this.keyDownHandler(e), false);\n        document.addEventListener(\"keyup\", (e) => this.keyUpHandler(e), false);\n    }\n\n    keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.paddle.changeDirection(\"right\");\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.paddle.changeDirection(\"left\");\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\" || e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.paddle.changeDirection(\"none\");\n        }\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/controller/keyboard_paddle_controller.js?");

/***/ }),

/***/ "./src/controller/orientation_paddle_controller.js":
/*!*********************************************************!*\
  !*** ./src/controller/orientation_paddle_controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrientationPaddleController\": () => (/* binding */ OrientationPaddleController)\n/* harmony export */ });\n/* harmony import */ var _paddle_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle_controller.js */ \"./src/controller/paddle_controller.js\");\n\n\nclass OrientationPaddleController extends _paddle_controller_js__WEBPACK_IMPORTED_MODULE_0__.PaddleController {\n    constructor() {\n        super();\n        window.addEventListener(\"deviceorientation\", (e) => this.handleOrientationEvent(e), true);\n    }\n\n    handleOrientationEvent(e) {\n        const beta = Math.round(e.beta);\n        const threshold = 7;\n        if (beta < -threshold) {\n            this.paddle.changeDirection(\"left\");\n        } else if (beta > threshold) {\n            this.paddle.changeDirection(\"right\");\n        } else {\n            this.paddle.changeDirection(\"none\");\n        }\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/controller/orientation_paddle_controller.js?");

/***/ }),

/***/ "./src/controller/paddle_controller.js":
/*!*********************************************!*\
  !*** ./src/controller/paddle_controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PaddleController\": () => (/* binding */ PaddleController)\n/* harmony export */ });\n/* harmony import */ var _model_paddle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/paddle.js */ \"./src/model/paddle.js\");\n\n\nclass PaddleController {\n    paddle;\n\n    connect(paddle) {\n        this.paddle = paddle;\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/controller/paddle_controller.js?");

/***/ }),

/***/ "./src/controller/view_controller.js":
/*!*******************************************!*\
  !*** ./src/controller/view_controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewController\": () => (/* binding */ ViewController)\n/* harmony export */ });\nclass ViewController {\n    constructor(canvas, game) {\n        this.canvas = canvas;\n        this.game = game;\n        this.ctx = canvas.getContext(\"2d\");\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n        this._drawBall(this.game.ball);\n        this._drawPaddle(this.game.paddle);\n        this._drawWall(this.game.wall);\n    }\n\n    _drawBall(ball) {\n        this.ctx.beginPath();\n        this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);\n        this.ctx.fillStyle = ball.color;\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    _drawPaddle(paddle) {\n        this.ctx.beginPath();\n        this.ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);\n        this.ctx.fillStyle = paddle.color;\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    _drawBrick(brick) {\n        this.ctx.beginPath();\n        this.ctx.rect(brick.x, brick.y, brick.width, brick.height);\n        this.ctx.fillStyle = brick.color;\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    _drawWall(wall) {\n        wall.forEach(brick => this._drawBrick(brick));\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/controller/view_controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/game */ \"./src/model/game.js\");\n\n\nvar game = new _model_game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\ngame.start();\n\n//# sourceURL=webpack://breakout/./src/index.js?");

/***/ }),

/***/ "./src/model/ball.js":
/*!***************************!*\
  !*** ./src/model/ball.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": () => (/* binding */ Ball)\n/* harmony export */ });\nclass Ball {\n    constructor(x, y, radius, color, speed) {\n        this.color = color;\n        this.radius = radius;\n        this.x = x;\n        this.y = y;\n        this.dx = speed;\n        this.dy = -speed;\n    }\n\n    move() {\n        this.x = this.x + this.dx;\n        this.y = this.y + this.dy;\n    }\n\n    bounceX() {\n        this.dx = -this.dx;\n    }\n\n    bounceY() {\n        this.dy = -this.dy;\n    }\n\n    bounceUp() {\n        this.dy = - Math.abs(this.dy);\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/model/ball.js?");

/***/ }),

/***/ "./src/model/brick.js":
/*!****************************!*\
  !*** ./src/model/brick.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Brick\": () => (/* binding */ Brick),\n/* harmony export */   \"buildWall\": () => (/* binding */ buildWall)\n/* harmony export */ });\nclass Brick {\n    constructor(x, y, width, height, color) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n    }\n}\n\nfunction buildWall(blueprint) {\n    let borderOffset = canvas.height / 25;\n    let brickDistanceX = canvas.height / 40;\n    let brickDistanceY = canvas.height / 60;\n    let numBricksY = 4;\n    let numBricksX = 6;\n    let brickWidth = (canvas.width - 2 * borderOffset - (numBricksX - 1) * brickDistanceX) / numBricksX;\n    let brickHeight = (canvas.height * (2 / 5) - borderOffset - (numBricksY - 1) * brickDistanceY) / numBricksY;\n\n    let bricks = [];\n    let xCoord = borderOffset;\n    let yCoord = borderOffset;\n    for (let y = 0; y < numBricksY; y++) {\n        for (let x = 0; x < numBricksX; x++) {\n            if (blueprint[y][x] == 1) {\n                bricks.push(\n                    new Brick(xCoord, yCoord, brickWidth, brickHeight, \"black\")\n                )\n            }\n            xCoord = xCoord + brickWidth + brickDistanceX;\n        }\n        xCoord = borderOffset;\n        yCoord = yCoord + brickHeight + brickDistanceY;\n    }\n    return bricks;\n}\n\n//# sourceURL=webpack://breakout/./src/model/brick.js?");

/***/ }),

/***/ "./src/model/collition_detection.js":
/*!******************************************!*\
  !*** ./src/model/collition_detection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CollitionDetection\": () => (/* binding */ CollitionDetection)\n/* harmony export */ });\n/* harmony import */ var _game_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_status */ \"./src/model/game_status.js\");\n\n\nclass CollitionDetection {\n    constructor(game) {\n        this.game = game;\n    }\n    _ballCollitionDetection(ball, paddle, canvas, wall) {\n        // collition with borders\n        if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {\n            ball.bounceX();\n        }\n        if (ball.y < ball.radius) {\n            ball.bounceY();\n        }\n        if (ball.y > canvas.height) {\n            this.game.gameStatus = _game_status__WEBPACK_IMPORTED_MODULE_0__.GameStatus.GAME_OVER;\n        }\n\n        //collition with paddle\n        if (ball.y + ball.radius > paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {\n            ball.bounceUp();\n        }\n\n        // collition with brick\n        for (let i = 0; i < wall.length; i++) {\n            if (this._isCollition(ball, wall[i])) {\n                wall.splice(i, 1);\n                ball.bounceY();\n            }\n        }\n    }\n\n    _isCollition(ball, brick) {\n        return ball.y > brick.y\n            && ball.y < brick.y + brick.height\n            && ball.x > brick.x\n            && ball.x < brick.x + brick.width;\n    }\n\n    _paddleCollitionDetection(paddle, canvas) {\n        if (paddle.x < 0) {\n            paddle.x = 0;\n        }\n        if (paddle.x + paddle.width > canvas.width) {\n            paddle.x = canvas.width - paddle.width;\n        }\n    }\n\n    run(ball, paddle, canvas, wall) {\n        this._ballCollitionDetection(ball, paddle, canvas, wall);\n        this._paddleCollitionDetection(paddle, canvas);\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/model/collition_detection.js?");

/***/ }),

/***/ "./src/model/game.js":
/*!***************************!*\
  !*** ./src/model/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/model/level.js\");\n/* harmony import */ var _collition_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collition_detection */ \"./src/model/collition_detection.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ \"./src/model/ball.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paddle */ \"./src/model/paddle.js\");\n/* harmony import */ var _game_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_status */ \"./src/model/game_status.js\");\n/* harmony import */ var _brick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brick.js */ \"./src/model/brick.js\");\n/* harmony import */ var _controller_orientation_paddle_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controller/orientation_paddle_controller.js */ \"./src/controller/orientation_paddle_controller.js\");\n/* harmony import */ var _controller_keyboard_paddle_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controller/keyboard_paddle_controller.js */ \"./src/controller/keyboard_paddle_controller.js\");\n/* harmony import */ var _controller_view_controller_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controller/view_controller.js */ \"./src/controller/view_controller.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util.js */ \"./src/util.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game {\n    constructor() {\n        this.startScreenMobile = document.getElementById(\"start-screen-mobile\");\n        this.startScreenDesktop = document.getElementById(\"start-screen-desktop\");\n        this.startScreen = (0,_util_js__WEBPACK_IMPORTED_MODULE_9__.isMobile)() ? this.startScreenMobile : this.startScreenDesktop;\n        this.gameOverScreen = document.getElementById(\"game-over-screen\");\n        this.victoryScreen = document.getElementById(\"victory-screen\");\n        this.canvas = document.getElementById(\"canvas\");\n\n        this._hideEverything();\n\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n\n        var paddleWidth = canvas.width / 4;\n        var paddleHeight = canvas.height / 20;\n        var paddleOffset = paddleHeight / 2;\n        var paddleController = (0,_util_js__WEBPACK_IMPORTED_MODULE_9__.isMobile)() ? new _controller_orientation_paddle_controller_js__WEBPACK_IMPORTED_MODULE_6__.OrientationPaddleController() : new _controller_keyboard_paddle_controller_js__WEBPACK_IMPORTED_MODULE_7__.KeyBoardPaddleController();\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_3__.Paddle(\n            (this.canvas.width - paddleWidth) / 2,\n            this.canvas.height - paddleHeight - paddleOffset,\n            paddleWidth,\n            paddleHeight,\n            \"black\",\n            7,\n            paddleController,\n        );\n\n        var ballRadius = this.canvas.height / 30;\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_2__.Ball(\n            this.canvas.width / 2,\n            this.canvas.height - paddleHeight - paddleOffset - ballRadius,\n            ballRadius,\n            \"black\",\n            3,\n        );\n\n        this.wall = (0,_brick_js__WEBPACK_IMPORTED_MODULE_5__.buildWall)(_level__WEBPACK_IMPORTED_MODULE_0__.level1);\n        this.gameStatus = _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.STARTING;\n\n        this.viewController = new _controller_view_controller_js__WEBPACK_IMPORTED_MODULE_8__.ViewController(canvas, this);\n        this.collitionDetection = new _collition_detection__WEBPACK_IMPORTED_MODULE_1__.CollitionDetection(this)\n    }\n\n    _handleGameStatus() {\n        switch (this.gameStatus) {\n            case _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.GAME_OVER:\n                this._handleGameOver();\n                break;\n            case _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.VICTORY:\n                this._handleVictroy();\n                break;\n        }\n    }\n\n    _update() {\n        if (this.wall.length == 0) {\n            this.gameStatus = _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.VICTORY;\n        }\n        this.ball.move();\n        this.paddle.move();\n        this.collitionDetection.run(this.ball, this.paddle, this.canvas, this.wall);\n    }\n\n    gameLoop() {\n        this.viewController.draw();\n        this._handleGameStatus();\n\n        if (this.gameStatus != _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.RUNNING) {\n            return;\n        }\n\n        this._update();\n        requestAnimationFrame(() => this.gameLoop());\n    }\n\n    _hideEverything() {\n        this.canvas.hidden = true;\n        this.startScreenMobile.hidden = true;\n        this.startScreenDesktop.hidden = true;\n        this.gameOverScreen.hidden = true;\n        this.victoryScreen.hidden = true;\n    }\n\n    start() {\n        // show start Screen\n        this.startScreen.hidden = false;\n        var startButton = this.startScreen.querySelector(\"#start-button\")\n        startButton.onclick = () => {\n            this._hideEverything();\n            this.canvas.hidden = false;\n            this.gameStatus = _game_status__WEBPACK_IMPORTED_MODULE_4__.GameStatus.RUNNING;\n            this.gameLoop();\n        };\n    }\n\n    _handleGameOver() {\n        //show victory screen\n        this._hideEverything();\n        this.gameOverScreen.hidden = false;\n        var playAgainButton = this.gameOverScreen.querySelector(\"#play-again-button\")\n        playAgainButton.onclick = () => window.location.reload();\n    }\n\n    _handleVictroy() {\n        //show victory screen\n        this._hideEverything();\n        this.victoryScreen.hidden = false;\n        var playAgainButton = this.victoryScreen.querySelector(\"#play-again-button\")\n        playAgainButton.onclick = () => window.location.reload();\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/model/game.js?");

/***/ }),

/***/ "./src/model/game_status.js":
/*!**********************************!*\
  !*** ./src/model/game_status.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameStatus\": () => (/* binding */ GameStatus)\n/* harmony export */ });\nclass GameStatus {\n    static STARTING = 0;\n    static RUNNING = 1;\n    static VICTORY = 2;\n    static GAME_OVER = 3;\n}\n\n//# sourceURL=webpack://breakout/./src/model/game_status.js?");

/***/ }),

/***/ "./src/model/level.js":
/*!****************************!*\
  !*** ./src/model/level.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"level1\": () => (/* binding */ level1),\n/* harmony export */   \"levelTest\": () => (/* binding */ levelTest)\n/* harmony export */ });\nconst level1 = [\n    [1, 1, 1, 1, 1, 1],\n    [1, 1, 1, 1, 1, 1],\n    [1, 1, 1, 1, 1, 1],\n    [1, 1, 1, 1, 1, 1],\n];\n\nconst levelTest = [\n    [0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 1, 0],\n];\n\n//# sourceURL=webpack://breakout/./src/model/level.js?");

/***/ }),

/***/ "./src/model/paddle.js":
/*!*****************************!*\
  !*** ./src/model/paddle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Paddle\": () => (/* binding */ Paddle)\n/* harmony export */ });\nclass Paddle {\n    constructor(x, y, width, height, color, speed, controller) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n        this.speed = speed;\n        this.controller = controller;\n\n        this.dx = 0;\n        this.controller.connect(this);\n    }\n\n    move() {\n        this.x = this.x + this.dx;\n    }\n\n    changeDirection(direction) {\n        switch (direction) {\n            case \"left\":\n                this.dx = -Math.abs(this.speed);\n                break;\n            case \"right\":\n                this.dx = Math.abs(this.speed);\n                break;\n            case \"none\":\n                this.dx = 0;\n                break;\n            default:\n                throw new Error(\"direction must be either 'left' or 'right'\");\n        }\n    }\n}\n\n//# sourceURL=webpack://breakout/./src/model/paddle.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nfunction isMobile() {\n    var is_mobile = false;\n    if (navigator.userAgent.match(/Android/i)\n        || navigator.userAgent.match(/webOS/i)\n        || navigator.userAgent.match(/iPhone/i)\n        || navigator.userAgent.match(/iPad/i)\n        || navigator.userAgent.match(/iPod/i)\n        || navigator.userAgent.match(/BlackBerry/i)\n        || navigator.userAgent.match(/Windows Phone/i)) {\n        is_mobile = true;\n    }\n    return is_mobile;\n}\n\n//# sourceURL=webpack://breakout/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;