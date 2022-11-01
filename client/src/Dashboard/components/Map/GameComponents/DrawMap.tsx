import { useContext, useEffect } from 'react';
import { useAtom } from 'jotai';

import { mapDrawnAtom, mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { DIMENSIONS_DICT,GRID_LEVELS_ASSET_POSITIONS } from './constants';

const {TILE_SIZE, COLS, ROWS, HEIGHT,WIDTH } = DIMENSIONS_DICT

export const DrawMap = () => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const[,setMapDrawnStatus] = useAtom(mapDrawnAtom);
    const [isUpdateRequired, ] = useAtom(mapUpdateRequiredAtom)

    useEffect(() => {
        if (renderingContext ) {

            // function to add image tiles
            const drawMap = (grid: number[][]) => {
                for (let i = 0; i < ROWS; i++) {
                    for (let j = 0; j < COLS; j++) {
                        const item = grid[i][j];
                        if (!item) {
                            // empty tile
                            continue;
                        }
                        const img = document.querySelector(`#mapSquareImage-${item}`);
                        const x = j * TILE_SIZE;
                        const y = i * TILE_SIZE;
                        renderingContext.drawImage(
                            img,
                            0,
                            0,
                            TILE_SIZE,
                            TILE_SIZE,
                            x,
                            y,
                            TILE_SIZE,
                            TILE_SIZE,
                        );
                    }
                }
            };
        
            drawMap(GRID_LEVELS_ASSET_POSITIONS[0]);
            drawMap(GRID_LEVELS_ASSET_POSITIONS[1]);

            // two loops to draw horizontal and vertical lines to decpict 2d grid
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

            setMapDrawnStatus(true);
        }
        return () => {
            renderingContext && renderingContext.clearRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
        }
    }, [renderingContext, saveRenderingContext, isUpdateRequired]);

    return null;
};