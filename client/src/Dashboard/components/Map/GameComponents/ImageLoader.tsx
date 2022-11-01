import React, { FC, useRef } from 'react';
import { useAtom } from 'jotai';

import { characterAtom } from './gameAtoms.ts/characterAtom';
import { mapTilesAtom } from './gameAtoms.ts/mapAtom';
import {GAME_HERO_DETAILS,GAME_TILES} from './constants';

export const ImageLoader: FC = () => {
    const charRef = useRef(null);
    const [, setMapTiles] = useAtom(mapTilesAtom)
    const [, setCharacter] = useAtom(characterAtom)

    const tilesLoaded = (tileName:string) => {
        setMapTiles((prev) => {
            const newList = [...prev]
            newList.push(tileName)
            return newList
        })
    }

    const updatedcharacter = (heroId: string) => {
        setCharacter((prev) => {
            const updatedcharacter = { ... prev}
            updatedcharacter.characterImage =heroId;
            updatedcharacter.loaded = true
            return updatedcharacter;
        })
    }

    return (
        <div>
        {
            Object.keys(GAME_TILES).map(key => {
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
            <img
                id="character"
                ref={charRef}
                onLoad={
                    () => {
                        updatedcharacter(`#${charRef.current.id}`);
                    }
                }
                src={GAME_HERO_DETAILS.sprite}
            />
        </div>
    )
}