import React, { useContext, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';

import { characterAtom } from './gameAtoms.ts/characterAtom';
import { mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { GAME_HERO_DETAILS } from './constants';
import { DIMENSIONS_DICT } from './constants';

const {
    TILE_SIZE,
} = DIMENSIONS_DICT

export const DrawHero = () => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const [character] = useAtom(characterAtom);
    const { x, y, characterImage, loaded } = character
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
    }, [renderingContext, characterImage, x, y, loaded, saveRenderingContext, isUpdateRequired]);

    return (
        null
    );
};