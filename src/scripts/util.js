export default {
    validPos(pos, size) {
        return (pos[0] >= 0 && pos[1] >= 0 && pos[0] < size && pos[1] < size);
    },

    renderTile(tile) {
        const tileEle = document.querySelector(`[data-pos='[${tile.pos}]']`);
        tile.val === 0 ? tileEle.innerHTML = '' : tileEle.innerHTML = tile.val;
        tileEle.style.backgroundColor = tile.color;
    },

    renderScore(score) {
        const scoreEle = document.getElementById('score');
        scoreEle.innerHTML = score;
    }
};