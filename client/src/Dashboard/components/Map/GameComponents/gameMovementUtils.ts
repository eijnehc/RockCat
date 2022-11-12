import { DirectionFacing, LeftRight } from "./gameAtoms.ts/characterAtom";
import { WALLS } from "./constants";
import { IQuestionGame } from "./questions";

const isWall = (x: number, y: number, questionGame: IQuestionGame) => {
    // check that character cannot move through any solid tils
    for (const level of questionGame.mapLevels) {
        if (level[y] && level[y][x] && WALLS.includes(level[y][x])) {
            return true;
        }
    }
    return false;
};

const isMapEdge = (x: number, y: number, questionGame: IQuestionGame) => {
    const { rows, columns} = questionGame.dimensions;
    // check within dimension bounds
    return (x < 0 || x >= columns || y < 0 || y >= rows)        
};

// This function can be simplified and optimized
export const getNextTurnDirection = (currentDirection: DirectionFacing, leftRight: LeftRight, lastMoved? : DirectionFacing) => {
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
    const clockwiseOrAntiDirectionList: DirectionFacing[] = leftRight === "right" ? ['up', 'right', 'down', 'left'] : ['up', 'left', 'down', 'right'];
    const filteredDirectionList = clockwiseOrAntiDirectionList.filter(dir => {
        if(dir !== lastMovedOppositeDirection) {
            return dir;
        }
    })
    const currentDirectionIndex = filteredDirectionList.indexOf(currentDirection);
    const nextDirectionIndex = currentDirectionIndex < filteredDirectionList.length-1 ? currentDirectionIndex+1 : 0;
    return filteredDirectionList[nextDirectionIndex];
}

export const checkCollision = (x: number, y: number, questionGame: IQuestionGame) => {
    return isWall(x,y, questionGame) || isMapEdge(x,y, questionGame);
};
