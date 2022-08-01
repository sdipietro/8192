import Util from './util';

const COLORMAP = {
    2: '#00FFFF',
    4: '#FF8000',
    8: '#eea29a',
    16: '#c94c4c',
    32: '#92a8d1',
    64: '#034f84',
    128: '#f7786b',
    256: '#ffef96',
    512: '#50394c',
    1024: 'coral',
    2048: 'crimson',
    4096: 'darkorange',
    8192: 'gold',
    16384: 'hotpink',
    32768: 'indigo',
    65536: 'lime',
    131072: 'midnightblue'
};

class Tile {
    
    constructor(pos, val) {
        this.pos = pos;
        this.val = val;
        this.empty = true;
        this.color = this.empty ? 'lightgrey' : COLORMAP[val];
    }

    updateColor() {
        this.color = this.empty ? 'lightgrey' : COLORMAP[this.val];
    }

    double() {
        this.val = this.val * 2;
        this.updateColor();
        Util.renderTile(this);
    }

    reset() {
        this.val = 0;
        this.empty = true;
        this.updateColor();
        Util.renderTile(this);
    }

    copy(tile) {
        this.val = tile.val;
        tile.empty ? this.empty = true : this.empty = false;
        this.updateColor();
        Util.renderTile(this);
    }
}

export default Tile;