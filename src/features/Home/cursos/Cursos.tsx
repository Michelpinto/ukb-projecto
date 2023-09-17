import React, { useState } from 'react';

import { Main, P, Section, Ul } from './cursosStyles';

const curso1 = {
  text: 'Curso 1 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
};

const curso2 = {
  text: 'Curso 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
};

const curso3 = {
  text: 'Curso 3 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia de',
};

const Cursos: React.FC = () => {
  const [curso, setCurso] = useState(1);
  // const [active, setActive] = useState(1);

  return (
    <Main>
      <h1>Cursos</h1>
      <Section>
        <Ul>
          <li
            className={curso === 1 ? 'active' : ''}
            onClick={() => setCurso(1)}
          >
            Curso numero 1
          </li>
          <li
            className={curso === 2 ? 'active' : ''}
            onClick={() => setCurso(2)}
          >
            Curso numero 2
          </li>
          <li
            className={curso === 3 ? 'active' : ''}
            onClick={() => setCurso(3)}
          >
            Curso numero 3
          </li>
        </Ul>

        <aside>
          {curso === 1 && <P>{curso1.text}</P>}
          {curso === 2 && <P>{curso2.text}</P>}
          {curso === 3 && <P>{curso3.text}</P>}
        </aside>
      </Section>
    </Main>
  );
};

export default Cursos;
