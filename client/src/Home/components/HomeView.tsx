import { FC } from 'react'

import { Questions } from '../interfaces'

interface Props {
  questions?: Questions[]
}

export const HomeView: FC<Props> = ({ questions }) => (
  <div>
    <ul>
      {questions &&
        questions.map((question) => (
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
