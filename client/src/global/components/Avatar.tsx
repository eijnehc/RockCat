import { FC } from 'react'
import styled from 'styled-components'

import { getInitials } from '../utils'

type Size = 'small' | 'medium' | 'large'

interface SizeProp {
  size?: Size
  imageUrl?: string
}

interface Props extends SizeProp {
  userName: string
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

export const Avatar: FC<Props> = ({ size = 'medium', userName, imageUrl }) => {
  return (
    <Wrapper data-size={size}>
      {imageUrl ? <Image src={imageUrl} alt={userName} /> : getInitials(userName)}
    </Wrapper>
  )
}

const Wrapper = styled.span<SizeProp>`
  border-radius: 50%;
  border: 2px solid var(--color-gray-100);
  padding: ${(props) => (props.imageUrl ? size(props.size ?? 'medium') : '0px')};
  text-align: center;
  color: var(--color-white);
  background-color: hsl(278deg 87% 72% / 0.7);

  :hover {
    border-color: var(--color-white);
  }
`

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`

Avatar.displayName = 'Avatar'
