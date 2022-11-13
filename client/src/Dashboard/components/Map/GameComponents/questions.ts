import { MAP_SQUARE_SIZE } from './constants'

export interface IQuestionGameMap {
  [key: string]: IQuestionGame
}

export interface IQuestionGame {
  mapLevels: number[][][]
  finalLocation: { x: number; y: number }
  dimensions: {
    columns: number
    rows: number
    width: number
    height: number
  }
  initialJSHelperString?: string
}

export const questionsMap: IQuestionGameMap = {
  question1: {
    mapLevels: [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      ],
      [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0],
      ],
    ],
    finalLocation: { x: 11, y: 1 },
    dimensions: {
      columns: 12,
      rows: 4,
      width: 12 * MAP_SQUARE_SIZE,
      height: 4 * MAP_SQUARE_SIZE,
    },
    initialJSHelperString:
      '// change stepsNeededToEscape count \nconst stepsNeededToEscape = 0\n\n// Write a for loop or while loop to move character\n',
  },
  question2: {
    mapLevels: [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      [
        [4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4],
        [5, 0, 6, 4, 4, 4, 4, 4, 0, 6, 0, 4],
        [4, 0, 4, 0, 0, 0, 5, 4, 0, 4, 0, 5],
        [4, 0, 4, 0, 4, 7, 0, 4, 0, 4, 0, 4],
        [4, 0, 5, 0, 4, 4, 4, 4, 0, 4, 0, 4],
        [4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4],
        [4, 0, 4, 4, 4, 6, 4, 4, 4, 4, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 5, 4, 4, 5, 4, 4, 4, 5, 4, 4],
      ],
    ],
    finalLocation: { x: 5, y: 6 },
    dimensions: {
      columns: 12,
      rows: 12,
      width: 12 * MAP_SQUARE_SIZE,
      height: 12 * MAP_SQUARE_SIZE,
    },
    initialJSHelperString:
      'let loopCount = 0\n\nwhile (loopCount<1000){\n    if (escaped()){\n    break;\n  }\n  \n  // add logic to conditionally turn in the correct direction\n  \n  // call a function to move the character\n  \n  loopCount++\n}\n',
  },
  question3: {
    mapLevels: [
      [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7],
      ],
    ],
    finalLocation: { x: 11, y: 10 },
    dimensions: {
      columns: 12,
      rows: 11,
      width: 12 * MAP_SQUARE_SIZE,
      height: 11 * MAP_SQUARE_SIZE,
    },
    initialJSHelperString:
      'let stepCount = 0\nlet turnCount = 0;\n\nwhile(stepCount < 1000) {\n  if (escaped()){\n    break;\n  }\n  \n  if (isBlocked()) {\n    // add logic here to solve the puzzle\n    // use turnCount and floored division\n  }\n  \n  // call function to move character here\n\n  stepCount++\n}\n',
  },
  test: {
    mapLevels: [
      [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3],
        [3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3],
      ],
      [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 4, 4, 0, 5, 6, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 0, 0, 6, 4, 4, 4, 4, 4, 4],
      ],
    ],
    finalLocation: { x: 4, y: 0 },
    dimensions: {
      columns: 12,
      rows: 12,
      width: 12 * MAP_SQUARE_SIZE,
      height: 12 * MAP_SQUARE_SIZE,
    },
  },
}
