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
  color?: Color
}

/* units */
const sizeUnit = 16

/* sizes */
const createSize = (size: number) => `${size * sizeUnit}px`

const sizes = {
  small: createSize(3),
  medium: createSize(4),
  large: createSize(5),
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
    <Wrapper size={size} color={color} imageUrl={imageUrl}>
      {imageUrl ? <Image src={imageUrl} alt={userName} /> : <Text>{getInitials(userName)}</Text>}
    </Wrapper>
  )
}

const Wrapper = styled.div<StyledProps>`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--color-primary-dark);
  color: var(--color-white);
  text-align: center;
  background-color: ${(props) =>
    props.color === 'outline' ? 'hsl(333deg 100% 50% / 0.2)' : 'var(--color-primary-medium)'};
  width: ${(props) => size(props.size ?? 'medium')};
  height: ${(props) => size(props.size ?? 'medium')};
  line-height: ${(props) => size(props.size ?? 'medium')};

  :hover {
    border-color: var(--color-primary-medium);
  }
`

const Text = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

Avatar.displayName = 'Avatar'
