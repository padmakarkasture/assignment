class Chandrayan {
    constructor(x = 0, y = 0, z = 0, direction = 'N') {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction
    }

    move(path) {
        let distance = 1;
        if (path === 'b') {
            distance = -1;
        }
        switch (this.direction) {
            case 'N':
                this.y=this.y + distance
                break;
        }
}
}
module.exports = Chandrayan