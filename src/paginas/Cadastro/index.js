import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import "../../index.css";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      dataDeNascimento: "",
      email: "",
      senha: "",
      usuarios: []
    };

    this.gravar = this.gravar.bind(this);
  }

  componentDidMount() {
    this.buscarUsuarios();
  }

  async buscarUsuarios() {
    firebase.firestore().collection("usuario").get().then((retorno) => {
      console.log("Retorno bruto do Firestore (snapshot):", retorno);

      const lista = [];
      retorno.forEach((doc) => {
        console.log("ID do documento:", doc.id);
        console.log("Nome:", doc.data().nome);
        console.log("Sobrenome:", doc.data().sobrenome);
        console.log("Data de nascimento:", doc.data().dataDeNascimento);
        console.log("E-mail:", doc.data().email);
        console.log("Senha:", doc.data().senha);

        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          sobrenome: doc.data().sobrenome,
          dataDeNascimento: doc.data().dataDeNascimento,
          email: doc.data().email,
          senha: doc.data().senha
        });
      });

      this.setState({ usuarios: lista });
    }).catch((erro) => {
      console.error("Erro ao buscar usuários:", erro);
    });
  }

  async gravar() {
    const {email,senha, nome, sobrenome, dataDeNascimento} = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, senha);
      await firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      dataDeNascimento: this.state.dataDeNascimento,
      email: this.state.email,
      senha: this.state.senha
    });
    alert("Usuário cadastrado com sucesso!");
    this.buscarUsuarios();
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    alert("Erro ao cadastrar usuário: " + erro.message);
  }
}

   // this.buscarUsuarios(); 
 // }

  render() {
    return (
      <div>
        <h1>Página de cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => this.setState({ nome: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => this.setState({ sobrenome: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Data de nascimento"
          onChange={(e) => this.setState({ dataDeNascimento: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Senha"
          onChange={(e) => this.setState({ senha: e.target.value })}
        />
        <br />
        <button onClick={this.gravar}>Gravar</button>

        <hr />
        <h2>Usuários cadastrados</h2>
        <ul>
          {this.state.usuarios.map((user) => (
            <li key={user.id}>
              {user.nome} {user.sobrenome} {user.dataDeNascimento} {user.email} {user.senha}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cadastro;
