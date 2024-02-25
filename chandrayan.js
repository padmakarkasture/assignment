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
                this.y = this.y + distance
                break;
            case 'S':
                this.y = this.y - distance
                break;
            case 'E':
                this.x = this.x + distance
                break;
            case 'W':
                this.x = this.x - distance
                break;
            case 'U':
                this.z = this.z + distance
                break;
            case 'D':
                this.z = this.z - distance
                break;
        }
    }
}
module.exports = Chandrayan