import React, { FC, useRef } from 'react';
import { useAtom } from 'jotai';

import { characterAtom, DirectionFacing } from './gameAtoms.ts/characterAtom';
import { mapTilesAtom } from './gameAtoms.ts/mapAtom';
import {GAME_HERO_DETAILS,GAME_TILES} from './constants';

export const ImageLoader: FC = () => {
    const [, setMapTiles] = useAtom(mapTilesAtom)
    const [, setCharacter] = useAtom(characterAtom)

    const tilesLoaded = (tileName:string) => {
        setMapTiles((prev) => {
            const newList = [...prev]
            newList.push(tileName)
            return newList
        })
    }

    const updatedcharacter = (heroId: string, srcString: string) => {
        setCharacter((prev) => {
            const updatedcharacter = { ... prev}
            updatedcharacter.characterImage = '#down';
            updatedcharacter.loadedSprites = [...updatedcharacter.loadedSprites, srcString]
            return updatedcharacter;
        })
    }

    return (
        <div>
        {
            Object.keys(GAME_TILES).map((key) => {
                return (
                    <img
                        key={`mapSquareImage-${key}`} 
                        id={`mapSquareImage-${key}`} 
                        src={`${GAME_TILES[key]}`}
                        onLoad={() => { 
                            tilesLoaded(`${GAME_TILES[key]}`)
                        }}
                    />
                );
            })
        }

        {
            Object.keys(GAME_HERO_DETAILS.sprites).map((value) => {
                const key = value as DirectionFacing;
                const srcString = GAME_HERO_DETAILS.sprites[key];
                return (
                    <img
                        key={key} 
                        id={key} 
                        src={srcString}
                        onLoad={
                            () => {
                                updatedcharacter(`#${key}`,srcString);
                            }
                        }
                    />
                );
            })
        }
        </div>
    )
}