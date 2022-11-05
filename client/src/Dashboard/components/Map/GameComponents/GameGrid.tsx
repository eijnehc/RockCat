import React, { FC } from 'react';
import { useAtom } from 'jotai';

import { isHeroLoadedAtom } from './gameAtoms.ts/characterAtom';
import { isAllTilesLoadedAtom,mapDrawnAtom, questionGridMapToDraw } from './gameAtoms.ts/mapAtom';
import { DrawHero } from './DrawHero';
import { DrawMap } from './DrawMap';


export const GameGrid: FC = () => {
    const [isAllTilesLoaded] = useAtom (isAllTilesLoadedAtom);
    const [questionGridMap, ] = useAtom(questionGridMapToDraw)
    const [isHeroLoaded] = useAtom(isHeroLoadedAtom)
    const [isMapDrawn] = useAtom(mapDrawnAtom)

    return (
        <>
            {
                isAllTilesLoaded && questionGridMap &&
                <DrawMap  questionKey={questionGridMap} />
            }
            {
                questionGridMap && isMapDrawn && isHeroLoaded &&
                <DrawHero questionKey={questionGridMap}/>
            }
        </>
    )

}