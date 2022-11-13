import { FC } from 'react'
import { useAtom } from 'jotai'

import { DrawHero } from './DrawHero'
import { DrawMap } from './DrawMap'
import { mapDrawnAtom, questionGridMapToDraw } from './gameAtoms'

export const GameGrid: FC = () => {
  const [questionGridMap] = useAtom(questionGridMapToDraw)
  const [isMapDrawn] = useAtom(mapDrawnAtom)

  return (
    <>
      {questionGridMap && <DrawMap questionKey={questionGridMap} />}
      {questionGridMap && isMapDrawn && <DrawHero questionKey={questionGridMap} />}
    </>
  )
}
