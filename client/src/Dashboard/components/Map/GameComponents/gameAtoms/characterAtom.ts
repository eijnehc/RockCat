import { atom } from 'jotai'

export type DirectionFacing = 'down' | 'up' | 'right' | 'left'

export type LeftRight = 'right' | 'left'

export interface ICharacter {
  x: number
  y: number
  characterImage: string | null
  loadedSprites: string[]
  facing: DirectionFacing
  lastMoved?: DirectionFacing
}

export const characterAtom = atom<ICharacter>({
  x: 0,
  y: 1,
  characterImage: null,
  loadedSprites: [],
  facing: 'right',
})
