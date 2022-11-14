import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export const Tooltip: FC<Props> = ({ text, children }) => {
  return <TooltipWrapper data-text={text}>{children}</TooltipWrapper>
}

const TooltipWrapper = styled.span`
  position: relative; /* making the .tooltip span a container for the tooltip text */

  :before {
    content: attr(data-text); /* here's the magic */
    position: absolute;

    /* vertically center */
    top: 0%;
    transform: translateY(-120%);

    /* move to left */
    margin-left: -70%;

    /* basic styles */
    width: 80px;
    padding: 4px;
    border-radius: 10px;
    background: var(--color-gray-300);
    color: var(--color-offblack);
    text-align: center;

    /* hide by default */
    display: none;

    opacity: 0;
    transition: 0.3s;
  }

  :after {
    content: '';
    position: absolute;

    /* position tooltip correctly */
    margin-left: 0%;

    /* vertically center */
    top: 0%;
    transform: translateY(-50%);

    /* the arrow */
    border: 10px solid var(--color-gray-300);
    border-color: var(--color-gray-300) transparent transparent transparent;

    display: none;

    opacity: 0;
    transition: 0.3s;
  }

  :hover:after,
  :hover:before {
    display: block;
    opacity: 1;
  }
`
