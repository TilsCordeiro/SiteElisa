//import React from 'react';
//import { useNavigate } from 'react-router-dom';

//export default function Contato() {
 // const navigate = useNavigate();

 // return (
 // <div>
   // <h1>Contato</h1>
   // <h3>Nome: Ana Tils</h3>
    //<h3>E-mail: xptop@gmail.com</h3>
   // <button onClick={() => navigate('/home')}>Ir para Home</button>
  //</div>
  //);
//}


import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";

class Contato extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Contato</h1>
            <h3>Nome: Ana Tils</h3>
            <h3>E-mail: xptop@gmail.com</h3>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Contato;
