import React, { useState } from 'react';

import { Main, Curso, Section, Ul, UL2, P } from './cursosStyles';

const curso1 = {
  text: 'Licenciatura em Ciências da Computação',
  sobre:
    'O curso tem a duração de cinco (5) anos, divididos por dez (10) semestres com uma carga horária 4592 horas lectivas, sendo o ciclo de estudos concluído com um trabalho de fim de curso. Desde sua implantação é realizado um trabalho de acompanhamento que visa avaliar sua estrutura curricular, bem como, das exigências impostas pela evolução natural da área de computação no país. O curso está estruturado em dez (10) semestres lectivos e um projecto de Ciências da Computação que devem ser cumpridos por todos os estudantes.',
};

const curso2 = {
  text: 'Licenciatura em engenharia mecânica',
  sobre:
    'Angola depois de ter iniciado um período de paz e desenvolvimento na sequência de várias décadas de guerra resolveu estender o ensino superior a todas as regiões do país. A criação de um curso de LEM na Universidade Katyavala Bwila (UKB) é precisamente o resultado dessa decisão. Por seu lado a definição das opções que o curso de LEM teve de levar em consideração as particularidades da Região Académica II, mas ao mesmo tempo as necessidades do país como um todo. O processo de implementação do curso de LEM no ISP/UKB foi elaborado na base do Decreto executivo 26/11, de 23 de Fevereiro, que aprova o regulamento sobre a criação de cursos de graduação a ministrar nas instituições de ensino superior em Angola.',
};

const curso3 = {
  text: 'Licenciatura em eng. de gestão logística e dos transportes',
  sobre:
    'Tem como objetivo fornecer uma formação tecnológica na área de Logística e Trasportes, capacitando o egresso para as atividades de aquisição, recepção, aprovisionamento, distribuição e planeamento de cadeias de transporte modal e intermodal, com visão sistêmica e estratégica, capacidade de comando, liderança, além de densos conhecimentos de estratégias de segurança e respectivas tecnologias e equipamento.',
};

const curso4 = {
  text: 'Mestrado em engenharia informática',
  sobre:
    'O MEI oferecido pelo Departamento de Ensino e Investigação de Informática (DEII) do Instituto Politécnico da Universidade Katyavala Bwila (IP/UKB) pretende formar graduados que possam realizar projectos informáticos nas diversas áreas de acção, instalar, gerir e manter sistemas de complexidade diversa. Para tal, os engenheiros informáticos formados deverão possuir conhecimentos abrangentes, sólida formação na área de especialização, tanto sistémica quanto analítica, fundamentada em conhecimentos das ciências básicas, com atitude de aprender e empreender.',
};

const Cursos: React.FC = () => {
  const [curso, setCurso] = useState(1);
  const [showSobre, setShowSobre] = useState('');

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
              <Curso onClick={() => setShowSobre('sobre1')}>
                {curso1.text}
              </Curso>
              {showSobre === 'sobre1' && <P>{curso1.sobre}</P>}
              <Curso onClick={() => setShowSobre('sobre2')}>
                {curso2.text}
              </Curso>
              {showSobre === 'sobre2' && <P>{curso2.sobre}</P>}
              <Curso onClick={() => setShowSobre('sobre3')}>
                {curso3.text}
              </Curso>
              {showSobre === 'sobre3' && <P>{curso3.sobre}</P>}
            </UL2>
          )}
          {curso === 2 && (
            <UL2>
              <Curso onClick={() => setShowSobre('sobre4')}>
                {curso4.text}
              </Curso>
              {showSobre === 'sobre4' && <P>{curso4.sobre}</P>}
            </UL2>
          )}
        </aside>
      </Section>
    </Main>
  );
};

export default Cursos;
