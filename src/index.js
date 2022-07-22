import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    window.game = new Game(main);
})