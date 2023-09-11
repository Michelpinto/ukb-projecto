import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    opacity: 1;
  }
  /* 25% {
    opacity: 0;
  } */
  /* 50% {
    opacity: 0;
  } */
  /* 75% {
    opacity: 0;
  } */
  100% {
    opacity: 1;
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    animation: ${slide} 5s linear infinite;
  }
`;
