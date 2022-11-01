
const TILE_SIZE = 32
const COLS = 12
const ROWS = 12

export const DIMENSIONS_DICT = {
    COLS,
    ROWS,
    TILE_SIZE,
    WIDTH: COLS * TILE_SIZE,
    HEIGHT: ROWS * TILE_SIZE
};

export const GAME_TILES = {
    1: 'assets/map/grass.png',
    2: 'assets/map/sand.png',
    3: 'assets/map/grass.png',
    4: 'assets/map/tree.png',
    5: 'assets/map/log.png',
};

export const GAME_HERO_DETAILS = {
    sprite: 'assets/heroes/redhoodmain.png',
    imageSize: 32,
    imageStart: {
        sx: 0,
        sy: 0
    }
}

export const GRID_LEVELS_ASSET_POSITIONS = [
    [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
        [3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3,],
    ],
    [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4,],
        [4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4,],
    ],
];

export const MOVEMENT = {
    up: [0, -1],
    left: [-1, 0],
    down: [0, 1],
    right: [1, 0],
};

export const SOLID_TILES = [4, 5];

export const isSolidTile = (x: number, y: number) => {
    for (const level of GRID_LEVELS_ASSET_POSITIONS) {
        if (SOLID_TILES.includes(level[y][x])) {
            return true;
        }
    }
    return false;
};

export const isMapEdge = (x: number, y: number) => {
    const {ROWS, COLS} = DIMENSIONS_DICT;
    return (x < 0 || x >= COLS || y < 0 || y >= ROWS)        
};

export const checkMapCollision = (x: number, y: number) => {
    return isMapEdge(x,y) || isSolidTile(x,y);
};