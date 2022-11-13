import { FC, useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import styled from 'styled-components'

import { useQuestionsQuery } from '../../Home/apis/hooks'
import { useCompleteQuestionQuery } from '../apis'

import { EditorView } from './Editor'
import { stringJSParser } from './editorToGameJSParser'
import {
  characterAtom,
  checkCollision,
  DirectionFacing,
  ESCAPED_ENDING,
  getNextTurnDirection,
  mapUpdateRequiredAtom,
  MapView,
  MOVEMENT,
  questionGridMapToDraw,
  questionsMap,
  TRAPPED_ENDING,
} from './Map'
import { QuestionView } from './Questions'

// Used after string to js parsing for gameplay
async function sleep(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec))
}

export const DashboardContainer: FC = () => {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const { questions: question, isLoading } = useQuestionsQuery(Number(questionId))
  const { mutate } = useCompleteQuestionQuery()
  const [js, setJs] = useState<string>('')
  const [reset, setReset] = useState(false)
  const handleChange = useCallback((value: string) => {
    setJs(value)
  }, [])
  const [questionGridMap, setQuestionGridMap] = useAtom(questionGridMapToDraw)
  const [character, setCharacter] = useAtom(characterAtom)
  const [, setMapUpdateRequired] = useAtom(mapUpdateRequiredAtom)
  const characterRef = useRef(character)

  useEffect(() => {
    const gameId = `question${questionId}`
    setCharacter(() => {
      character.x = 0
      character.y = 1
      character.facing = 'right'

      return character
    })
    setQuestionGridMap(gameId)
    if (questionsMap[gameId] && questionsMap[gameId].initialJSHelperString) {
      setJs(questionsMap[gameId].initialJSHelperString ?? '')
    }
  }, [questionId, reset])

  useEffect(() => {
    characterRef.current = character
  }, [character])

  const turnState = (nextDirection: DirectionFacing) => {
    setMapUpdateRequired(true)
    setCharacter((prev) => {
      const updatedcharacter = { ...prev }
      updatedcharacter.facing = nextDirection
      updatedcharacter.characterImage = `#${nextDirection}`
      return updatedcharacter
    })
  }

  // Used after string to js parsing for gameplay
  const turnWhile = () => {
    // Magic/Hack method that can be used in while loops to solve most movement problems
    const nextDirection = getNextTurnDirection(
      characterRef.current.facing,
      'right',
      characterRef.current.lastMoved
    )
    turnState(nextDirection)
  }

  // Used after string to js parsing for gameplay
  const turnRight = () => {
    const nextDirection = getNextTurnDirection(characterRef.current.facing, 'right')
    turnState(nextDirection)
  }

  // Used after string to js parsing for gameplay
  const turnLeft = () => {
    const nextDirection = getNextTurnDirection(characterRef.current.facing, 'left')
    turnState(nextDirection)
  }

  // Used after string to js parsing for gameplay
  const isBlocked = () => {
    const key = characterRef.current.facing
    const [x, y] = MOVEMENT[key]
    if (questionGridMap) {
      const blocked = checkCollision(
        characterRef.current.x + x,
        characterRef.current.y + y,
        questionsMap[questionGridMap]
      )
      return blocked
    }
  }

  // Used after string to js parsing for gameplay
  const move = () => {
    const key = characterRef.current.facing
    const [x, y] = MOVEMENT[key]
    if (
      questionGridMap &&
      !checkCollision(characterRef.current.x + x, characterRef.current.y + y, questionsMap[questionGridMap])
    ) {
      setMapUpdateRequired(true)
      setCharacter((prev) => {
        const updatedcharacter = { ...prev }
        updatedcharacter.x += x
        updatedcharacter.y += y
        updatedcharacter.lastMoved = key
        return updatedcharacter
      })
    }
  }

  // Used after string to js parsing for gameplay
  const escaped = () => {
    const { x, y } = characterRef.current
    if (questionGridMap && questionsMap[questionGridMap]) {
      const { finalLocation } = questionsMap[questionGridMap]
      return x === finalLocation.x && y === finalLocation.y
    }
    return false
  }

  const handleSubmitCode = async () => {
    try {
      const parsedJS = stringJSParser(js)
      const promiseTimeout = new Promise((resolve) => {
        setTimeout(resolve, 60000, 'Timed Out: Possible Infinite Loop')
      })

      Promise.race([eval(`(async () => {${parsedJS}})()`), promiseTimeout])
        .then((value) => {
          const hasCharacterEscaped = escaped()
          if (hasCharacterEscaped) {
            toast.success(ESCAPED_ENDING)
            question && mutate(question.data[0].question_id)
          } else {
            const escapedMessage = value ? `${TRAPPED_ENDING} - ${value}` : TRAPPED_ENDING
            toast.error(escapedMessage)
          }
        })
        .catch((err: unknown) => {
          toast.error(err as string)
        })
    } catch (e) {
      toast.error(e as string)
    }
  }

  const handleReset = () => {
    setReset(!reset)
  }

  const handlePagination = (cursor: string) => {
    const id = Number(questionId)
    if (cursor === 'prev') {
      navigate(`/dashboard/${id - 1}`)
    }

    if (cursor === 'next') {
      navigate(`/dashboard/${id + 1}`)
    }
  }

  return (
    <Wrapper>
      <DashboardWrapper>
        <QuestionView question={question} isLoading={isLoading} handlePagination={handlePagination} />
        <EditorView
          code={js}
          onChange={handleChange}
          onSubmitCode={handleSubmitCode}
          handleReset={handleReset}
        />
        <MapView />
      </DashboardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  margin-top: 1rem;
  gap: 16px;

  /* > div {
    flex: 1;
  } */
`

DashboardContainer.displayName = 'DashboardContainer'
