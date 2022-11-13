import { FC } from 'react'
import styled from 'styled-components'

import { GameComponent } from './GameComponents/GameCanvas'

export const MapView: FC = () => {
  return (
    <GameWrapper>
      <GameComponent />
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  text-align: center;
`

MapView.displayName = 'MapView'
