const SimplexNoise = require('simplex-noise');

const simplex = new SimplexNoise("waka")
const WIDTH = 78
const HEIGHT = 24
const x  = 39
const y  = 12
const zoom = 128
let xx = -2
let yy = 0
const map = []

for (let i = 0; i <= HEIGHT; i++) {
    const row = []
    map.push(row);
    for (let j = 0; j <= WIDTH; j++) {
        const tile = simplex.noise2D( (j -( x + xx))/zoom,  (i - (y + yy))/zoom) 
        if (tile < -0.4) {
            map[i][j] = "~";
        } else if (tile < .3) {
            map[i][j] = ".";
        } else if (tile > .5){
            map[i][j] = "^"
        } else {
            map[i][j] = "#"
        }
    }
}
map[y][x] = "@";
console.log(map.map(row => row.join("")).join('\n'))
