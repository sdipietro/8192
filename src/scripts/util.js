export default {
    validPos(pos) {
        return (pos[0] >= 0 && pos[1] >= 0 && pos[0] < 4 && pos[1] < 4);
    },

    renderTile(tile) {
        const tileEle = document.querySelector(`[data-pos='[${tile.pos}]']`);
        tile.val === 0 ? tileEle.innerHTML = '' : tileEle.innerHTML = tile.val;
        tileEle.style.backgroundColor = tile.color;
    }
};