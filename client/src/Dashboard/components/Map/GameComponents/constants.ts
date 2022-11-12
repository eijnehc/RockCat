
export const MAP_SQUARE_SIZE = 32
export const CANVAS_LENGTH_WIDTH = 12 * MAP_SQUARE_SIZE;

interface IStringKeyDict {
    [key: string]: string;
 }

export const MAP_ASSETS: IStringKeyDict= {
    8: 'assets/map/water.png',
    1: 'assets/map/grass.png',
    2: 'assets/map/sand.png',
    3: 'assets/map/rockwall.png',
    4: 'assets/map/tree.png',
    5: 'assets/map/log.png',
    6: 'assets/map/rock.png',
    7: 'assets/map/sign.png',
};

interface ISprites {
    up: string,
    left: string,
    down: string
    right: string,
 }

export const GAME_HERO_DETAILS = {
    sprites: {
        up: 'assets/heroes/redhood-up.png',
        left: 'assets/heroes/redhood-left.png',
        down: 'assets/heroes/redhood-down.png',
        right: 'assets/heroes/redhood-right.png',
    } as ISprites,
    imageSize: 32,
}

export const WALLS = [3, 4, 5, 6];

interface IMovement {
    up: [number, number],
    left: [number, number],
    down: [number, number],
    right: [number, number],
 }

export const MOVEMENT: IMovement = {
    up: [0, -1],
    left: [-1, 0],
    down: [0, 1],
    right: [1, 0],
};
