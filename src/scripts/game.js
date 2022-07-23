import Tile from './tile';
import Util from './util';

class Game {
    constructor(ele) {
        this.ele = ele;
        this.board = [];

        this.setupBoard();
        this.handleKeyDown.bind(this)();
    }

    placeRandomPieces() {
        const randomTiles = this.board.flat().sort(() => Math.random() - Math.random()).slice(0, 2);
       
        randomTiles.forEach(tile => {
            let randomNum = [2,4].sort(() => Math.random() - Math.random())[0];
            tile.val = randomNum;
            tile.empty = false;
            tile.updateColor();
            Util.renderTile(tile);
        });
    }

    handleKeyDown() {
        // const tiles = Array.from(this.ele.children[0].children);
        addEventListener('keydown', e => {
            console.log(e.code);
            this.handleMoves(e);
        });
    }

    handleMoves(e) {
       const keyMap = {
            'ArrowUp': 'up',
            'ArrowDown': 'down',
            'ArrowLeft': 'left',
            'ArrowDown': 'down'
       };

       this.makeMove(keyMap[e.code]);

    //    this.board.flat().forEach(tile => {
    //         this.makeMove(tile, keyMap[e.code]);
    //    });
    }

     makeMove(dir) {
        if (dir === 'up') {
                // const abovePos = [tile.pos[0] + 1, tile.pos[1]];
                // const belowPos = [tile.pos[0] - 1, tile.pos[1]];
                // if (Util.validPos(abovePos)) {
                //     const aboveTile = this.board[abovePos[0]][abovePos[1]];
    
                //     if (!tile.empty && (tile.val === aboveTile.val)) {
                       
                //     }
                // };
            this.board[0].forEach(tile => {
                this.flipPiecesInDir(tile, dir);
                // const abovePos = [tile.pos[0] + 1, tile.pos[1]];
                // if (Util.validPos(abovePos)) {
                //     const aboveTile = this.board[abovePos[0]][abovePos[1]];

                //     if (aboveTile.val === tile.val) {
                //         tile.double();
                //     };

                //     aboveTile.makeMove(dir);
                // };
            });
        } else if (dir === 'down') {
            this.board[0].forEach(tile => {
                const belowPos = [tile.pos[0] - 1, tile.pos[1]];
                if (Util.validPos(belowPos)) {
                    const belowTile = this.board[belowPos[0]][belowPos[1]];
                    belowTile.double();
                    belowTile.makeMove(dir);
                };
            });
        } else if (dir === 'left') {
    
        } else if (dir === 'right') {
    
        };
    }

    flipPiecesInDir(tile, dir) {
        if (dir === 'up') {
            const belowPos = [tile.pos[0] + 1, tile.pos[1]];
    
            if (Util.validPos(belowPos)) {
                const belowTile = this.board[belowPos[0]][belowPos[1]];
    
                if (!tile.empty && (belowTile.val === tile.val)) {
                    tile.double();
                    belowTile.reset();
                };
    
                this.flipPiecesInDir(belowTile, dir);
            };
        }
    }

    setupBoard() {
        const board = document.createElement('ul');
        board.className = 'board';

        for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
            const tileRow = [];
            for (let colIdx = 0; colIdx < 4; colIdx++) {
                // Create li for each tile
                let tile = document.createElement('li');
                tile.dataset.pos = `[${[rowIdx, colIdx]}]`;
                tile.className = 'tile';
                tile.innerHTML = '';
                // Create instance of each tile
                let tileInstance = new Tile([rowIdx, colIdx], 0);
                tileRow.push(tileInstance);

                board.append(tile);
            }
            this.board.push(tileRow);
        }

        this.ele.append(board);
        this.placeRandomPieces();
    }

}

export default Game;