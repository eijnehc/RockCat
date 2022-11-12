import React, { FC, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';

import { characterAtom } from './gameAtoms.ts/characterAtom';
import { mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { GAME_HERO_DETAILS } from './constants';
import { MAP_SQUARE_SIZE } from './constants';

const { imageSize } = GAME_HERO_DETAILS

export const DrawHero:FC <{questionKey: string}> = () => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const [character] = useAtom(characterAtom);
    const { x, y, characterImage } = character
    const [isUpdateRequired,] = useAtom(mapUpdateRequiredAtom)

    useEffect(() => {
        if (characterImage && renderingContext) {
            renderingContext.drawImage(
                document.querySelector(characterImage),
                0,
                0,
                imageSize ,
                imageSize ,
                x * MAP_SQUARE_SIZE,
                y * MAP_SQUARE_SIZE,
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