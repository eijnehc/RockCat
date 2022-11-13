import { FC } from 'react'
import { useAtom } from 'jotai'

import { DrawHero } from './DrawHero'
import { DrawMap } from './DrawMap'
import { isAllTilesLoadedAtom, isHeroLoadedAtom, mapDrawnAtom, questionGridMapToDraw } from './gameAtoms'

export const GameGrid: FC = () => {
  const [isAllTilesLoaded] = useAtom(isAllTilesLoadedAtom)
  const [questionGridMap] = useAtom(questionGridMapToDraw)
  const [isHeroLoaded] = useAtom(isHeroLoadedAtom)
  const [isMapDrawn] = useAtom(mapDrawnAtom)

  return (
    <>
      {isAllTilesLoaded && questionGridMap && <DrawMap questionKey={questionGridMap} />}
      {questionGridMap && isMapDrawn && isHeroLoaded && <DrawHero questionKey={questionGridMap} />}
    </>
  )
}
