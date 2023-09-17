import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 98rem;
  padding: 8rem 0;

  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & li {
    padding: 1rem;
    border: 1px solid #1d1d1d;
    cursor: pointer;
    transition: 0.1s ease-in;
    font-size: 1.4rem;
    width: 18rem;
  }

  & li.active {
    border-left: 3px solid #506ef5;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
`;
