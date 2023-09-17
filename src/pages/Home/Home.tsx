import React from 'react';
import Hero from '../../features/Home/Hero/Hero';
import Parceiros from '../../features/Home/Parceiros/Parceiros';
import Noticias from '../../features/Home/Noticias/Noticias';
import { Events } from '../../features/Home/Events/Events';
import Cursos from '../../features/Home/cursos/Cursos';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Noticias />
      <Events/>
      <Parceiros />
      <Cursos />
    </>
  );
};

export default Home;
