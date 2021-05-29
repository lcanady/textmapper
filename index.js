const SimplexNoise = require("simplex-noise");

const simplex = new SimplexNoise("world");
const WIDTH = 24;
const HEIGHT = 24;
const x = 19;
const y = 6;
const zoom = 32;
let xx = 6;
let yy = 15;
const map = [];

for (let i = 0; i <= HEIGHT; i++) {
  const row = [];
  map.push(row);
  for (let j = 0; j <= WIDTH; j++) {
    const tile = simplex.noise2D((j - (x + xx)) / zoom, (i - (y + yy)) / zoom);
    if (tile < -0.4) {
      map[i][j] = "~";
    } else if (tile < 0.3) {
      map[i][j] = ".";
    } else if (tile > 0.5) {
      map[i][j] = "^";
    } else {
      map[i][j] = "#";
    }
  }
}
map[y][x] = "@";
console.log(map.map((row) => row.join(" ")).join("\n"));
