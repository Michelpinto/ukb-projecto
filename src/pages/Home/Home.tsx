import React from 'react';
import Hero from '../../features/Home/Hero/Hero';
import Parceiros from '../../features/Home/Parceiros/Parceiros';
import Noticias from '../../features/Home/Noticias/Noticias';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Noticias />
      <Parceiros />
    </>
  );
};

export default Home;
