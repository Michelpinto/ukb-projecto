import React from 'react';

import { Main, Container } from './navStyles';

const Nav: React.FC = () => {
  return (
    <Main>
      <Container>
        <ul>
          <li>Home</li>
          <li>Graduação</li>
          <li>Pós-Graduação</li>
          <li>Noticías</li>
          <li>Eventos</li>
          <button>Candidatura</button>
        </ul>
      </Container>
    </Main>
  );
};

export default Nav;
