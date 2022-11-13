import React, { FC, MutableRefObject,useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';

import { mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext from './canvasContext';
import { CANVAS_LENGTH_WIDTH } from './constants';
import { GameGrid } from './GameGrid';
import { ImageLoader } from './ImageLoader';

export const GameComponent: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [renderingContext, setRenderingContext] = useState<CanvasRenderingContext2D | null>(null);
    const [mapUpdateRequired, setMapUpdateRequired] = useAtom(mapUpdateRequiredAtom)
    const loopRef:MutableRefObject<number> = useRef(0);

    const tick = useCallback(() => {
        if (mapUpdateRequired) {
            setMapUpdateRequired(false);
        }
        loopRef.current = requestAnimationFrame(tick);
    }, [mapUpdateRequired, setMapUpdateRequired]);


    useEffect(() => {
        loopRef.current = requestAnimationFrame(tick);
        return () => {
            loopRef.current && cancelAnimationFrame(loopRef.current);
        }
    }, [loopRef, tick])

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
        <>
            <CanvasContext.Provider value={{ renderingContext, saveRenderingContext  }}>
                <canvas
                    ref={canvasRef}
                    width={CANVAS_LENGTH_WIDTH}
                    height={CANVAS_LENGTH_WIDTH}
                />
                <ImageLoader/>
                <GameGrid /> 
            </CanvasContext.Provider>
        </>

    );

}