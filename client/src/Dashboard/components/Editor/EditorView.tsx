import { FC, useState } from 'react'
import { Moon, Sun } from 'react-feather'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import styled from 'styled-components'

interface Props {
  onChange: (value: string, viewUpdate: any) => void
  onSubmitCode: () => void
  code: string
}

interface EditorStyleProps {
  dark: boolean
}

export const EditorView: FC<Props> = ({ code, onChange, onSubmitCode }) => {
  const [dark, setDark] = useState(true)

  return (
    <Wrapper>
      <EditorTitle dark={dark}>
        <div>&#128640; Editor</div>
        <ThemeButton onClick={() => setDark((prevDark) => !prevDark)}>
          {dark ? <Moon color='var(--color-white)' /> : <Sun color='var(--color-offblack)' />}
        </ThemeButton>
      </EditorTitle>
      <CodeMirror
        onChange={onChange}
        value={code}
        extensions={[javascript({ jsx: true })]}
        theme={dark ? 'dark' : 'light'}
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
  padding: 1rem;
`
const EditorTitle = styled.div<EditorStyleProps>`
  display: flex;
  justify-content: space-between;
  font-weight: var(--font-weight-medium);
  background-color: ${(props) => (props.dark ? 'var(--color-gray-900)' : 'var(--color-gray-100)')};
  color: ${(props) => (props.dark ? 'var(--color-secondary-medium)' : 'var(--color-secondary-dark)')};
  padding: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

const ThemeButton = styled.button`
  /* Remove default button styles */
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  svg {
    display: block;
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
