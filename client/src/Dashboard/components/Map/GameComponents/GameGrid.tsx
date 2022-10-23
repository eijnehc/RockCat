import React, { FC, useCallback, useContext,useEffect, useRef, useState } from 'react';

import CanvasContext,{ ICanvasContext }  from './canvasContext';
import { DIMENSIONS_DICT } from './constants';

const {
    TILE_SIZE,
    HEIGHT,
    WIDTH
} = DIMENSIONS_DICT

export const GameGrid: FC = () => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;

    useEffect(() => {
        if (renderingContext) {
            renderingContext.fillStyle = "blue";
            renderingContext.fillRect(0, 0, WIDTH, HEIGHT);

            for (let i = 0; i < HEIGHT; i++) {
                const y = i * TILE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(0, y);
                renderingContext.lineTo(WIDTH, y);
                renderingContext.stroke();
            }
            for (let j = 0; j < WIDTH; j++) {
                const x = j * TILE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(x, 0);
                renderingContext.lineTo(x, HEIGHT);
                renderingContext.stroke();
            }
        }
        return () => {
            renderingContext && renderingContext.clearRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
        }
    }, [renderingContext, saveRenderingContext])

    return (
        <>
        </>
    )

}