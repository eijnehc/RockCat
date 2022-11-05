import { IQuestionGame } from "./questions";

export const TILE_SIZE = 32
export const COLS = 12
export const ROWS = 12

export const GAME_TILES = {
    8: 'assets/map/water.png',
    1: 'assets/map/grass.png',
    2: 'assets/map/sand.png',
    3: 'assets/map/rockwall.png',
    4: 'assets/map/tree.png',
    5: 'assets/map/log.png',
    6: 'assets/map/rock.png',
    7: 'assets/map/sign.png',
};

export const GAME_HERO_DETAILS = {
    sprite: 'assets/heroes/redhoodmain.png',
    imageSize: 32,
    imageStart: {
        sx: 0,
        sy: 0
    }
}

export const MOVEMENT = {
    up: [0, -1],
    left: [-1, 0],
    down: [0, 1],
    right: [1, 0],
};

export const SOLID_TILES = [3, 4, 5, 6];

// this function need to refactored: pass in dimension dict
export const isSolidTile = (x: number, y: number, questionGame: IQuestionGame) => {

    for (const level of questionGame.mapLevels) {
        if (SOLID_TILES.includes(level[y][x])) {
            return true;
        }
    }
    return false;
};

// this function need to refactored: pass in dimension dict
export const isMapEdge = (x: number, y: number, questionGame: IQuestionGame) => {
    const { rows, columns} = questionGame.dimensions;
    return (x < 0 || x >= columns || y < 0 || y >= rows)        
};

export const checkMapCollision = (x: number, y: number, questionGame: IQuestionGame) => {
    return isMapEdge(x,y, questionGame) || isSolidTile(x,y, questionGame);
};