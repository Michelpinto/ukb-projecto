import { styled } from 'styled-components';

export const Main = styled.main`
  border-bottom: 1px solid #1d1d1d;
`;

export const Container = styled.nav`
  padding: 2rem 0;
  margin: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;

  & ul {
    display: flex;
    align-items: center;
    gap: 6rem;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    justify-content: flex-end;
  }

  & li {
    cursor: pointer;
  }

  & button {
    background: none;
    padding: 0.7rem;
    border: 1px solid #1d1d1d;
    border-radius: 5px;
    font-size: 1.6rem;
    font-weight: 400;
    cursor: pointer;
    margin-left: 6rem;
  }
`;
