import React from 'react';
import { Main } from './parceirosStyles';
import uniaologo from '../../../assets/uniao-logo.png';
import logo2 from '../../../assets/eu_flag.jpg';
import logo3 from '../../../assets/Logo_GoA1.png';
import logo4 from '../../../assets/cropped-Logo-Expertise-France-Fond-blanc.jpg';
import logo5 from '../../../assets/EEUMLOGO.png';

const Parceiros: React.FC = () => {
  return (
    <Main>
      <h1>Parceiros e patrocinadores</h1>

      <section>
        <img src={uniaologo} alt='logo-1' />
        <img src={logo2} alt='logo-1' />
        <img src={logo3} alt='logo-1' />
        <img src={logo4} alt='logo-1' />
        <img src={logo5} alt='logo-1' />
      </section>
    </Main>
  );
};

export default Parceiros;
