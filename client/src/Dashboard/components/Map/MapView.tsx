import { FC } from 'react'
import styled from 'styled-components'

import { GameComponent } from './GameComponents/GameCanvas'

export const MapView: FC = () => {
    return (
        <GameWrapper>
            <GameComponent/>
        </GameWrapper>
    )
}

const GameWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 20px;
`

MapView.displayName = 'MapView'
