import Tile from './tile';

class Game {
    constructor(ele) {
        this.ele = ele;
        this.tiles = [];

        this.setupBoard();
        this.handleKeyDown.bind(this)();
    }


    // handleClick() {
    //     this.ele.children[0].innerText = 'Ouch';
    // }

    handleKeyDown() {
        // const tiles = Array.from(this.ele.children[0].children);
        addEventListener('keydown', e => {
                console.log(e.code);
        });
    }

    setupBoard() {
        const board = document.createElement('ul');
        board.className = 'board';

        for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
            for (let colIdx = 0; colIdx < 4; colIdx++) {
                let tile = document.createElement('li');
                let tileInstance = new Tile([rowIdx, colIdx]);
                this.tiles.push(tileInstance);
                tile.setAttribute('pos', [rowIdx, colIdx]);
                tile.className = 'tile';

                board.append(tile);
            }
        }

        this.ele.append(board);
    }

}

export default Game;