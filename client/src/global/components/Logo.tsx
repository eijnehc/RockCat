import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  size?: string
}

export const Logo: FC<Props> = ({ size = '1rem' }) => {
  return <Wrapper size={size}>&#128640;</Wrapper>
}

const Wrapper = styled.span<Props>`
  font-size: ${(props) => props.size};
`
