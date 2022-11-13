import { atom } from 'jotai';

export const mapDrawnAtom = atom(false)

export const mapUpdateRequiredAtom = atom(false);

export const mapTilesAtom = atom<string[]>([])

export const isAllTilesLoadedAtom = atom(get => get(mapTilesAtom).length === 8);

export const questionGridMapToDraw = atom<string|null>(null);