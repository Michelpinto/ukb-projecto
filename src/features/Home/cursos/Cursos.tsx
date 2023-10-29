import React, { useState } from 'react';

import { Main, Curso, Section, Ul, UL2 } from './cursosStyles';

const curso1 = {
  text: 'Licenciatura em Ciências da Computação',
};

const curso2 = {
  text: 'Licenciatura em engenharia mecânica',
};

const curso3 = {
  text: 'Licenciatura em eng. de gestão logística e dos transportes',
};

const curso4 = {
  text: 'Mestrado em engenharia informática',
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
            Graduação
          </li>
          <li
            className={curso === 2 ? 'active' : ''}
            onClick={() => setCurso(2)}
          >
            Pós-graduação
          </li>
        </Ul>

        <aside>
          {curso === 1 && (
            <UL2>
              <Curso>{curso1.text}</Curso>
              <Curso>{curso2.text}</Curso>
              <Curso>{curso3.text}</Curso>
            </UL2>
          )}
          {curso === 2 && (
            <UL2>
              <Curso>{curso4.text}</Curso>
            </UL2>
          )}
        </aside>
      </Section>
    </Main>
  );
};

export default Cursos;
