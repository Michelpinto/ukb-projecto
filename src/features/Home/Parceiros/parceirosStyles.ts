import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 4rem;
  gap: 1.6rem;

  & h1 {
    font-size: 2rem;
    max-width: 98rem;
    margin: 0 auto;
    text-align: center;
  }

  & section {
    /* background-color: #f5f5f5; */
    padding: 6rem 4rem;
    display: flex;
    gap: 6rem;
    max-width: 120rem;
    margin: 0 auto;

    img {
      width: auto;
      height: 10rem;
    }
  }
`;
