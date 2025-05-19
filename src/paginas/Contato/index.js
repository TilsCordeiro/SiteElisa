import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import "./contato.css";

class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      mensagem: '',
      erro: '',
      sucesso: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validarEmail(email) {
    // Regex simples para validar email
    return /\S+@\S+\.\S+/.test(email);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { nome, email, mensagem } = this.state;

    if (!nome || !email || !mensagem) {
      this.setState({ erro: 'Por favor, preencha todos os campos.', sucesso: '' });
      return;
    }

    if (!this.validarEmail(email)) {
      this.setState({ erro: 'Por favor, insira um e-mail válido.', sucesso: '' });
      return;
    }

    try {
      await firebase.firestore().collection('mensagens').add({
        nome,
        email,
        mensagem,
        dataEnvio: new Date()
      });

      this.setState({
        nome: '',
        email: '',
        mensagem: '',
        erro: '',
        sucesso: 'Mensagem enviada com sucesso!'
      });
    } catch (erro) {
      this.setState({ erro: 'Erro ao enviar a mensagem. Tente novamente.', sucesso: '' });
      console.error('Erro ao enviar mensagem:', erro);
    }
  }

  render() {
    return (
      <div className="contato-container">
        <h1>Contato</h1>

        {this.state.erro && <p style={{ color: 'red' }}>{this.state.erro}</p>}
        {this.state.sucesso && <p style={{ color: 'green' }}>{this.state.sucesso}</p>}

        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            placeholder="Seu nome"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />

          <input
            type="email"
            placeholder="Seu e-mail"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />

          <textarea
            placeholder="Digite sua dúvida ou mensagem"
            value={this.state.mensagem}
            onChange={(e) => this.setState({ mensagem: e.target.value })}
            rows={5}
            cols={30}
          />
          <br />

          <button type="submit">Enviar</button>
        </form>

        <br />
        <Link to="/"><button>Página Inicial</button></Link>
      </div>
    );
  }
}

export default Contato;
