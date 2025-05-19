import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sobre.css';

class Sobre extends Component {
  render() {
    return (
      <div className="sobre-container">
        <h1>Sobre a Advogada</h1>

        <img src="/Fotos/Elisa1.jpeg" alt="Foto da Dra. Elisa Tils" className="foto-elisa" />

        <p>
          Dra. Elisa Tils Galli é advogada especializada em Direito Civil, com sólida experiência na condução de casos relacionados a família, contratos, responsabilidade civil e direito do consumidor.
        </p>

        <p>
          Reconhecida por sua abordagem empática e estratégica, Dra. Elisa atua com seriedade e dedicação, buscando sempre as melhores soluções jurídicas para seus clientes.
        </p>

        <p>
          Sua missão é proporcionar segurança jurídica e confiança por meio de um atendimento personalizado, ético e transparente.
        </p>

        <Link to="/home">
          <button>Voltar para Página Inicial</button>
        </Link>
      </div>
    );
  }
}

export default Sobre;
