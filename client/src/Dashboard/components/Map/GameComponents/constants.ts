import { Direction } from "@codemirror/view";
import { DirectionFacing } from "./gameAtoms.ts/characterAtom";
import { IQuestionGame } from "./questions";

export const TILE_SIZE = 32
export const COLS = 12
export const ROWS = 12

interface IStringKeyDict {
    [key: string]: string;
 }

export const GAME_TILES: IStringKeyDict= {
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
    sprite: 'assets/heroes/redhoodmain.png',
    sprites: {
        up: 'assets/heroes/redhood-up.png',
        left: 'assets/heroes/redhood-left.png',
        down: 'assets/heroes/redhood-down.png',
        right: 'assets/heroes/redhood-right.png',
    } as ISprites,
    imageSize: 32,
    imageStart: {
        sx: 0,
        sy: 0
    }
}

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

export const SOLID_TILES = [3, 4, 5, 6];

export const isSolidTile = (x: number, y: number, questionGame: IQuestionGame) => {
    // check that character cannot move through any solid tils
    for (const level of questionGame.mapLevels) {
        if (SOLID_TILES.includes(level[y][x])) {
            return true;
        }
    }
    return false;
};

export const isMapEdge = (x: number, y: number, questionGame: IQuestionGame) => {
    const { rows, columns} = questionGame.dimensions;
    // check within dimension bounds
    return (x < 0 || x >= columns || y < 0 || y >= rows)        
};

export const checkMapCollision = (x: number, y: number, questionGame: IQuestionGame) => {
    return isMapEdge(x,y, questionGame) || isSolidTile(x,y, questionGame);
};


export const getNextTurnDirection = (currentDirection: DirectionFacing, lastMoved? : DirectionFacing) => {
    let  lastMovedOppositeDirection: DirectionFacing;
    if (lastMoved) {
        if (lastMoved === 'up') {
            lastMovedOppositeDirection = 'down';
        } else if(lastMoved === 'down') {
            lastMovedOppositeDirection = 'up';
        } else if(lastMoved === 'left') {
            lastMovedOppositeDirection = 'right';
        } else if(lastMoved === 'right') {
            lastMovedOppositeDirection = 'left';
        }
    }
    const clockwiseDirectionList: DirectionFacing[] = ['up', 'right', 'down', 'left'];
    const filteredDirectionList = clockwiseDirectionList.filter(dir => {
        if(dir !== lastMovedOppositeDirection) {
            return dir;
        }
    })
    const currentDirectionIndex = filteredDirectionList.indexOf(currentDirection);
    // simple circular array logic
    const nextDirectionIndex = currentDirectionIndex < filteredDirectionList.length-1 ? currentDirectionIndex+1 : 0;
    return filteredDirectionList[nextDirectionIndex];
}