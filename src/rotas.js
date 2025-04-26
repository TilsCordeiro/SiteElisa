import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import NotFound from './paginas/NotFound';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/app" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}



