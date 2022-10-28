import { FC } from 'react'
import styled from 'styled-components'

import { getInitials } from '../utils'

type Size = 'small' | 'medium' | 'large'
type Color = 'fill' | 'outline'

interface StyledProps {
  size?: Size
  imageUrl?: string
}

interface Props extends StyledProps {
  userName: string
  color?: string
}

/* units */
const sizeUnit = 12

/* sizes */
const createSize = (size: number) => `${size * sizeUnit}px`

const sizes = {
  small: createSize(0.5),
  medium: createSize(1),
  large: createSize(2),
}

const size = (size: Size) => {
  if (typeof sizes[size] !== 'undefined') {
    return sizes[size]
  } else {
    return sizes['medium']
  }
}

export const Avatar: FC<Props> = ({ size = 'medium', color = 'outline', userName, imageUrl }) => {
  return (
    <Wrapper size={size} color={color}>
      {imageUrl ? <Image src={imageUrl} alt={userName} /> : getInitials(userName)}
    </Wrapper>
  )
}

const Wrapper = styled.span<StyledProps>`
  border-radius: 50%;
  border: 2px solid var(--color-primary-dark);
  padding: ${(props) => (!props?.imageUrl ? size(props.size ?? 'medium') : '0px')};
  text-align: center;
  color: var(--color-white);
  background-color: ${(props) =>
    props.color === 'outline' ? 'hsl(333deg 100% 50% / 0.2)' : 'var(--color-primary-medium)'};

  :hover {
    border-color: var(--color-primary-medium);
  }
`

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`

Avatar.displayName = 'Avatar'
