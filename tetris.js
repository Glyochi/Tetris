document.addEventListener('DOMContentLoaded', () => {

    //Color ___ Color ___ Color ___ Color
    const color = ['grey', 'black', 'rgba(255,192,203,1)', 'cyan', 'yellow', 'rgba(255,75,194', 'blue', 'orange', 'green', 'red', "grey"];
    const none = 0;
    const background = 1;
    const shadowColor = 2;
    const straightColor = 3;
    const squareColor = 4;
    const TColor = 5;
    const LLColor = 6;
    const LRColor = 7;
    const skewRColor = 8;
    const skewLColor = 9;
    //everything from 2 -> above is collidable


    const straight = [
        [
            [none, none, none, none],
            [straightColor, straightColor, straightColor, straightColor],
            [none, none, none, none],
            [none, none, none, none]
        ],

        [
            [none, none, straightColor, none],
            [none, none, straightColor, none],
            [none, none, straightColor, none],
            [none, none, straightColor, none]
        ],

        [
            [none, none, none, none],
            [none, none, none, none],
            [straightColor, straightColor, straightColor, straightColor],
            [none, none, none, none]
        ],

        [
            [none, straightColor, none, none],
            [none, straightColor, none, none],
            [none, straightColor, none, none],
            [none, straightColor, none, none]
        ]
    ];

    const square = [
        [
            [none, squareColor, squareColor, none],
            [none, squareColor, squareColor, none],
            [none, none, none, none],
            [none, none, none, none],
        ],
        [
            [none, squareColor, squareColor, none],
            [none, squareColor, squareColor, none],
            [none, none, none, none],
            [none, none, none, none],
        ],
        [
            [none, squareColor, squareColor, none],
            [none, squareColor, squareColor, none],
            [none, none, none, none],
            [none, none, none, none],
        ],
        [
            [none, squareColor, squareColor, none],
            [none, squareColor, squareColor, none],
            [none, none, none, none],
            [none, none, none, none],
        ],
    ];
    const T = [
        [
            [none, TColor, none],
            [TColor, TColor, TColor],
            [none, none, none],
        ],
        [
            [none, TColor, none],
            [none, TColor, TColor],
            [none, TColor, none],
        ],
        [
            [none, none, none],
            [TColor, TColor, TColor],
            [none, TColor, none],

        ],
        [
            [none, TColor, none],
            [TColor, TColor, none],
            [none, TColor, none],
        ],
    ]
    const LL = [
        [
            [LLColor, none, none],
            [LLColor, LLColor, LLColor],
            [none, none, none],
        ],
        [
            [none, LLColor, LLColor],
            [none, LLColor, none],
            [none, LLColor, none],
        ],
        [
            [none, none, none],
            [LLColor, LLColor, LLColor],
            [none, none, LLColor],
        ],
        [
            [none, LLColor, none],
            [none, LLColor, none],
            [LLColor, LLColor, none],
        ],

    ]
    const LR = [
        [
            [none, none, LRColor],
            [LRColor, LRColor, LRColor],
            [none, none, none],
        ],
        [
            [none, LRColor, none],
            [none, LRColor, none],
            [none, LRColor, LRColor],
        ],
        [
            [none, none, none],
            [LRColor, LRColor, LRColor],
            [LRColor, none, none],
        ],
        [
            [LRColor, LRColor, none],
            [none, LRColor, none],
            [none, LRColor, none],
        ],
    ]
    const skewL = [
        [
            [skewLColor, skewLColor, none],
            [none, skewLColor, skewLColor],
            [none, none, none],
        ],
        [
            [none, none, skewLColor],
            [none, skewLColor, skewLColor],
            [none, skewLColor, none],
        ],
        [
            [none, none, none],
            [skewLColor, skewLColor, none],
            [none, skewLColor, skewLColor],

        ],
        [
            [none, skewLColor, none],
            [skewLColor, skewLColor, none],
            [skewLColor, none, none],
        ],
    ]
    const skewR = [
        [
            [none, skewRColor, skewRColor],
            [skewRColor, skewRColor, none],
            [none, none, none],
        ],
        [
            [none, skewRColor, none],
            [none, skewRColor, skewRColor],
            [none, none, skewRColor],
        ],
        [
            [none, none, none],
            [none, skewRColor, skewRColor],
            [skewRColor, skewRColor, none],
        ],
        [
            [skewRColor, none, none],
            [skewRColor, skewRColor, none],
            [none, skewRColor, none],
        ],
    ]


    const tetrisPieces = [straight, square, T, LL, LR, skewL, skewR];



    const wallKickTable = {
        notI: [
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
        ],
        I: [
            [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
            [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: -2 }, { x: 2, y: 1 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 2 }, { x: -2, y: -1 }],
            [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }],
            [{ x: 0, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 2 }, { x: -2, y: -1 }],
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: -2 }, { x: 2, y: 1 }],
        ]
    }


    //og canvas
    const canvas = document.getElementById('tetris');

    //context for drawing 2d images
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth / 2;
    canvas.height = canvas.width;
    console.log(canvas.width);

    // context.canvas.width = canvas.clientWidth;
    // context.canvas.height = Math.max(900, Math.min(window.innerHeight, window.innerWidth) * 8 / 10);
    console.log(context.canvas.width);
    var ogBlockSize = 40;



    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);

    function resizeCanvas() {



        canvas.width = window.innerWidth / 2;
        canvas.height = canvas.width * 0.8;

        context.fillStyle = color[none];
        context.fillRect(0, 0, canvas.width, canvas.height);

        var temp = canvas.width * ogBlockSize / 1200;
        var remainder = temp % 4;
        if (remainder < 2) {
            artist.blockSize = temp - remainder;
        } else {
            artist.blockSize = temp - remainder + 4;
        }
        artist.drawArenaArrayFull(arenaManager);
    }


    //Be really careful with the arena position
    const arenaWidth = 10;
    const arenaHeight = 24;
    const vanishZone = 4;
    const tetrisMaxGapDif = 2;



    var ogArenaPos = { x: 10, y: -3 };

    // let dropInterval = [48, 43, 38, 33, 28, 23, 18, 13, 8, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 1];
    //My custom drop interval 
    const dropInterval = [48, 43, 38, 33, 28, 23, 18, 13, 8, 6, 6, 5, 5, 4, 4, 3, 3, 2, 1];

    const lockInterval = 500;

    //Unmodified cutscenes
    let cutscening = false;
    const cutscenesTime = {
        gameOverCutScene: 6000,
    }



    //Color ___ Color ___ Color ___ Color



    /* List of things to do
    4. flying pieces across the game mode
    */

    context.fillStyle = color[none];
    context.fillRect(0, 0, canvas.width, canvas.height);






    //Player ___ Arena ___ Player ___ Arena\

    /*everything is positioned relatived to arena
        already be adding arena.pos.x and y when draw
    */

    class Arena {
        constructor(pos, width, height, arenaIndex) {
            this.arenaIndex = arenaIndex;
            this.pos = pos;
            this.piece = createMatrix(width, height, 1);
            this.player = new Player(pos, width, height, arenaIndex);
            this.holdBox = new HoldBox(pos, width, height, arenaIndex);
            this.forecastBox = new ForecastBox(pos, width, height, arenaIndex);
            // Tmg3Bag ___ Tmg3Bag ___ Tmg3Bag ___ Tmg3Bag ___ Tmg3Bag
            this.tetrisBag = createTetrisBag();
            this.lastTime = undefined;
            //keeping track if the player's piece is in locking mode or not
            this.locking = false;
            //if merged
            this.merged = false;
            //if swapped
            this.swapped = false;
            //if gameOver, draw one more then stop
            this.gameOver = false;
            this.pause = false;
        };

        init() {
            var player = new Player(this.pos, this.piece[0].length, this.piece.length, this.arenaIndex);
            //player
            var index = this.tetrisBag.next;
            player.piece = tetrisPieces[this.tetrisBag.bag[index]];
            player.currentState = 0;
            player.pos.x = arenaManager[player.arenaIndex].pos.x + arenaManager[player.arenaIndex].piece[0].length / 2 - 2;
            player.pos.y = arenaManager[player.arenaIndex].pos.y + vanishZone;

            //player's shadow

            player.updateShadow();
            player.updateLastPos();


            //tetris again after playing receiving the piece
            this.rollForNextPiece(this.tetrisBag);

            //draw forecastBox again
            this.lastTime = Date.now();
            player.lastRotate = Date.now();
            player.lastSlide = Date.now();
            this.player.lastSoftDrop = Date.now();
            this.player = player;
        }

        draw(blockSize) {
            for (let y = 0; y < this.piece.length; y++) {
                for (let x = 0; x < this.piece[y].length; x++) {
                    if (this.piece[y][x] >= background) {
                        standardDraw(this.pos.x + x, this.pos.y + y, this.piece[y][x], blockSize, this.arenaIndex);
                    }
                }
            }
        }


        /*
        Only use when the player's piece hit the bottom. 
        Then proceed to check if any line is filled
        then call the next piece
        */
        merge(player) {
            let [field, piece] = [this.piece, player.piece[player.currentState]];
            var playerPos = { x: player.pos.x - this.pos.x, y: player.pos.y - this.pos.y };
            for (let y = 0; y < piece.length; y++) {
                for (let x = 0; x < piece[y].length; x++) {
                    if (piece[y][x] > background) {
                        field[playerPos.y + y][playerPos.x + x] = piece[y][x];
                    }
                }
            }

            (new sound(soundLibrary.land)).play();

            this.clearLines();
            player.updateScore();

            this.merged = true;
            this.swapped = false;
            this.nextPiece(player);

        };

        //Iterate through the arena and clear lines that are filled. If there are, clear those lines and push the lines above down
        clearLines() {
            const none = 0;
            const exist = 1;
            let row = new Array(this.piece.length).fill(1);
            let y1 = 0,
                y2 = 0;
            //doing it from top to bottom for easier y1 initialization
            for (let y = 0; y < this.piece.length; y++) {
                if (checkLine(this.piece[y])) {
                    ++this.player.scoreBox.linePlus;
                    clearLine(this.piece[y]);
                    row[y] = none;
                    y1 = y;
                }
            }

            y2 = y1 - 1;
            if (y2 <= 0) return;

            //Iteratate from bottom to top, and push down none background or none empty tiles
            while (y2 >= 0) {
                if (row[y2] === exist) {
                    row[y1] === row[y2];
                    for (let x = 0; x < this.piece[y2].length; x++) {
                        this.piece[y1][x] = this.piece[y2][x];
                        this.piece[y2][x] = background;
                    }
                    --y1;
                }
                --y2;
            }
        };
        //keeping track of used pieces and decide which pieces to get randomly picked into the bag next + pick new pieces
        updateTetrisBag(tetrisBag) {
            let next = tetrisBag.next;
            let stats = tetrisBag.appear.stats;
            let selectable = new Array(stats.length).fill(0);
            let q = 0;
            let min = stats[0];
            selectable[q] = 0;
            for (let i = 1; i < stats.length; i++) {
                if (stats[i] === min) {
                    q++;
                    selectable[q] = i;
                }
                if (stats[i] < min) {
                    min = stats[i];
                    q = 0;
                    selectable[q] = i;
                }
            }
            --q;

            tetrisBag.appear.min = min;
            if (min >= 10) {
                for (let i = 0; i < stats.length; i++) {
                    stats[i] -= min;
                }
            }

            this.rollForNextPiece(tetrisBag);
            tetrisBag.bag[next] = selectable[Math.floor(Math.random() * (q + 1))];
        }


        //roll for next Piece before replacing the used piece with a new one
        rollForNextPiece(tetrisBag) {

            tetrisBag.lastVal = tetrisBag.bag[tetrisBag.next];

            while (tetrisBag.bag[tetrisBag.next] === tetrisBag.lastVal ||
                tetrisBag.appear.stats[tetrisBag.bag[tetrisBag.next]] - tetrisBag.appear.min >= tetrisMaxGapDif) {
                tetrisBag.roll();
            }
            tetrisBag.appear.stats[tetrisBag.bag[tetrisBag.next]]++;
            this.forecastBox.piece = tetrisPieces[tetrisBag.bag[tetrisBag.next]];
            this.forecastBox.drawn = false;

        };
        nextPiece(player) {
            if (this.gameOver) return;

            player.updateLastPos();

            let tetrisBag = this.tetrisBag;
            let next = tetrisBag.next;


            //player's new piece initialization
            player.piece = tetrisPieces[tetrisBag.bag[next]];

            player.currentState = 0;

            player.pos.x = arenaManager[this.arenaIndex].pos.x + arenaManager[this.arenaIndex].piece[0].length / 2 - 2;
            player.pos.y = arenaManager[this.arenaIndex].pos.y + vanishZone;
            this.lastTime = Date.now();

            //checking if the newest piece can be spawn
            if (collide(this, player.piece[player.currentState], player.pos, 0, 0)) {
                if (collide(this, player.piece[player.currentState], player.pos, 0, -3)) {
                    setGameOver(this);
                    return;
                }
                player.pos.y -= vanishZone;
            }

            this.updateTetrisBag(tetrisBag);
            // drawObject(arena.forecastBox);
            this.player.updateShadow();


            player.lastHardDrop = Date.now();
        };

        swapPieces(player) {

            if (this.swapped) return false;

            if (!this.holdBox.piece) {
                this.holdBox.piece = player.piece;

                player.piece = tetrisPieces[this.tetrisBag.bag[this.tetrisBag.next]];

                this.updateTetrisBag(this.tetrisBag);
            } else {
                let temp = this.holdBox.piece;
                this.holdBox.piece = player.piece;
                player.piece = temp;
            }

            player.currentState = 0;

            player.pos.x = arenaManager[this.arenaIndex].pos.x + arenaManager[this.arenaIndex].piece[0].length / 2 - 2;
            player.pos.y = arenaManager[this.arenaIndex].pos.y + vanishZone;
            if (collide(this, player.piece[player.currentState], player.pos, 0, 0)) {
                if (collide(this, player.piece[player.currentState], player.pos, 0, -3)) {
                    setGameOver(this);
                }
                player.pos.y -= vanishZone;
            }
            this.lastTime = Date.now();
            this.player.updateShadow();
            this.swapped = true;

            return true;

        }

    }

    class TetrisBag {
        constructor() {
            this.appear = {
                stats: new Array(7).fill(0),
                min: 0,
            };
            this.bag = new Array(35);
            this.next = undefined;
            this.lastVal = undefined;
            this.maxGapDif = tetrisMaxGapDif;
        }

        roll() {
            this.next = Math.floor(Math.random() * this.bag.length);
        }
    };

    function createTetrisBag() {
        let tempTetrisBag = new TetrisBag();
        for (let i = 0; i < tempTetrisBag.bag.length; i++) {
            // tempTetrisBag.bag[i] = Math.floor(Math.random() * tetrisPieces.length);
            tempTetrisBag.bag[i] = i % 7;
        }

        tempTetrisBag.roll();
        return tempTetrisBag;

    };


    class Player {
        constructor(pos, arenaW, arenaH, arenaIndex) {
            this.arenaIndex = arenaIndex;
            this.pos = { x: pos.x + arenaW / 2 - 2, y: pageXOffset.y + vanishZone };
            this.piece = undefined;
            this.currentState = 0;
            this.shadowPos = { x: pos.x + arenaW / 2 - 2, y: pageXOffset.y + vanishZone };
            this.lastPos = {
                blockSize: ogBlockSize,
                piece: undefined,
                pos: {
                    x: undefined,
                    y: undefined,
                },
                shadowPos: {
                    x: undefined,
                    y: undefined,
                }
            };

            this.moved = false;
            this.combo = 0;
            this.scoreBox = new ScoreBox(pos, arenaW, arenaH);

            this.lastSoftDrop = 0;
            this.delaySoftDrop = false;
            this.lastHardDrop = 0;
            this.lastSlide = 0;
            this.delaySlide = false;
            this.lastRotate = 0;
            this.delayRotate = false;
        }


        draw(blockSize) {
            var piece = this.piece[this.currentState];
            for (let y = 0; y < piece.length; y++) {
                for (let x = 0; x < piece[y].length; x++) {
                    if (piece[y][x] > background) {

                        //draw shadow
                        standardDraw(this.shadowPos.x + x, this.shadowPos.y + y, shadowColor, blockSize, this.arenaIndex);

                        //draw player
                        standardDraw(this.pos.x + x, this.pos.y + y, piece[y][x], blockSize, this.arenaIndex);

                    }
                }
            }

            this.lastPos.blockSize = blockSize;
        }

        undraw() {
            var blockSize = this.lastPos.blockSize
            var piece = this.lastPos.piece;
            for (let y = 0; y < piece.length; y++) {
                for (let x = 0; x < piece[y].length; x++) {
                    if (piece[y][x] > background) {
                        //undraw player
                        standardDraw(this.lastPos.pos.x + x, this.lastPos.pos.y + y, background, blockSize, this.arenaIndex);

                        //undraw shadow
                        standardDraw(this.lastPos.shadowPos.x + x, this.lastPos.shadowPos.y + y, background, blockSize, this.arenaIndex);

                    }
                }
            }
        }

        updateLastPos() {
            this.lastPos.pos.x = this.pos.x;
            this.lastPos.pos.y = this.pos.y;
            this.lastPos.shadowPos.x = this.shadowPos.x;
            this.lastPos.shadowPos.y = this.shadowPos.y;
            this.lastPos.piece = this.piece[this.currentState];
            this.moved = false;
            //update lastPos blocksize in draw method
        };

        //Update the position of the shadow after moving horizontally or after player gets a new piece (after merging)
        updateShadow() {

            this.shadowPos = { x: this.pos.x, y: this.pos.y };

            while (!collide(arenaManager[this.arenaIndex], this.piece[this.currentState], this.shadowPos, 0, 1)) {
                this.shadowPos.y++;;
            }
        };


        /*
        Checking if dropping down 1 block is valid
        */
        playerDrop() {

            var arena = arenaManager[this.arenaIndex];

            if (arena.gameOver) return false;
            if (arena.locking) {
                return;
            }
            //Doing it twice, first is to see if it can move down, the second is to check if in lock mode
            if (!this.lockCheck(lockInterval)) {
                this.pos.y++;
                this.lockCheck(lockInterval);
                arena.lastTime = Date.now();
                this.moved = true;
                return true;
            }
            return false;
        };

        /*
        Quickly drop to the bottom then merge player with arena
        */
        playerQuickDrop() {
            var arena = arenaManager[this.arenaIndex];

            if (arena.gameOver) return false;

            this.moved = true;
            this.pos = this.shadowPos;
            arena.merge(this);
            this.updateShadow();

        };

        /*
        Check if moving left or right is valid, if yes, then change the position of the 
        player's piece. After moving, check if there's a block under the player's piece, 
        if yes then 'locking' is true
        */
        playerSlide(right) {
            var arena = arenaManager[this.arenaIndex];
            if (arena.gameOver) return false;

            let increment = 0;
            if (right) increment = 1;
            else increment = -1;

            if (!collide(arena, this.piece[this.currentState], this.pos, increment, 0)) {
                this.pos.x += increment;
                this.lockCheck(lockInterval);
                this.updateShadow();
                this.moved = true;
                return true;
            }
            return false;
        };

        /*
        Check if the player's piece is locking or not.
        If yes, then after 0.5s the piece will be locked if  not moved
        */
        lockCheck(lockCountDown) {
            var arena = arenaManager[this.arenaIndex];
            if (arena.locking) return false;
            if (collide(arena, this.piece[this.currentState], this.pos, 0, 1)) {
                arena.locking = true;
                setTimeout(() => {
                    if (collide(arena, this.piece[this.currentState], this.pos, 0, 1)) {
                        arena.merge(this);
                    }
                    arena.locking = false
                    arena.lastTime = Date.now() - Math.max(0, (getDropInterval(this.level) - lockCountDown));
                }, lockCountDown);
                return true;
            }
            return false;
        };

        playerRotate(clockwise) {

            if (this.piece === square) {
                return true;
            }
            var wallkick;
            if (this.piece === straight) {
                wallkick = wallKickTable.I;
            } else {
                wallkick = wallKickTable.notI;
            }

            var arena = arenaManager[this.arenaIndex];
            if (arena.gameOver) return false;

            var rotation = 0;
            var tempPos;
            if (clockwise) {
                rotation = 1;
                rotation = (this.currentState + rotation + 4) % 4;
                tempPos = newPosCheck(arena, this.piece[rotation], this.pos, wallkick[this.currentState * 2]);
            } else {
                rotation = -1;
                rotation = (this.currentState + rotation + 4) % 4;
                tempPos = newPosCheck(arena, this.piece[rotation], this.pos, wallkick[rotation * 2 + 1]);
            }

            if (tempPos !== null) {
                this.pos.x += tempPos.x;
                this.pos.y += tempPos.y;
                this.currentState = rotation;
                this.lockCheck(lockInterval);
                this.updateShadow();
                this.moved = true;
                return true;
            }

            return false;


        };

        processEvent() {

            if (left /* left */ ) {
                if (!this.delaySlide) {
                    if (this.playerSlide(false)) {
                        this.delaySlide = true;
                        this.lastSlide = Date.now() + das - arr;
                        (new sound(soundLibrary.move)).play();
                    }
                } else {
                    if (Date.now() - this.lastSlide >= arr) {
                        if (this.playerSlide(false)) {
                            this.lastSlide = Date.now();
                            (new sound(soundLibrary.move)).play();
                        }

                    }
                }
            }
            if (right /* right */ ) {
                if (!this.delaySlide) {
                    if (this.playerSlide(true)) {
                        this.delaySlide = true;
                        this.lastSlide = Date.now() + das - arr;
                        (new sound(soundLibrary.move)).play();
                    }
                } else {
                    if (Date.now() - this.lastSlide >= arr) {
                        if (this.playerSlide(true)) {
                            this.lastSlide = Date.now();
                            (new sound(soundLibrary.move)).play();
                        }

                    }
                }
            }
            if (softDrop /* down */ ) {

                if (!this.delaySoftDrop) {
                    if (this.playerDrop()) {
                        this.delaySoftDrop = true;
                        this.lastSoftDrop = Date.now() + das - getSoftDropInterval(this.level);
                        (new sound(soundLibrary.softDrop)).play();
                    }

                } else {
                    if (Date.now() - this.lastSoftDrop >= getSoftDropInterval(this.level)) {
                        if (this.playerDrop()) {
                            this.lastSoftDrop = Date.now();
                            (new sound(soundLibrary.softDrop)).play();
                        }
                    }
                }

            }
            if (rotateCC /* left */ ) {
                if (!this.delayRotate) {
                    if (this.playerRotate(false)) {
                        this.delayRotate = true;
                        this.lastRotate = Date.now() + das - arr;
                        (new sound(soundLibrary.rotate)).play();
                    }
                } else {
                    if (Date.now() - this.lastRotate >= arr) {
                        if (this.playerRotate(false)) {
                            this.lastRotate = Date.now() + das - arr;
                            (new sound(soundLibrary.rotate)).play();
                        }
                    }
                }
            }
            if (rotateC /* right */ ) {
                if (!this.delayRotate) {
                    if (this.playerRotate(true)) {
                        this.delayRotate = true;
                        this.lastRotate = Date.now() + das - arr;
                        (new sound(soundLibrary.rotate)).play();
                    }
                } else {
                    if (Date.now() - this.lastRotate >= arr) {
                        if (this.playerRotate(true)) {
                            this.lastRotate = Date.now() + das - arr;
                            (new sound(soundLibrary.rotate)).play();
                        }
                    }
                }
            }

            if (this.swap) {
                if (arenaManager[this.arenaIndex].swapPieces(this)) {
                    (new sound(soundLibrary.swap)).play();
                }
            }

        };

        updateScore() {
            var scoreBox = this.scoreBox;

            if (scoreBox.linePlus === 0) {
                this.combo = 0;
                return;
            }

            var bonusPoints = 50 * this.combo * scoreBox.level;
            scoreBox.score += bonusPoints;
            this.combo++;

            /* Standard
        let clearRequired = Math.min(scoreBox.level * 10 + 10, Math.max(100, scoreBox.level * 10 - 50));
       */
            let clearRequired = Math.min(scoreBox.level * 3 + 3, Math.max(30, scoreBox.level * 3 - 15));

            if (scoreBox.line + scoreBox.linePlus > clearRequired) {
                let temp1 = scoreSys[(clearRequired - scoreBox.line)] * (scoreBox.level + 1) +
                    scoreSys[(scoreBox.line + scoreBox.linePlus - clearRequired)] * (scoreBox.level + 2);
                let temp2 = scoreSys[scoreBox.linePlus] * (scoreBox.level + 1);
                if (temp2 > temp1) {
                    scoreBox.score += temp2;
                } else {
                    scoreBox.score += temp1;
                }
                ++scoreBox.level;
                scoreBox.line = scoreBox.line + scoreBox.linePlus - clearRequired;
                scoreBox.linePlus = 0;

            } else {
                scoreBox.score += scoreSys[scoreBox.linePlus] * (scoreBox.level + 1);
                scoreBox.line += scoreBox.linePlus;
                scoreBox.linePlus = 0;
            }

        }
    }


    class HoldBox {
        constructor(pos, arenaW, arenaH, arenaIndex) {
            this.arenaIndex = arenaIndex;
            this.pos = { x: pos.x - 6, y: pos.y + 9 };
            this.piece = none;
            this.drawn = false;
        }
        draw(blockSize) {
            var customBlockSize = 0.5;
            var holdBoxDimensions = 9;
            for (let y = 0; y < holdBoxDimensions; y++) {
                for (let x = 0; x < holdBoxDimensions; x++) {
                    customDraw(this.pos, blockSize, { x: x, y: y }, background, customBlockSize);
                }
            }
            if (this.piece) {
                this.drawn = true;
                var piece = this.piece[0];
                var xOffset = 0;
                var yOffset = 0;

                if (piece.length % 2 === 1) {
                    xOffset = ((holdBoxDimensions * customBlockSize) - piece.length) / 2;
                    yOffset = (((holdBoxDimensions * customBlockSize - piece.length)) / 2) + customBlockSize;
                } else {
                    xOffset = ((holdBoxDimensions * customBlockSize) - piece.length) / 2;
                    yOffset = (((holdBoxDimensions * customBlockSize - piece.length)) / 2) + 2 * customBlockSize;

                }

                for (let y = 0; y < piece.length; y++) {
                    for (let x = 0; x < piece[y].length; x++) {
                        if (piece[y][x] > background) {
                            standardDraw(this.pos.x + x + xOffset, this.pos.y + y + yOffset, piece[y][x], blockSize);

                        }
                    }
                }
            }
        }
    }
    class ForecastBox {
        constructor(pos, arenaW, arenaH, arenaIndex) {
            this.arenaIndex = arenaIndex;
            this.pos = { x: pos.x + 12, y: pos.y + 11 };
            this.piece = none;
            this.drawn = false;
        }
        draw(blockSize) {
            this.drawn = true;

            var customBlockSize = 0.5;
            var forcastBoxDimensions = 9;
            for (let y = 0; y < forcastBoxDimensions; y++) {
                for (let x = 0; x < forcastBoxDimensions; x++) {
                    customDraw(this.pos, blockSize, { x: x, y: y }, background, customBlockSize);
                }
            }

            if (this.piece) {
                var piece = this.piece[0];
                var xOffset = 0;
                var yOffset = 0;

                if (piece.length % 2 === 1) {
                    xOffset = ((forcastBoxDimensions * customBlockSize) - piece.length) / 2;
                    yOffset = (((forcastBoxDimensions * customBlockSize - piece.length)) / 2) + customBlockSize;
                } else {
                    xOffset = ((forcastBoxDimensions * customBlockSize) - piece.length) / 2;
                    yOffset = (((forcastBoxDimensions * customBlockSize - piece.length)) / 2) + 2 * customBlockSize;

                }

                for (let y = 0; y < piece.length; y++) {
                    for (let x = 0; x < piece[y].length; x++) {
                        if (piece[y][x] > background) {
                            standardDraw(this.pos.x + x + xOffset, this.pos.y + y + yOffset, piece[y][x], blockSize);

                        }
                    }
                }
            }
        }
    }

    // 0 lines, 1 line, 2 lines, 3 lines, and 4 lines
    const scoreSys = [0, 40, 100, 300, 1200];

    class ScoreBox {
        constructor(pos, arenaW, arenaH) {
            this.scorePos = { x: pos.x + 11, y: pos.y + 7 };
            this.levelPos = { x: pos.x + 11, y: pos.y + 16.5 }
            this.score = 0;
            this.level = 0;
            this.line = 0;
            //newly cleared lines that need to be processed before adding into line;
            this.linePlus = 0;
        }
        draw(blockSize) {
            this.drawn = true;

            var customBlockSize = 0.5;

            var scoreBoxWidth = 6;
            var scoreBoxHeight = 10;
            for (let y = 0; y < scoreBoxWidth; y++) {
                for (let x = 0; x < scoreBoxHeight; x++) {
                    customDraw(this.scorePos, blockSize, { x: x, y: y }, background, customBlockSize);
                }
            }



            //Score
            let temp = this.score + "";
            while (temp.length < 8) {
                temp = "0" + temp;
            }
            let font = 18 * blockSize / 20;
            standardText(temp, 'white', 500, font, 'Arial', this.scorePos.x + 0.82, this.scorePos.y + 2.48, blockSize);

            font = 22 * blockSize / 20;
            // context.fillText("SCORE", (this.scorePos.x + 0.2) * blockSize, (this.scorePos.y + 1.25) * blockSize);
            standardText("SCORE", 'white', 500, font, 'Arial', this.scorePos.x + 0.2, this.scorePos.y + 1.25, blockSize);


            var levelBoxWidth = 4;
            var levelBoxHeight = 7;
            for (let y = 0; y < levelBoxWidth; y++) {
                for (let x = 0; x < levelBoxHeight; x++) {
                    customDraw(this.levelPos, blockSize, { x: x, y: y }, background, customBlockSize);
                }
            }

            //level
            temp = this.level + "";
            while (temp.length < 2) {
                temp = "0" + temp;
            }
            font = 16 * blockSize / 20;
            standardText(temp, 'white', 500, font, 'Arial', this.levelPos.x + 2.4, this.levelPos.y + 1.8, blockSize);

            font = 18 * blockSize / 20;
            context.font = "600 " + font + "px Arial";
            standardText("LEVEL", 'white', 600, font, 'Arial', this.levelPos.x + 0.15, this.levelPos.y + 0.95, blockSize);


        }

    }
    var arenaManager = [new Arena(ogArenaPos, arenaWidth, arenaHeight, 0)];


    //Player ___ Arena ___ Player ___ Arena


    //Artist ___ Artist ___ Artist ___ Artist ___ Artist

    class Artits {
        constructor(blockSize) {
            this.blockSize = blockSize;
        }
        drawArenaArray(arenaManager) {
            arenaManager.forEach(arena => {
                this.drawArena(arena);
            })

        }

        drawArena(arena) {
            if (arena.swapped && !arena.holdBox.drawn) {
                console.log("reee");
                arena.holdBox.draw(this.blockSize);
                arena.player.undraw();
                arena.player.draw(this.blockSize);
                arena.player.updateLastPos();
            }

            if (arena.merged) {
                arena.merged = false;
                arena.holdBox.drawn = false;
                arena.draw(this.blockSize);
                arena.player.draw(this.blockSize);
                arena.player.updateLastPos();
                arena.player.scoreBox.draw(this.blockSize);
            } else if (arena.player.moved) {
                arena.player.undraw(this.blockSize);
                arena.player.draw(this.blockSize);
                arena.player.updateLastPos();
            }

            if (!arena.forecastBox.drawn) {
                arena.forecastBox.draw(this.blockSize);
            }


        }

        drawBackGround(arena) {
            arena.draw(this.blockSize);
            arena.holdBox.draw(this.blockSize);
            arena.forecastBox.draw(this.blockSize);
            arena.player.scoreBox.draw(this.blockSize);
        }

        drawArenaArrayFull(array) {
            array.forEach(arena => {
                this.drawArenaFull(arena);
            })
        }
        drawArenaFull(arena) {
            arena.draw(this.blockSize);
            arena.player.draw(this.blockSize);
            arena.forecastBox.draw(this.blockSize);
            arena.holdBox.draw(this.blockSize);
            arena.player.scoreBox.draw(this.blockSize);
        }
    }

    const artist = new Artits(ogBlockSize);

    //Artist ___ Artist ___ Artist ___ Artist ___ Artist


    //Music ___ Music ___ Music ___ Music ___ Music ___ Music
    let globalVol = 1;

    const soundLibrary = {
        mainMenu: "sounds/01. Main Menu.mp3",
        gameTheme: "sounds/02. Game Theme.mp3",
        gameTheme50: "sounds/03. Game Theme (50 Left).mp3",
        gametheme10: "sounds/04. Game Theme (10 Left).mp3",
        result: "sounds/05. Results.mp3",
        resultNo1: "sounds/06. Results (1st Place).mp3",
        softDrop: "sounds/se_game_softdrop.mp3",
        hardDrop: "sounds/se_game_harddrop.mp3",
        rotate: "sounds/se_game_rotate.mp3",
        move: "sounds/se_game_move.mp3",
        land: "sounds/se_game_landing.mp3",
        swap: "sounds/se_game_hold.mp3",
        gameOver: "sounds/me_game_gameover.mp3",
        pause: "sounds/se_game_pause.mp3",
        select: "sounds/se_sys_select.mp3",
        ok: "sounds/se_sys_ok.mp3",
        count: "sounds/se_game_count.mp3"
    }

    const menu = 0;
    const theme = 1;
    const theme50 = 2;
    const theme10 = 3;
    const result = 4;
    const resultNo1 = 5;

    const musicManager = {
        tasks: [],
        now: -1,
        list: [
            new sound(soundLibrary.mainMenu),
            new sound(soundLibrary.gameTheme),
            new sound(soundLibrary.gameTheme50),
            new sound(soundLibrary.gametheme10),
            new sound(soundLibrary.result),
            new sound(soundLibrary.resultNo1),

        ],
    }

    musicManager.setVol = function(vol) {
        this.list.forEach(element => {
            element.modifyMaxVol(vol);
        });
    }

    musicManager.setVol(0.8);

    musicManager.restart = function() {
        for (let i = 0; i < musicManager.list.length; i++) {
            this.list[i].restart();
            this.list[i].sound.loop = true;
        }
    }


    musicManager.changeTheme = function(num = this.now + 1) {
        if (this.now >= 0 && this.list[this.now].isPlaying) {
            this.fade(this.now, 500);
        }

        if (num >= 0) {
            this.now = num;
            this.list[this.now].play();
        }
    }
    musicManager.update = function() {

        if (arenaManager[0].player.scoreBox.level >= 7 && this.now < theme50) {
            this.changeTheme(theme50);
        }

        if (arenaManager[0].player.scoreBox.level >= 12 && this.now < theme10) {
            this.changeTheme(theme10);
        }

        let tasks = this.tasks;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].fade && Date.now() - tasks[i].lastFade >= 1000 / 60) {
                let temp = this.list[tasks[i].num].sound.volume;
                temp = Math.max(0, temp - tasks[i].amount);
                if (temp === 0) {
                    this.list[tasks[i].num].restart();
                    tasks.splice(i, 1);
                    i--;
                } else {
                    this.list[tasks[i].num].sound.volume = temp;
                    tasks[i].lastFade = Date.now();
                }

            }
        };
    }

    musicManager.fade = function(num, time) {
        let temp = {
            num: num,
            fade: true,
            amount: this.list[num].sound.volume / (time * 60 / 1000),
            lastFade: Date.now() - 1000 / 60,
        };
        this.tasks.push(temp);

    }

    //Music ___ Music ___ Music ___ Music ___ Music ___ Music




    //Function ___ Function ___ Function




    function update() {
        console.log(arenaManager[0].swapped);
        arenaManager.forEach(arena => {
            if (!arena.gameOver && !arena.pause) {
                if (Date.now() - arena.lastTime >= getDropInterval(arenaManager[0].player.scoreBox.level)) {
                    arenaManager[0].player.playerDrop();
                }

                artist.drawArenaArray(arenaManager);
                arena.player.processEvent();
                //update player's scoreBox in merge
            }
        })

        musicManager.update();
        setTimeout(function() {
            requestAnimationFrame(update);
        }, 1000 / 60)
    }

    function getDropInterval(level) {
        if (level < 17) {
            return dropInterval[level] * 1000 / 60;
        } else if (level >= 17 && level < 26) {
            return dropInterval[dropInterval.length - 2] * 1000 / 60;
        } else {
            return dropInterval[dropInterval.length - 1] * 1000 / 60;
        }
    }



    //Check if the player's piece collide 
    function collide(arena, piece, pos, xDelta = 0, yDelta = 0) {
        var field = arena.piece;
        var pos = { x: pos.x - arena.pos.x, y: pos.y - arena.pos.y };

        for (let y = piece.length - 1; y >= 0; y--) {
            for (let x = 0; x < piece[y].length; x++) {
                if (piece[y][x] > background && (!field[pos.y + y + yDelta] || /*Im not sure if i need this or not but juts gonna add it here just in case ya know*/
                        !field[pos.y + y + yDelta][pos.x + x + xDelta] || field[pos.y + y + yDelta][pos.x + x + xDelta] > background)) {
                    return true;
                }
            }
        }
        return false;
    }

    function newPosCheck(arena, piece, pos, alts) {
        for (var alt of alts) {
            if (!collide(arena, piece, pos, alt.x, alt.y)) {
                return alt;
            }
        }
        return null;
    }


    //Check if a line is filled
    function checkLine(line) {
        for (let x = 0; x < line.length; x++) {
            if (line[x] === background) {
                return false;
            }
        }
        return true;
    }

    //clear a line by changing the value of every blocks on that line to 'background'
    function clearLine(line) {
        for (let x = 0; x < line.length; x++) {
            line[x] = background;
        }
    }


    function standardDraw(x, y, pickedColor, block, arenaIndex = -1) {
        block = Math.ceil(block);
        if (arenaIndex === -1) {
            context.fillStyle = color[pickedColor];
            context.fillRect(x * block, y * block, block, block);
            return;
        }
        context.fillStyle = color[pickedColor];
        var arena = arenaManager[arenaIndex];
        if (y >= arena.pos.y + vanishZone && (x < arena.pos.x + arenaWidth || x > arena.pos.x)) {
            context.fillRect(x * block, y * block, block, block);
        }
    };

    //So you can modify just the size of the drawing without intefering with the universal spacing
    function customDraw(pos1, blockSpacing, pos2, pickedColor, blockSizeToSpacing, arenaIndex = -1) {
        blockSpacing = Math.ceil(blockSpacing);
        var blockSize = Math.ceil(blockSpacing * blockSizeToSpacing);
        if (arenaIndex === -1) {
            context.fillStyle = color[pickedColor];
            context.fillRect(pos1.x * blockSpacing + pos2.x * blockSize, pos1.y * blockSpacing + pos2.y * blockSize, blockSize, blockSize);
            return;
        }
        context.fillStyle = color[pickedColor];
        var arena = arenaManager[arenaIndex];
        if (pos1.y * blockSpacing >= arena.pos.y * blockSpacing + vanishZone * blockSize &&
            (pos1.x * blockSpacing < arena.pos.x * blockSpacing + arenaWidth ||
                x * blockSpacing > arena.pos.x * blockSpacing)) {
            context.fillRect(pos1.x * blockSpacing + pos2.x * blockSize, pos1.y * blockSpacing + pos2.y * blockSize, blockSize, blockSize);
        }
    }

    function standardText(string, color, highlight, fontSize, font, x, y, blockSize) {
        fontSize = Math.ceil(fontSize);
        blockSize = Math.ceil(blockSize);
        context.fillStyle = color;
        context.font = highlight + " " + fontSize + "px " + font;
        context.fillText(string, x * blockSize, y * blockSize);
    }




    //Sound ___ Sound ___ Sound ___ Sound ___ Sound

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        this.defaultMuted = true;

        this.maxVol = 1;
        this.isPlaying = false;
        this.fading = false;

        document.body.appendChild(this.sound);
        this.play = function() {
            this.sound.play();
            this.isPlaying = true;
        }
        this.pause = function() {
            this.sound.pause();
            this.isPlaying = false;
        }
        this.modifyMaxVol = function(vol) {
            this.maxVol = vol;
            this.sound.volume = this.maxVol * globalVol;
        }
        this.restart = function() {
            this.sound.volume = this.maxVol * globalVol;
            this.pause();
            this.isPlaying = false;
            this.fading = false;
            this.sound.currentTime = 0;
        }
        this.modifyVol = function(amount) {
            this.sound.volume = Math.floor(1000 * Math.max(Math.min(this.sound.volume + amount, this.maxVol * globalVol), 0)) / 1000;
        }
    }


    //Sound ___ Sound ___ Sound ___ Sound ___ Sound



    //Function ___ Function ___ Function


    //Helper ___ Helper ___ Helper ___ Helper

    function createMatrix(w, h, fill) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(fill));
        }
        return matrix;
    }




    //Setting up before the game
    function init() {


        //arena
        arenaManager = [];
        arenaManager.push(new Arena(ogArenaPos, arenaWidth, arenaHeight, arenaManager.length));
        // arenaManager[0].piece = createMatrix(arenaWidth, arenaHeight, 1);
        // arenaManager[0].piece = [
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 2, 1, 1, 1, 2, 2],
        //     [1, 1, 1, 1, 2, 1, 1, 2, 2, 2],
        //     [1, 1, 1, 1, 2, 1, 1, 1, 2, 2],
        //     [1, 1, 1, 1, 2, 2, 2, 1, 2, 2],
        //     [1, 1, 1, 1, 1, 2, 1, 1, 2, 2],
        //     [1, 1, 1, 1, 1, 2, 2, 1, 2, 2],
        //     [1, 1, 1, 1, 1, 1, 2, 1, 2, 2],
        //     [1, 1, 1, 1, 1, 1, 2, 1, 2, 2],
        // ]

        arenaManager[0].init(0);
        resizeCanvas();
    }

    function restart() {
        init()
            // console.clear();
            //music manager
        musicManager.restart();
    }

    function setGameOver(arena) {
        arena.gameOver = true;
        musicManager.fade(musicManager.now, 500);


        setTimeout(() => {

            cutscening = true;
            musicManager.restart()
            let temp = new sound(soundLibrary.gameOver);
            temp.play();
            setTimeout(() => {
                cutscening = false;
            }, cutscenesTime.gameOverCutScene);
        }, 500);
    }


    function pauseGame(arena) {
        arena.pause = !arena.pause;
        if (arena.pause) {
            document.getElementById('nav').querySelector('.pause').innerText = "resume";
            (new sound(soundLibrary.pause)).play();
            musicManager.list[musicManager.now].pause();
        } else {
            document.getElementById('nav').querySelector('.pause').innerText = "pause";
            (new sound(soundLibrary.select)).play();
            musicManager.list[musicManager.now].play();
            let temp = new sound(soundLibrary.count);
        }
    }

    //Helper ___ Helper ___ Helper ___ Helper


    //Input control ___ Input control ___ Input control
    let softDrop = false;
    let right = false;
    let left = false;
    let hardDrop = false;
    let rotateC = false;
    let rotateCC = false;
    let swap = false;


    //softdrop speed


    // const softDropInterval = [3,3,2,2,1]; /*standard soft drop tetris 99, starts at level 1*/
    const softDropInterval = [4, 3, 3, 2, 2, 1];

    function getSoftDropInterval(level) {
        if (level < 5) {
            return softDropInterval[level] * 1000 / 60;
        } else {
            return softDropInterval[softDropInterval.length - 1] * 1000 / 60;
        }
    }

    const das = (1000 / 60) * 12; /*initial delay before repeating*/
    const arr = (1000 / 60) * 2; /*slide speed after the initial delay (2f)*/
    const rotateSpd = 1000 / 5;


    function checkKey(event, boolean) {
        if (event.keyCode === 37 || event.keyCode === 65 /* left */ ) {
            left = boolean;
            if (left && right) {
                right = false;
                arenaManager[0].player.delaySlide = false;
            }
            if (!boolean) {
                arenaManager[0].player.lastSlide = Date.now();
                arenaManager[0].player.delaySlide = false;
            }
        }
        if (event.keyCode == 39 || event.keyCode === 68 /* right */ ) {
            right = boolean;
            if (left && right) {
                left = false;
                arenaManager[0].player.delaySlide = false;
            }
            if (!boolean) {
                arenaManager[0].player.lastSlide = Date.now();
                arenaManager[0].player.delaySlide = false;
            }
        }
        //checking for hardDrop key when receieved key event
        if (event.keyCode === 4 || event.keyCode === 83 /* adown */ ) {
            softDrop = boolean;
            if (!boolean) {
                arenaManager[0].player.delaySoftDrop = false;
                arenaManager[0].player.lastSoftDrop = Date.now();
            }
        }
        if (event.keyCode === 74 /*rotate Counter-clockwise*/ ) {


            rotateCC = boolean;
            if (rotateC && rotateCC) {
                arenaManager[0].player.delayRotate = false;
                rotateC = false;
            }
            if (!boolean) {
                arenaManager[0].player.delayRotate = false;
                arenaManager[0].player.lastRotate = Date.now();
            }
        }
        if (event.keyCode === 75 /*rotate clockwise*/ ) {
            rotateC = boolean;
            if (rotateC && rotateCC) {
                arenaManager[0].player.delayRotate = false;
                rotateCC = false;
            }
            if (!boolean) {
                arenaManager[0].player.delayRotate = false;
                arenaManager[0].player.lastRotate = Date.now();
            }
        }
        if (event.keyCode === 76 /*swap*/ ) {
            arenaManager[0].player.swap = boolean;
        }
    }
    document.addEventListener('keydown', event => {
        if (event.keyCode === 80) {
            pauseGame(arenaManager[0]);
        }

        if (arenaManager[0].gameOver || arenaManager[0].pause) return;

        if (!hardDrop && (event.keyCode === 38 || event.keyCode === 32 || event.keyCode === 87)) {
            if (Date.now() - arenaManager[0].player.lastHardDrop >= das) {
                //update lastHardDrop in nextPiece so that people dont accidentally press hard drop
                arenaManager[0].player.playerQuickDrop();
                hardDrop = true;

                let temp = new sound(soundLibrary.hardDrop);
                temp.play();

                return;
            }
        }
        checkKey(event, true);

    });
    document.addEventListener('keyup', event => {
        if (hardDrop && (event.keyCode === 38 || event.keyCode === 32 || event.keyCode === 87)) {
            hardDrop = false;

            return;
        }
        checkKey(event, false);
    });
    document.getElementById("nav").querySelector('.menu').addEventListener('click', () => {

        if (cutscening) return;

        musicManager.changeTheme(menu);

    });
    document.getElementById("nav").querySelector('.start').addEventListener('click', () => {
        if (cutscening) return;

        restart();
        document.getElementById("nav").querySelector('.start').innerText = "restart";
        //play game theme instead of menu
        musicManager.changeTheme(theme);
        arenaManager[0].pause = false;


    });
    document.getElementById('nav').querySelector('.pause').addEventListener('click', () => {

        if (cutscening) return;
        if (arenaManager[0].gameOver) return;

        pauseGame(arenaManager[0]);
    });


    //Input control ___ Input control ___ Input control


    update();
})