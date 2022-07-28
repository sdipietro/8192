import Tile from './tile';
import Game from './game';
import Util from './util';

class GameView {
    constructor(size) {
        this.size = size;
        this.game = new Game(this.size);

        this.setupBoard(this.game.size);
        this.handleNewGameClick.bind(this)();
    }

    setupBoard(size) {
        const main = document.getElementById('main')
        const board = document.createElement('ul');
        board.classList.add('board');
        board.classList.add(`size${size}`);

        for (let rowIdx = 0; rowIdx < size; rowIdx++) {
            const tileRow = [];
            for (let colIdx = 0; colIdx < size; colIdx++) {
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
            this.game.board.push(tileRow);
            Util.renderScore(this.game.score);
        }

        main.append(board);
        this.game.placeInitialPieces();
    }

    handleNewGameClick() {
        const newGameButton = document.getElementById('new-game-button');
        newGameButton.addEventListener('click', () => {
            const boardEle = document.getElementsByClassName('board')[0];
            boardEle.remove();

            this.game.board = [];
            this.game.changeMadeToBoard = false;
            this.game.score = 0;

            this.setupBoard(this.game.size);
        });
    }
}

export default GameView;