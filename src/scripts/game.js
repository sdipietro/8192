import Tile from './tile';
import Util from './util';

const DIRS = {
    'up': [1,0],
    'down': [-1,0],
    'left': [0,-1],
    'right': [0,1]
}
class Game {

    constructor(ele) {
        this.ele = ele;
        this.board = [];

        this.setupBoard();
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
                let randomNum = [2,4].sort(() => Math.random() - Math.random())[0];
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
            this.handleMoves(e);
        });
    }

    handleMoves(e) {
       const keyMap = {
            'ArrowUp': 'up',
            'ArrowDown': 'down',
            'ArrowLeft': 'left',
            'ArrowRight': 'right'
       };

       this.board.flat().forEach(tile => {
        // debugger
            this.makeMove(tile, keyMap[e.code]);
       });

       if (e.code === 'ArrowLeft') {
           this.compressLeft();
       } else if (e.code === 'ArrowRight') {
            this.compressRight();
       } else if (e.code === 'ArrowDown') {
            this.compressDown();
       } else if (e.code === 'ArrowUp') {
            this.compressUp();
       }
       window.setTimeout(() => {this.placeRandomPiece(1)}, 100);
    }

     makeMove(tile, dir) {
        // let flipped = true;
        // while (flipped === true) {
            // flipped = false;
            // if (dir === 'up') {
            //         // const abovePos = [tile.pos[0] + 1, tile.pos[1]];
            //         const belowPos = [tile.pos[0] + 1, tile.pos[1]];
            //         if (Util.validPos(belowPos)) {
            //             const belowTile = this.board[belowPos[0]][belowPos[1]];
    
            //             if (tile.empty) {
            //                 tile.copy(belowTile);
            //                 belowTile.reset();
            //             } else if (tile.val === belowTile.val){
            //                tile.double();
            //                belowTile.reset();
            //             }
            //         };
            //     // this.board[0].forEach(tile => {
            //     //     this.flipPiecesInDir(tile, dir);
            //     //     // const abovePos = [tile.pos[0] + 1, tile.pos[1]];
            //     //     // if (Util.validPos(abovePos)) {
            //     //     //     const aboveTile = this.board[abovePos[0]][abovePos[1]];
    
            //     //     //     if (aboveTile.val === tile.val) {
            //     //     //         tile.double();
            //     //     //     };
    
            //     //     //     aboveTile.makeMove(dir);
            //     //     // };
            //     // });
            // } else if (dir === 'down') {
            //     this.board[0].forEach(tile => {
            //         const belowPos = [tile.pos[0] - 1, tile.pos[1]];
            //         if (Util.validPos(belowPos)) {
            //             const belowTile = this.board[belowPos[0]][belowPos[1]];
            //             belowTile.double();
            //             belowTile.makeMove(dir);
            //         };
            //     });
            // } else if (dir === 'left') {
        
            // } else if (dir === 'right') {
        
            // };
            // this.placeRandomPiece(1);

        // }
        // debugger
        const nextPos = [tile.pos[0] + DIRS[dir][0], tile.pos[1] + DIRS[dir][1]];
        const prevPos = [tile.pos[0] - DIRS[dir][0], tile.pos[1] - DIRS[dir][1]];
        // debugger 
        if (!Util.validPos(prevPos)) {
            const nextTile = this.board[nextPos[0]][nextPos[1]];
            
            if (!tile.empty && (tile.val === nextTile.val)) {
                tile.double();
                nextTile.reset();
            } 
            // else if (tile.empty) {
            //     tile.copy(nextTile);
            //     nextTile.reset()
            // }
            // this.flipPiecesInDir(nextTile, dir);
        } 
        else if (!Util.validPos(nextPos)) {
            // const prevTile = this.board[prevPos[0]][prevPos[1]];

            // if (tile.val === prevTile.val) {
            //     prevTile.double();
            //     tile.reset();
            // } else if (prevTile.empty) {
            //     prevTile.copy(tile);
            //     tile.reset();
            // }
            // return;
        } 
        else {
            // const prevTile = this.board[prevPos[0]][prevPos[1]];
            const nextTile = this.board[nextPos[0]][nextPos[1]];

            if (tile.val === nextTile.val) {
                tile.double();
                nextTile.reset();
            } 
            // else if (prevTile.empty) {
            //     prevTile.copy(tile);
            //     tile.reset();
            // }
            // this.flipPiecesInDir(nextTile, dir);
        }

        // this.compress();
    }

    compressUp() {
        // debugger;
        this.board.flat().forEach(tile => {
            this.moveToTop(tile);
       });
    }

    compressDown() {
        this.board.flat().forEach(tile => {
            this.moveToBottom(tile);
       });
    }

    compressLeft() {
        this.board.flat().forEach(tile => {
            this.moveToLeft(tile);
        });
    }
    
    compressRight() {
        this.board.flat().forEach(tile => {
            this.moveToRight(tile);
        });
    }

    moveToTop(tile) {
        const abovePos = [tile.pos[0] - 1, tile.pos[1]];
        if (!Util.validPos(abovePos)) {
            return;
        }
        const aboveTile = this.board[abovePos[0]][abovePos[1]];
        if (aboveTile.empty) {
            aboveTile.copy(tile);
            tile.reset();
        }
        this.moveToTop(aboveTile);
    }

    moveToBottom(tile) {
        const belowPos = [tile.pos[0] + 1, tile.pos[1]];
        if (!Util.validPos(belowPos)) {
            return;
        }
        const belowTile = this.board[belowPos[0]][belowPos[1]];
        if (belowTile.empty) {
            belowTile.copy(tile);
            tile.reset();
        }
        this.moveToBottom(belowTile);
    }

    moveToLeft(tile) {
        const leftPos = [tile.pos[0], tile.pos[1] - 1];
        if (!Util.validPos(leftPos)) {
            return;
        }
        const leftTile = this.board[leftPos[0]][leftPos[1]];
        if (leftTile.empty) {
            leftTile.copy(tile);
            tile.reset();
        }
        this.moveToLeft(leftTile);
    }

    moveToRight(tile) {
        const rightPos = [tile.pos[0], tile.pos[1] + 1];
        if (!Util.validPos(rightPos)) {
            return;
        }
        const rightTile = this.board[rightPos[0]][rightPos[1]];
        if (rightTile.empty) {
            rightTile.copy(tile);
            tile.reset();
        }
        this.moveToRight(rightTile);
    }

    flipPiecesInDir(tile, dir) {

        // if (dir === 'up') {
        //     const belowPos = [tile.pos[0] + 1, tile.pos[1]];
    
        //     if (Util.validPos(belowPos)) {
        //         const belowTile = this.board[belowPos[0]][belowPos[1]];

        //         if (tile.empty) {
        //             tile.copy(belowTile);
        //         }
    
        //         if (!tile.empty && (belowTile.val === tile.val)) {
        //             tile.double();
        //             belowTile.reset();
        //             flipped = true;
        //         };

        //         this.flipPiecesInDir(belowTile, dir, flipped);
        //     };
        //     // debugger;
        //     // if (tile.pos[0] === 0 && tile.pos[1] === 3 && flipped) {this.placeRandomPiece(1)}
        // }

        const nextPos = [tile.pos[0] + DIRS[dir][0], tile.pos[1] + DIRS[dir][1]];
        const prevPos = [tile.pos[0] - DIRS[dir][0], tile.pos[1] - DIRS[dir][1]];
        // debugger
        if (!Util.validPos(prevPos)) {
            const nextTile = this.board[nextPos[0]][nextPos[1]];
            
            if (!tile.empty && (tile.val === nextTile.val)) {
                tile.double();
                nextTile.reset();
            } 
            // else if (tile.empty) {
            //     tile.copy(nextTile);
            //     nextTile.reset()
            // }
            // this.flipPiecesInDir(nextTile, dir);
        } 
        // else if (!Util.validPos(nextPos)) {
        //     const prevTile = this.board[prevPos[0]][prevPos[1]];

        //     if (tile.val === prevTile.val) {
        //         prevTile.double();
        //         tile.reset();
        //     } else if (prevTile.empty) {
        //         prevTile.copy(tile);
        //         tile.reset();
        //     }
        //     return;
        // } 
        else {
            // const prevTile = this.board[prevPos[0]][prevPos[1]];
            const nextTile = this.board[nextPos[0]][nextPos[1]];

            if (tile.val === nextTile.val) {
                tile.double();
                nextTile.reset();
            } 
            // else if (prevTile.empty) {
            //     prevTile.copy(tile);
            //     tile.reset();
            // }
            // this.flipPiecesInDir(nextTile, dir);
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
        this.placeInitialPieces();
    }

}

export default Game;