import Util from './util';

const COLORMAP = {
    2: 'blue',
    4: 'red',
    8: 'pink',
    16: 'orange',
    32: 'yellow',
    64: 'green',
    128: 'purple',
    256: 'aquamarine',
    512: 'chocolate',
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
        debugger;
        this.val = 0;
        this.empty = true;
        this.updateColor();
        Util.renderTile(this);
    }
}

export default Tile;