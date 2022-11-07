import React, { FC, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';

import { characterAtom } from './gameAtoms.ts/characterAtom';
import { mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { GAME_HERO_DETAILS } from './constants';
import { TILE_SIZE } from './constants';

export const DrawHero:FC <{questionKey: string}> = () => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const [character] = useAtom(characterAtom);
    const { x, y, characterImage } = character
    const [isUpdateRequired,] = useAtom(mapUpdateRequiredAtom)
    const { imageStart, imageSize } = GAME_HERO_DETAILS

    useEffect(() => {
        if (characterImage && renderingContext) {
            const { sx, sy } = imageStart;
            renderingContext.drawImage(
                document.querySelector(characterImage),
                sx,
                sy,
                imageSize ,
                imageSize ,
                x * TILE_SIZE,
                y * TILE_SIZE,
                imageSize,
                imageSize,
            );
            saveRenderingContext(renderingContext)
        }
    }, [renderingContext, characterImage, x, y, saveRenderingContext, isUpdateRequired]);

    return (
        null
    );
};