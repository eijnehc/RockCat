import { atom } from 'jotai'

export const mapDrawnAtom = atom(false)

export const mapUpdateRequiredAtom = atom(false)

export const mapTilesAtom = atom<string[]>([])

export const questionGridMapToDraw = atom<string | null>(null)
