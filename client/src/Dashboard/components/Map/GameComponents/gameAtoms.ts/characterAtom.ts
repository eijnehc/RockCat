import { atom } from 'jotai';

export interface ICharacter {
    x: number;
    y: number;
    characterImage: string|null;
    loaded: boolean
}

export const characterAtom = atom<ICharacter>({
    x: 6,
    y: 6,        
    characterImage: null,
    loaded: false,
})

export const isHeroLoadedAtom = atom(get => get(characterAtom).loaded);
