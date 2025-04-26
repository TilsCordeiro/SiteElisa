import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";
import firebase from '../../Firebase';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: '',
        sobrenome: '',
        dataDeNascimento: '',
        email: ''
      };
    }

    componentDidMount() {
      this.buscarUsuario();
    }

    async buscarUsuario() {
      const user = firebase.auth().currentUser;
  
      if (user) {
        try {
          const usuarioDoc = await firebase.firestore().collection("usuario").where("email", "==", user.email).get();
  
          if (!usuarioDoc.empty) {
            const usuario = usuarioDoc.docs[0].data();
            this.setState({
              nome: usuario.nome,
              sobrenome: usuario.sobrenome,
              dataDeNascimento: usuario.dataDeNascimento,
              email: user.email
            });
          }
        } catch (erro) {
          console.error("Erro ao buscar dados do usuário:", erro);
        }
      }
    }
    render(){
      return(
        <div>
            <h1>Página inicial</h1>
            <h2>Dados do Usuário:</h2>
            <p><strong>Nome:</strong> {this.state.nome}</p>
            <p><strong>Sobrenome:</strong> {this.state.sobrenome}</p>
            <p><strong>Data de Nascimento:</strong> {this.state.dataDeNascimento}</p>
            <p><strong>Email:</strong> {this.state.email}</p>

            <Link to="/Contato"><button>Contato</button></Link> <br/>
            <Link to="/Sobre"><button>Sobre</button></Link> 
            <Link to="/App"><button>Login</button></Link> 
            <Link to="/Cadastro"><button>Cadastro</button></Link> 
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