import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAtom } from 'jotai'
import styled from 'styled-components'

import { useLocalStorage } from '../../global'

import { ESCAPED_ENDING, MOVEMENT, TRAPPED_ENDING } from './Map/GameComponents/constants'
import { characterAtom, DirectionFacing } from './Map/GameComponents/gameAtoms.ts/characterAtom'
import { mapUpdateRequiredAtom, questionGridMapToDraw } from './Map/GameComponents/gameAtoms.ts/mapAtom'
import { checkCollision, getNextTurnDirection } from './Map/GameComponents/gameMovementUtils'
import { questionsMap } from './Map/GameComponents/questions'
import { EditorView } from './Editor'
import { stringJSParser } from './editorToGameJSParser'
import { MapView } from './Map'
import { QuestionView } from './Questions'

// Used after string to js parsing for gameplay
async function sleep(msec: number) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export const DashboardContainer: FC = () => {
  const [js, setJs] = useLocalStorage('js', '')
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  const handleChange = useCallback((value: string) => {
    setJs(value)
  }, [])

  // set game map to use
  const [questionGridMap, setQuestionGridMap] = useAtom(questionGridMapToDraw)

  useEffect(()=> {
    // set key to use from questions.ts . pass from a prop maybe?
    setQuestionGridMap('question2')
    if(questionsMap['question2'] && questionsMap['question2'].initialJSHelperString) {
      setJs(questionsMap['question2'].initialJSHelperString)
    }
  }, [])

  // init character status
  const [character, setCharacter] = useAtom(characterAtom);
  const [, setMapUpdateRequired] = useAtom(mapUpdateRequiredAtom);
  const characterRef = useRef(character);

  useEffect(() => {
    characterRef.current = character
  }, [character])


  const turnState = (nextDirection: DirectionFacing) => {
    setMapUpdateRequired(true);
    setCharacter((prev) => {
      const updatedcharacter = { ... prev}
      updatedcharacter.facing = nextDirection
      updatedcharacter.characterImage = `#${nextDirection}`;
      return updatedcharacter
    })
  }

  // Used after string to js parsing for gameplay
  const turnWhile = () => {
    // Magic/Hack method that can be used in while loops to solve most movement problems
    const nextDirection = getNextTurnDirection(characterRef.current.facing, 'right',characterRef.current.lastMoved);
    turnState(nextDirection);
  };

    // Used after string to js parsing for gameplay
    const turnRight = () => {
      const nextDirection = getNextTurnDirection(characterRef.current.facing, 'right');
      turnState(nextDirection);
    };

    // Used after string to js parsing for gameplay
    const turnLeft = () => {
      const nextDirection = getNextTurnDirection(characterRef.current.facing, 'left');
      turnState(nextDirection);
    };

  // Used after string to js parsing for gameplay
  const isBlocked =  () => {
    const key = characterRef.current.facing;
    const [x, y] = MOVEMENT[key];
    if (questionGridMap) {
      const blocked = checkCollision(characterRef.current.x + x, characterRef.current.y + y, questionsMap[questionGridMap])
      return blocked
    }
  }

  // Used after string to js parsing for gameplay
  const move = () => {
    const key = characterRef.current.facing;
    const [x, y] = MOVEMENT[key];
    if (questionGridMap && !checkCollision(characterRef.current.x + x, characterRef.current.y + y, questionsMap[questionGridMap])) {
      setMapUpdateRequired(true);
      setCharacter((prev) => {
          const updatedcharacter = { ... prev}
          updatedcharacter.x += x
          updatedcharacter.y += y
          updatedcharacter.lastMoved = key;
          return updatedcharacter
      })
    }
  };

  // Used after string to js parsing for gameplay
  const escaped = () => {
    const {x, y} = characterRef.current;
    if (questionGridMap && questionsMap[questionGridMap]){
      const {finalLocation} = questionsMap[questionGridMap]
      return x === finalLocation.x && y === finalLocation.y ;
    }
    return false
  }

  const handleSubmitCode = async () => {
    try {
      const parsedJS = stringJSParser(js);
      const promiseTimeout = new Promise((resolve) => {
        setTimeout(resolve, 60000, 'Timed Out: Possible Infinite Loop');
      });

      Promise.race([eval(`(async () => {${parsedJS}})()`), promiseTimeout]).then((value) => {
        const hasCharacterEscaped = escaped();
        if (hasCharacterEscaped) {
          toast.success(ESCAPED_ENDING)
        } else {
          const escapedMessage = value ? `${TRAPPED_ENDING} - ${value}` : TRAPPED_ENDING;
          toast.error(escapedMessage);
        }
      }).catch((err: unknown) =>{
        toast.error(err as string)
      })
    } catch(e) {
      toast.error(e as string)
    }
  }


  return (
      <Wrapper>
        <Toaster toastOptions={{duration:60000 }} />
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
