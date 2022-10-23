import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import CanvasContext from './canvasContext';
import { DIMENSIONS_DICT } from './constants';
import { GameGrid } from './GameGrid';

export const GameComponent: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [renderingContext, setRenderingContext] = useState<CanvasRenderingContext2D | null>(null);
    const loopRef = useRef();
    const width = DIMENSIONS_DICT.WIDTH;
    const height = DIMENSIONS_DICT.HEIGHT;

    // effect to get handle of the Canvas Ref and set it to state
    useEffect(() => {
        if (canvasRef && canvasRef.current) {
            setRenderingContext(canvasRef.current.getContext('2d'));
        }
    }, []);

    // function that children of GameComponent can use to affect(drawing and rendering) the canvas component 
    const saveRenderingContext = (context?: CanvasRenderingContext2D) => {
        if (canvasRef && canvasRef.current && context) {
            setRenderingContext(context)
        }
    }

    return (
        <CanvasContext.Provider value={{ renderingContext, saveRenderingContext  }}>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
            />
            <GameGrid/>
        </CanvasContext.Provider>
    );

}