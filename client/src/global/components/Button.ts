import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1rem;
  font-weight: inherit;
  border-radius: 0.75rem;
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  color: var(--color-gray-100);
  background-color: var(--color-primary-medium);

  :hover {
    color: var(--color-white);
  }
`
