import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Noticias from '../pages/Noticias/Noticias';
import Home from '../pages/Home/Home';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='noticias' element={<Noticias />} />
    </Routes>
  );
};

export default Routing;
