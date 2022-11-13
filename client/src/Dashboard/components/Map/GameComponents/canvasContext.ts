import React from 'react'

export interface ICanvasContext {
  renderingContext: CanvasRenderingContext2D | null
  saveRenderingContext: (ctx?: CanvasRenderingContext2D) => void
}

const CanvasContext = React.createContext<ICanvasContext | null>(null)

export default CanvasContext
