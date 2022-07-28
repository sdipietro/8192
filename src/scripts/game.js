// import Tile from './tile';
import Util from './util';

const DIRS = {
    'up': [-1,0],
    'down': [1,0],
    'left': [0,-1],
    'right': [0,1]
};

class Game {

    constructor(size) {
        this.size = size;
        this.board = [];
        this.changeMadeToBoard = false;
        this.score = 0;

        this.handleKeyDown.bind(this)();
    }

    placeInitialPieces() {
        this.placeRandomPiece(2);
    }

    placeRandomPiece(n) {
        let count = 0;
        const randomTiles = this.board.flat().sort(() => Math.random() - Math.random());

        randomTiles.forEach(tile => {
            while (count < n && tile.empty) {
                count++;
                // 1 out of every 15 numbers placed will be 4, others will be 2
                let randomNum = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,4].sort(() => Math.random() - Math.random())[0];
                tile.val = randomNum;
                tile.empty = false;
                tile.updateColor();
                Util.renderTile(tile);
            }
        });
    }

    handleKeyDown() {
        addEventListener('keydown', e => {
            console.log(e.code);
            e.preventDefault();
            this.handleMoves(e);
        });
    }

    handleMoves(e) {
        this.changeMadeToBoard = false;
        const keyMap = {
            'ArrowUp': 'up',
            'ArrowDown': 'down',
            'ArrowLeft': 'left',
            'ArrowRight': 'right'
        };
 
        this.compressAndDouble(keyMap[e.code]);
        if (this.changeMadeToBoard === true) {
           window.setTimeout(() => {this.placeRandomPiece(1)}, 100);
        }
    }

    compressAndDouble(dir) {
        // depending on the key clicked, the order of compression and doubling will vary, notably
        // for down and right. A board with the correct direction will be saved to searchBoard
        let searchBoard;

        if (dir === 'up') {
            searchBoard = this.board.flat();
        } else if (dir === 'down') {
            searchBoard = this.board.slice().reverse().flat();
        } else if (dir === 'left') {
            searchBoard = this.board.flat()
        } else if (dir === 'right') {
            searchBoard = this.board.map(row => {return row.slice().reverse()}).flat();
        }
        // compressing tiles on the board in a given direction, i.e. removing empty spaces in between
        searchBoard.forEach(tile => {
            this.moveToEdge(tile, dir);
        });
        // doubling and emptying appropriate tiles given the direction
        searchBoard.forEach(tile => {
            this.makeMove(tile, dir);
        });
        // compressing tiles in a given direction againa, (removing spaces after doubling)
        searchBoard.forEach(tile => {
            this.moveToEdge(tile, dir);
        });
    }

    moveToEdge(tile, dir) {
        const nextPos = [tile.pos[0] + DIRS[dir][0], tile.pos[1] + DIRS[dir][1]];
        if (tile.empty || !Util.validPos(nextPos, this.size)) {
            return;
        }
        const nextTile = this.board[nextPos[0]][nextPos[1]];
        if (nextTile.empty) {
            this.changeMadeToBoard = true;
            nextTile.copy(tile);
            tile.reset();
            this.moveToEdge(nextTile, dir);
        }
    }

     makeMove(tile, dir) {
        const prevPos = [tile.pos[0] - DIRS[dir][0], tile.pos[1] - DIRS[dir][1]];
        if (tile.empty || !Util.validPos(prevPos, this.size)) {
            return;
        }
        const prevTile = this.board[prevPos[0]][prevPos[1]];
        if (tile.val === prevTile.val) {
            this.changeMadeToBoard = true;
                tile.double();
                prevTile.reset();
                this.increaseScore(tile);
        }
    }

    increaseScore(tile) {
        this.score += tile.val;
        Util.renderScore(this.score);
    }
}

export default Game;