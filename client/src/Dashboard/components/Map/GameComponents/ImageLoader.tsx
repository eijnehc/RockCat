import { FC } from 'react'
import { useAtom } from 'jotai'
import styled from 'styled-components'

import { characterAtom, DirectionFacing } from './gameAtoms/characterAtom'
import { mapTilesAtom } from './gameAtoms/mapAtom'
import { GAME_HERO_DETAILS, MAP_ASSETS } from './constants'

export const ImageLoader: FC = () => {
  const [, setMapTiles] = useAtom(mapTilesAtom)
  const [, setCharacter] = useAtom(characterAtom)

  const tilesLoaded = (tileName: string) => {
    setMapTiles((prev) => {
      const newList = [...prev]
      newList.push(tileName)
      return newList
    })
  }

  const updatedcharacter = (heroId: string, srcString: string) => {
    setCharacter((prev) => {
      const updatedcharacter = { ...prev }
      updatedcharacter.characterImage = '#right'
      updatedcharacter.loadedSprites = [...updatedcharacter.loadedSprites, srcString]
      return updatedcharacter
    })
  }

  return (
    <Hidden>
      {Object.keys(MAP_ASSETS).map((key) => {
        return (
          <img
            key={`mapSquareImage-${key}`}
            id={`mapSquareImage-${key}`}
            src={`${MAP_ASSETS[key]}`}
            onLoad={() => {
              tilesLoaded(`${MAP_ASSETS[key]}`)
            }}
          />
        )
      })}
      {Object.keys(GAME_HERO_DETAILS.sprites).map((value) => {
        const key = value as DirectionFacing
        const srcString = GAME_HERO_DETAILS.sprites[key]
        return (
          <img
            key={key}
            id={key}
            src={srcString}
            onLoad={() => {
              updatedcharacter(`#${key}`, srcString)
            }}
          />
        )
      })}
    </Hidden>
  )
}

const Hidden = styled.div`
  display: none;
`
