import redhoodDown from '../../../assets/heroes/redhood-down.png'
import redhoodLeft from '../../../assets/heroes/redhood-left.png'
import redhoodRight from '../../../assets/heroes/redhood-right.png'
import redhoodUp from '../../../assets/heroes/redhood-up.png'
import grass from '../../../assets/map/grass.png'
import log from '../../../assets/map/log.png'
import rock from '../../../assets/map/rock.png'
import rockwall from '../../../assets/map/rockwall.png'
import sand from '../../../assets/map/sand.png'
import sign from '../../../assets/map/sign.png'
import tree from '../../../assets/map/tree.png'
import water from '../../../assets/map/water.png'

export const MAP_SQUARE_SIZE = 32
export const CANVAS_LENGTH_WIDTH = 12 * MAP_SQUARE_SIZE

interface IStringKeyDict {
  [key: string]: string
}

export const MAP_ASSETS: IStringKeyDict = {
  1: grass,
  2: sand,
  3: rockwall,
  4: tree,
  5: log,
  6: rock,
  7: sign,
  8: water,
}

interface ISprites {
  up: string
  left: string
  down: string
  right: string
}

export const GAME_HERO_DETAILS = {
  sprites: {
    up: redhoodUp,
    left: redhoodLeft,
    down: redhoodDown,
    right: redhoodRight,
  } as ISprites,
  imageSize: 32,
}

export const WALLS = [3, 4, 5, 6]

interface IMovement {
  up: [number, number]
  left: [number, number]
  down: [number, number]
  right: [number, number]
}

export const MOVEMENT: IMovement = {
  up: [0, -1],
  left: [-1, 0],
  down: [0, 1],
  right: [1, 0],
}

export const TRAPPED_ENDING = 'Red Riding Hood is Trapped Forever'
export const ESCAPED_ENDING = 'Red Riding Hood has Escaped'
