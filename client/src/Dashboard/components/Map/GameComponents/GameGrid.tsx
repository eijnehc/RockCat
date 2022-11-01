import React, { FC } from 'react';
import { useAtom } from 'jotai';

import { isHeroLoadedAtom } from './gameAtoms.ts/characterAtom';
import { isAllTilesLoadedAtom,mapDrawnAtom } from './gameAtoms.ts/mapAtom';
import { DrawHero } from './DrawHero';
import { DrawMap } from './DrawMap';


export const GameGrid: FC = () => {
    const [isAllTilesLoaded] = useAtom (isAllTilesLoadedAtom);
    const [isHeroLoaded] = useAtom(isHeroLoadedAtom)
    const [isMapDrawn] = useAtom(mapDrawnAtom)

    return (
        <>
            {
                isAllTilesLoaded && 
                <DrawMap />
            }
            {
                isMapDrawn && isHeroLoaded &&
                <DrawHero/>
            }
        </>
    )

}