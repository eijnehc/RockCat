import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

import { useLocalStorage } from '../../global'

import { EditorView } from './Editor'
import { MapView } from './Map'
import { QuestionView } from './Questions'

export const DashboardContainer: FC = () => {
  const [js, setJs] = useLocalStorage('js', '')
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  const handleChange = useCallback((value: string, viewUpdate: any) => {
    setJs(value)
  }, [])

  const handleSubmitCode = () => {
    return setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
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
    border: 1px solid black;
  }
`

DashboardContainer.displayName = 'DashboardContainer'
