import { FC } from 'react'

import { QuestionsOverview } from '../interfaces'

interface Props {
  questions?: QuestionsOverview
}

export const HomeView: FC<Props> = ({ questions }) => (
  <div>
    <ul>
      {questions &&
        questions.data.length !== 0 &&
        questions.data.map((question) => (
          <li key={question.id}>
            <div>{question.id}</div>
            <div>{question.title}</div>
            <div>{question.description}</div>
            <div>{question.answers}</div>
          </li>
        ))}
    </ul>
  </div>
)

HomeView.displayName = 'HomeView'
