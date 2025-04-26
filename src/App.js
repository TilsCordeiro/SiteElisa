import React, { Component } from 'react';
import firebase from './Firebase';
import './App.css';
import { useNavigate } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    this.atualizaremail = this.atualizaremail.bind(this);
    this.atualizarsenha = this.atualizarsenha.bind(this);
    this.verificarsenha = this.verificarsenha.bind(this);
  }

  atualizaremail(event) {
    this.setState({ email: event.target.value });
  }

  atualizarsenha(event) {
    this.setState({ senha: event.target.value });
  }

  verificarsenha() {
    const { email, senha } = this.state;

    if (!email || !senha) {
      this.setState({ mensagem: "Por favor, preencha ambos os campos de e-mail e senha." });
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        this.setState({ mensagem: "Acesso liberado com sucesso" });
        this.props.navigate('/home'); 
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          this.setState({ mensagem: "Usuário não encontrado." });
        } else if (error.code === 'auth/wrong-password') {
          this.setState({ mensagem: "Senha incorreta." });
        } else {
          this.setState({ mensagem: "Erro ao realizar login. Tente novamente." });
        }
      });
  }

  render() {
    return (
      <div>
        <img src="/Imagem1.jpg" alt="Login" width="200" />
        <h1>Login</h1>
        <input
          type="email"
          value={this.state.email}
          onChange={this.atualizaremail}
          placeholder="Digite seu e-mail"
        />
        <br />
        <input
          type="password"
          value={this.state.senha}
          onChange={this.atualizarsenha}
          placeholder="Digite a senha"
        />
        <br />
        <button onClick={this.verificarsenha}>Acessar</button>
        <p>{this.state.mensagem}</p>
        <button onClick={() => this.props.navigate('/home')}>Voltar para a página inicial</button>
      </div>
    );
  }
}

function AppComNavegacao(props) {
  const navigate = useNavigate();
  return <App {...props} navigate={navigate} />;
}

export default AppComNavegacao;

