import { FC, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';

import { mapDrawnAtom, mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { MAP_SQUARE_SIZE } from './constants';
import { questionsMap } from './questions';


export const DrawMap: FC<{questionKey: string}> = (props) => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const[,setMapDrawnStatus] = useAtom(mapDrawnAtom);
    const [isUpdateRequired, ] = useAtom(mapUpdateRequiredAtom)
    const { dimensions, mapLevels } = questionsMap[props.questionKey]
    const {columns, rows, width, height } = dimensions

    useEffect(() => {
        if (renderingContext ) {

            // function to add image to each square on the grid
            const drawMapSquares = (grid: number[][]) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        const imageKey = grid[i][j];
                        if (imageKey) {
                        const image = document.querySelector(`#mapSquareImage-${imageKey}`);
                        const x = j * MAP_SQUARE_SIZE;
                        const y = i * MAP_SQUARE_SIZE;
                        renderingContext.drawImage(
                            image,
                            0,
                            0,
                            MAP_SQUARE_SIZE,
                            MAP_SQUARE_SIZE,
                            x,
                            y,
                            MAP_SQUARE_SIZE,
                            MAP_SQUARE_SIZE,
                        );
                        }
                    }
                }
            };
        
            drawMapSquares(mapLevels[0]);
            drawMapSquares(mapLevels[1]);

            // two loops to draw horizontal and vertical lines to decpict 2d grid
            for (let i = 0; i < rows; i++) {
                const y = i * MAP_SQUARE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(0, y);
                renderingContext.lineTo(width, y);
                renderingContext.stroke();
            }
            for (let j = 0; j < columns; j++) {
                const x = j * MAP_SQUARE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(x, 0);
                renderingContext.lineTo(x, height);
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