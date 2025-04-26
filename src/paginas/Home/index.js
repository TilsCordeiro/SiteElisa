import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";

class Home extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Página inicial</h1>
            <Link to="/Contato"><button>Contato</button></Link> <br/>
            <Link to="/Sobre"><button>Sobre</button></Link> 
            <Link to="/App"><button>Login</button></Link> 
        </div>
      )
    }
}

export default Home;

//export default function Home() {
  //const navigate = useNavigate();

  //return (
    //<div>
      //<h2>Bem-vindo a página inicial!</h2>
      //<button onClick={() => navigate('/contato')}>Ir para Contato</button>
      //<button onClick={() => navigate('/sobre')}>Ir para Sobre</button>
      //<button onClick={() => navigate('/App')}>Ir para Login</button>
    //</div>
  //);
//}