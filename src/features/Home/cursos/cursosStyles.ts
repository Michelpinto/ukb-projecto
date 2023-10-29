import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 98rem;
  padding: 8rem 0;

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
    line-height: 1.2;
  }

  & li.active {
    border-left: 3px solid #506ef5;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
`;

export const H2 = styled.h2`
  margin: 2rem 0;
`;

export const UL2 = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Curso = styled.li`
  padding: 1rem;
  border: 1px solid #1d1d1d;
  cursor: pointer;
  transition: 0.1s ease-in;
  font-size: 1.4rem;
  width: 45rem;
  line-height: 1.2;
`;
