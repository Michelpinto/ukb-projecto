import React, { useState } from 'react';
import landscape1 from '../../../assets/landscapeOne.jpg';
import landscape2 from '../../../assets/landscapeTwo.jpg';
import landscape3 from '../../../assets/landscapeThree.jpg';

import { Main, Nav, Section, Section2 } from './cursosStyles';

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

  const showCurso1 = () => {
    return (
      curso === 1 && (
        <>
          <div>
            <h2>100+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h2>100+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <aside>
            <img src={landscape1} alt='image' />
            <p>{curso1.text}</p>
          </aside>
        </>
      )
    );
  };

  const showCurso2 = () => {
    return (
      curso === 2 && (
        <>
          <div>
            <h2>200+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h2>200+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <aside>
            <img src={landscape2} alt='image' />
            <p>{curso2.text}</p>
          </aside>
        </>
      )
    );
  };

  const showCurso3 = () => {
    return (
      curso === 3 && (
        <>
          <div>
            <h2>300+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h2>300+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <aside>
            <img src={landscape1} alt='image' />
            <p>{curso3.text}</p>
          </aside>
        </>
      )
    );
  };

  const showCurso4 = () => {
    return (
      curso === 4 && (
        <>
          <div>
            <h2>400+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h2>400+</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <aside>
            <img src={landscape3} alt='image' />
            <p>{curso4.text}</p>
          </aside>
        </>
      )
    );
  };

  return (
    <Main>
      <Section>
        <h2>Cursos</h2>
        <h1>Excelência no ensino superior</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button>Contacte a instituição</button>
      </Section>

      <Section2>
        {showCurso1 && showCurso1()}
        {showCurso2 && showCurso2()}
        {showCurso3 && showCurso3()}
        {showCurso4 && showCurso4()}
      </Section2>

      <Nav>
        <p className={curso === 1 ? 'active' : ''} onClick={() => setCurso(1)}>
          {curso1.text}
        </p>
        <p className={curso === 2 ? 'active' : ''} onClick={() => setCurso(2)}>
          {curso2.text}
        </p>
        <p className={curso === 3 ? 'active' : ''} onClick={() => setCurso(3)}>
          {curso3.text}
        </p>
        <p className={curso === 4 ? 'active' : ''} onClick={() => setCurso(4)}>
          {curso4.text}
        </p>
      </Nav>
    </Main>
  );
};

export default Cursos;
