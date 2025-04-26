import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../index.css";

class Sobre extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Sobre o nosso sistema</h1>
            <h2>Linguagem</h2>
            <h4>JavaScript</h4>
            <h2>Bibliotecas utilizadas</h2>
            <h3>react</h3>
            <h4>Biblioteca principal para criar interfaces de usuário com componentes.</h4>
            <h4>Versão: 18.2.0</h4>
            <h3>react-router-dom</h3>
            <h4>Biblioteca para gerenciamento de rotas e navegação entre páginas no React.</h4>
            <h4>Versão: 7.5.0</h4>
            <Link to="/home"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;



//import React from 'react';
//import { useNavigate } from 'react-router-dom';

//export default function Sobre() {
  //const navigate = useNavigate();
  //return (
  //<div>
    //<h1>Sobre o nosso sistema</h1>
    //<h2>Linguagem</h2>
    //<h4>JavaScript</h4>
    //<h2>Bibliotecas utilizadas</h2>
    //<h3>react</h3>
    //<h4>Biblioteca principal para criar interfaces de usuário com componentes.</h4>
    //<h4>Versão: 18.2.0</h4>
    //<h3>react-router-dom</h3>
    //<h4>Biblioteca para gerenciamento de rotas e navegação entre páginas no React.</h4>
    //<h4>Versão: 7.5.0</h4>
    //<button onClick={() => navigate('/home')}>Ir para Home</button>
  //</div>
  //);
//}


