import styled, { keyframes } from 'styled-components';
import { COLORS } from '../constant';

export const RocketSpinner = () => <Loader />;

const AnimLoaderBack = keyframes`
    0%, 30%, 70% {
      transform: translateY(0px);
    }
    20%, 40%, 100% {
      transform: translateY(-5px);
    }
`;
const AnimLoader = keyframes`
    0% {
      box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
      width: 34px;
      height: 34px;
      background-position: -44px -44px;
      background-size: 100px 100px;
    }
    100% {
      box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
      width: 30px;
      height: 28px;
      background-position: -36px -36px;
      background-size: 80px 80px;
    }
`;

const Loader = styled.span`
  width: 32px;
  height: 90px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  border-bottom: 10px solid var(--color-danger);
  background-color: var(--color-gray-100);
  background-image: radial-gradient(
      ellipse at center,
      var(--color-gray-100) 34%,
      var(--color-danger) 35%,
      var(--color-danger) 54%,
      var(--color-gray-100) 55%
    ),
    linear-gradient(var(--color-danger) 10px, transparent 0);
  background-size: 28px 28px;
  background-position: center 20px, center 2px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: ${AnimLoaderBack} 1s linear infinite alternate;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0px 15px var(--color-danger) inset;
    top: 67px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 34px;
    height: 34px;
    top: 112%;
    background: radial-gradient(
      ellipse at center,
      #ffdf00 8%,
      rgba(249, 62, 0, 0.6) 24%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 50% 50% 0;
    background-repeat: no-repeat;
    background-position: -44px -44px;
    background-size: 100px 100px;
    box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
    box-sizing: border-box;
    animation: ${AnimLoader} 1s linear infinite alternate;
  }
`;
