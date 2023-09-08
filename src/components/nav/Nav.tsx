import React from 'react';

import { Main, Container } from './navStyles';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <Main>
      <Container>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Graduação</li>
          <li>Pós-Graduação</li>
          <li>
            <Link to='/noticias'>Noticías</Link>
          </li>
          <li>Eventos</li>
        </ul>
        <button>Candidatura</button>
      </Container>
    </Main>
  );
};

export default Nav;
