import { FC } from 'react'

import { QuestionsOverview } from '../interfaces'
import styled from 'styled-components'
// import { useQuestionsQuery } from '../hooks'

interface Props {
  questions?: QuestionsOverview
}

export const HomeView: FC<Props> = ({ questions }) => {

  const getColorDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "#18ecbe"
      case "Medium":
        return "#ff7f00"
      default:
        null
    }
  }

  return (
    // <div>
    //   <ul>
    //     {questions &&
    //       questions.data.length !== 0 &&
    //       questions.data.map((question) => (
    //         <li key={question.id}>
    //           <div>{question.id}</div>
    //           <div>{question.title}</div>
    //           <div>{question.description}</div>
    //           <div>{question.answers}</div>
    //         </li>
    //       ))}
    //   </ul>
    // </div>


    <QuestionsWrapper>
      <Header>Questions </Header>
      <QuestionsContent>
        {questions?.data.map((item) => (
          <QuestionsCard
            key={item.id}
            style={{
              background: `linear-gradient(to right, ${getColorDifficulty(item.difficulty)} 1%, var(--color-white) 1%, var(--color-white) 100%)`
            }}
          >
            <p>{item.title}</p>
            <p style={{ color: getColorDifficulty(item.difficulty) }}>{item.difficulty}</p>
          </QuestionsCard>
        ))}
      </QuestionsContent>
    </QuestionsWrapper>


  )


}


HomeView.displayName = 'HomeView'

const Header = styled.header`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 240px;
  text-align: left;
`

const QuestionsWrapper = styled.main`
  background-color: var(--color-offblack);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

const QuestionsContent = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  flex-direction: column;
  width: 100%;
  align-items: left;
`

const QuestionsCard = styled.article`
  display: flex;
  align-items: left;
  flex: 1 1 250px;
  align-items : center;  
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  margin-left: 240px;
  margin-right:240px;
  // background: linear-gradient(
  //   to right,
  //   #18ecbe 2%,
  //   var(--color-white) 2%,
  //   var(--color-white) 100%
  // );
  color: var(--color-offblack);
  font-weight: bold;  
  max-height: 20px;

`
