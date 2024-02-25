class Chandrayan {
    constructor(x = 0, y = 0, z = 0, direction = 'N', lastDirection = 'N') {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
        this.lastDirection = lastDirection
    }


    move(path) {
        let distance = 1;
        if (path === 'B') {
            distance = -1;
        }
        switch (this.direction) {
            case 'N':
                this.y = this.y + distance;
                break;
            case 'S':
                this.y = this.y - distance;
                break;
            case 'E':
                this.x = this.x + distance;
                break;
            case 'W':
                this.x = this.x - distance;
                break;
            case 'U':
                this.z = this.z + distance;
                break;
            case 'D':
                this.z = this.z - distance;
                break;
        }
    }

    turn(direction) {
        const linkedList = {
            N: {
                left: 'W',
                right: 'E'
            },
            E: {
                left: 'N',
                right: 'S'
            },
            W: {
                left: 'S',
                right: 'N'
            },
            S: {
                left: 'E',
                right: 'W'
            }
        }
        switch (direction) {
            case 'U':
                this.direction = 'U';
                break;
            case 'D':
                this.direction = 'D';
                break;
            case 'R':
                if (this.direction === 'U' || this.direction === 'D') {
                    this.direction = linkedList[this.lastDirection].right;
                } else {
                    this.direction = linkedList[this.direction].right;
                    this.lastDirection = this.direction
                }
                break;
            case 'L':
                if (this.direction === 'U' || this.direction === 'D') {
                    this.direction = linkedList[this.lastDirection].left;

                }
                else {
                    this.direction = linkedList[this.direction].left;
                    this.lastDirection = this.direction
                }
                break;


        }
    }


}

function main(input) {
    const chandrayan3 = new Chandrayan(0, 0, 0, 'N');
    const inputCommands = input;
    inputCommands.map(ele => {
        if (ele === 'F' || ele === 'B') {
            chandrayan3.move(ele)
        } else {
            chandrayan3.turn(ele)
        }
    })
    return {x:chandrayan3.x,y:chandrayan3.y,z:chandrayan3.z}

}
console.log(main(["F", "R", "U", "B", "L"]))
module.exports = Chandrayan