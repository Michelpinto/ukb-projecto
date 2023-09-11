import React from 'react';
import Hero from '../../features/Home/Hero/Hero';
import Noticias from '../../features/Home/Noticias/Noticias';
import { Main } from './homeStyles';

const Home: React.FC = () => {
  return (
    <Main>
      <Hero />
      <Noticias />
    </Main>
  );
};

export default Home;
