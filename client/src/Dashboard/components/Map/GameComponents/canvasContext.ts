import React from 'react';

interface IGridPosition {
  X: number,
  Y: number
}

export interface ICanvasContext {
    renderingContext: CanvasRenderingContext2D | null,
    saveRenderingContext: (ctx?: CanvasRenderingContext2D) => void
    //postion: IGridPosition
}

const CanvasContext = React.createContext<ICanvasContext | null>(null);

export default CanvasContext;