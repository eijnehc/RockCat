import { FC, useState } from 'react'
import { Moon, RefreshCcw, Sun } from 'react-feather'
import { javascript } from '@codemirror/lang-javascript'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import CodeMirror from '@uiw/react-codemirror'
import styled from 'styled-components'

import { Tooltip } from '../../../global'

interface Props {
  onChange: (value: string, viewUpdate: any) => void
  onSubmitCode: () => void
  handleReset: () => void
  code: string
}

interface EditorStyleProps {
  dark: boolean
}

export const EditorView: FC<Props> = ({ code, onChange, onSubmitCode, handleReset }) => {
  const [dark, setDark] = useState(false)

  return (
    <Wrapper>
      <EditorTitle dark={dark}>
        <div>Playground</div>
        <ButtonWrapper>
          <Tooltip text='reset'>
            <button onClick={handleReset}>
              {dark ? (
                <RefreshCcw color='var(--color-white)' />
              ) : (
                <RefreshCcw color='var(--color-offblack)' />
              )}
            </button>
          </Tooltip>
          <ThemeButton onClick={() => setDark((prevDark) => !prevDark)}>
            {dark ? <Sun color='var(--color-white)' /> : <Moon color='var(--color-offblack)' />}
          </ThemeButton>
        </ButtonWrapper>
      </EditorTitle>
      <CodeMirror
        onChange={onChange}
        value={code}
        extensions={[javascript({ jsx: true })]}
        theme={dark ? xcodeDark : xcodeLight}
        height='500px'
        autoFocus
        basicSetup={{
          lineNumbers: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          autocompletion: false,
        }}
      />
      <CompileButton onClick={onSubmitCode}>
        <ForegroundLayer>Compile</ForegroundLayer>
      </CompileButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const EditorTitle = styled.div<EditorStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-weight-medium);
  background-color: ${(props) => (props.dark ? 'var(--color-gray-900)' : 'var(--color-gray-100)')};
  color: ${(props) => (props.dark ? 'var(--color-secondary-medium)' : 'var(--color-secondary-dark)')};
  padding: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

const ButtonWrapper = styled.span`
  display: flex;
  gap: 8px;
`

const ThemeButton = styled.button`
  display: flex;

  svg {
    display: inline-block;
  }
`

const CompileButton = styled.button`
  align-self: flex-end;
  margin-top: 1rem;

  background: var(--color-primary-dark);
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;

  :hover > span {
    transform: translateY(-6px);
  }

  :active > span {
    transform: translateY(-2px);
  }
`

const ForegroundLayer = styled.span`
  display: block;
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: var(--color-primary-medium);
  color: white;
  transform: translateY(-4px);
`

EditorView.displayName = 'EditorView'
