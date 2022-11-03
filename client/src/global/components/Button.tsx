import { FC, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type ButtonEmphasis = 'fill' | 'outline'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  emphasis?: ButtonEmphasis
  children: ReactNode
}

export const Button: FC<Props> = ({ emphasis = 'fill', disabled, children, ...htmlAttributes }) => {
  return (
    <ButtonView disabled={disabled} data-emphasis={emphasis} {...htmlAttributes}>
      {children}
    </ButtonView>
  )
}

const ButtonView = styled.button`
  font-size: 1rem;
  font-weight: inherit;
  border-radius: 0.75rem;
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  color: var(--color-gray-100);

  &[data-emphasis='fill'] {
    background-color: var(--color-primary-medium);
  }

  &[data-emphasis='outline'] {
    border: 1px solid var(--color-primary-medium);
    background-color: hsl(333deg 100% 50% / 0.2);
  }

  :hover {
    color: var(--color-white);
  }

  :disabled {
    opacity: 0.6;
    cursor: default;
    color: inherit;
  }
`
