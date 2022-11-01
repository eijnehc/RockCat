import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useAtom } from 'jotai'
import test from 'node:test'
import styled from 'styled-components'

import { useLocalStorage } from '../../global'

import { checkMapCollision, MOVEMENT } from './Map/GameComponents/constants'
import { characterAtom } from './Map/GameComponents/gameAtoms.ts/characterAtom'
import { mapUpdateRequiredAtom } from './Map/GameComponents/gameAtoms.ts/mapAtom'
import { EditorView } from './Editor'
import { stringJSParser } from './editorToGameJSParser'
import { MapView } from './Map'
import { QuestionView } from './Questions'

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}


export const DashboardContainer: FC = () => {
  const [js, setJs] = useLocalStorage('js', '')
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  const [character, setCharacter] = useAtom(characterAtom);
  const [, setMapUpdateRequired] = useAtom(mapUpdateRequiredAtom);
  const characterRef = useRef(character);

  const handleChange = useCallback((value: string) => {
    setJs(value)
  }, [])

  useEffect(() => {
    characterRef.current = character
  }, [character])

  const moveCharacter = (e: string) => {
    const key = e
    if (MOVEMENT[key]) {
        const [x, y] = MOVEMENT[key];
        if (!checkMapCollision(characterRef.current.x + x, characterRef.current.y + y)) {
          setMapUpdateRequired(true);
          setCharacter((prev) => {
              const updatedcharacter = { ... prev}
              updatedcharacter.x += x
              updatedcharacter.y += y
              return updatedcharacter
          })
        }
    }
  };

  const handleSubmitCode = async () => {
    const parsedJS = stringJSParser(js);
    console.log(parsedJS)
    try {
      eval(`(async () => {${parsedJS}})()`).then().catch((err: unknown) =>{
        alert(err)
      })
    } catch(e) {
      alert(e)
    }
  }


  return (
      <Wrapper>
        <QuestionView />
        <EditorView code={js} onChange={handleChange} onSubmitCode={handleSubmitCode} />
        <MapView />
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;

  > div {
    flex: 1;
    /* Temp border to see the demarcation */
    border: 1px solid var(--color-white);
  }
`

DashboardContainer.displayName = 'DashboardContainer'
