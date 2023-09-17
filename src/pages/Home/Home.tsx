import React from 'react';
import Hero from '../../features/Home/Hero/Hero';
import Parceiros from '../../features/Home/Parceiros/Parceiros';
import Noticias from '../../features/Home/Noticias/Noticias';
import { Events } from '../../features/Home/Events/events';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Noticias />
      <Events/>
      <Parceiros />
    </>
  );
};

export default Home;
