import styled from 'styled-components'

export const Input = styled.input`
  background-color: inherit;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-300);
  color: var(--color-white);
  border-radius: 1rem;

  &::placeholder {
    font-weight: 400;
    color: var(--color-gray-300);
  }

  :hover,
  :focus {
    border: 1px solid var(--color-white);
  }

  :focus {
    outline: none;
  }
`
