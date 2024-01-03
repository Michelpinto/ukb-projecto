import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 120rem;
  padding: 8rem 4rem;

  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 65%;
  margin-bottom: 8rem;

  & h2,
  p {
    font-size: 1.8rem;
  }

  p {
    line-height: 28px;
  }

  & h1 {
    font-size: 3.5rem;
  }

  & button {
    width: fit-content;
    padding: 0.5rem 1.5rem;
    margin-top: 2rem;
    border-radius: 2rem;
  }
`;

export const Section2 = styled.section`
  display: flex;
  gap: 6rem;

  & div {
    display: flex;
    flex-direction: column;

    & h2 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 7rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  & aside {
    position: relative;
    display: inline-block;

    & img {
      border-radius: 2rem;
      width: 80rem;
      height: 40rem;
    }

    & p {
      position: absolute;
      top: 80%;
      left: 5%;
      /* transform: translate(-50%, -50%); */
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
    }
  }
`;

const easeIn = keyframes`
 from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
`;

export const Nav = styled.nav`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & p {
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }

  & p.active {
    border-bottom: 1px solid #bebebe;
    padding-bottom: 2.5rem;
    /* animation: ${easeIn} 400ms forwards; */
  }
`;
