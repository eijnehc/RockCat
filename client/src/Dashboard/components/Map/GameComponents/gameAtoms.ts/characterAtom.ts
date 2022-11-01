import { atom } from 'jotai';

export interface ICharacter {
    x: number;
    y: number;
    heroClass: string;
    heroImg: string|null;
    loaded: boolean
}

export const characterAtom = atom<ICharacter>({
    x: 6,
    y: 6,        
    heroClass: 'FLAME_SWORDSMAN',
    heroImg: null,
    loaded: false,
})

export const isHeroLoadedAtom = atom(get => get(characterAtom).loaded);
