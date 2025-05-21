import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import firebase from '../../Firebase';
import './Home.css'; 

const Home = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    email: ''
  });

  useEffect(() => {
    const buscarUsuario = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        try {
          const usuarioDoc = await firebase.firestore()
            .collection("usuario")
            .where("email", "==", user.email)
            .get();

          if (!usuarioDoc.empty) {
            const data = usuarioDoc.docs[0].data();
            setUsuario({
              nome: data.nome,
              sobrenome: data.sobrenome,
              dataDeNascimento: data.dataDeNascimento,
              email: user.email
            });
          }
        } catch (erro) {
          console.error("Erro ao buscar dados do usuário:", erro);
        }
      }
    };

    buscarUsuario();
  }, []);

  return (
    <div className="home-container">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Elisa Tils - Advogada Direito Civil</h1>
        <p>Defendendo direitos com ética, dedicação e estratégia</p>
      </motion.div>

      <motion.div
        className="estatisticas"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="quadro">+120 casos atuados</div>
        <div className="quadro">+40 júris realizados</div>
        <div className="quadro">Atuação em 9 estados do Brasil</div>
      </motion.div>

      <motion.div
        className="missao"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2>Missão</h2>
        <p>Proteger os direitos fundamentais e garantir uma defesa técnica eficaz e humana.</p>
        <h2>Visão</h2>
        <p>Ser referência na advocacia criminal individual e de confiança.</p>
        <h2>Valores</h2>
        <p>Ética, comprometimento, estratégia e respeito à dignidade humana.</p>
      </motion.div>

      <motion.div
        className="atuacao"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h2>Como atuo na defesa dos meus clientes</h2>
        <ul>
          <li><strong>Investigação defensiva:</strong> Coleta e análise técnica de provas em favor do acusado.</li>
          <li><strong>Atuação estratégica:</strong> Defesa personalizada conforme o caso concreto.</li>
          <li><strong>Atualização constante:</strong> Acompanhamento das inovações legislativas e jurisprudenciais.</li>
        </ul>
      </motion.div>

      <motion.div
        className="sobre"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <img src="/Fotos/Elisa1.jpeg" alt="Foto da Dra. Elisa Tils" className="foto-elisa" />
        <p>Sou Elisa Tils, advogada especializada em Direito Processual Civil, dedicada à proteção dos direitos individuais. Acredito em uma advocacia próxima, técnica e transparente.</p>
      </motion.div>

      <div className="links">
        <Link to="/Contato"><button>Contato</button></Link>
        <Link to="/Sobre"><button>Sobre</button></Link>
      </div>
    </div>
  );
};

export default Home;









//import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import "../../index.css";
//import firebase from '../../Firebase';

//class Home extends Component{
    //constructor(props){
     // super(props);
      //this.state = {
        //nome: '',
       // sobrenome: '',
      //  dataDeNascimento: '',
       // email: ''
     // };
    //}

    //componentDidMount() {
     // this.buscarUsuario();
    //}

    //async buscarUsuario() {
      //const user = firebase.auth().currentUser;
  
      //if (user) {
        //try {
          //const usuarioDoc = await firebase.firestore().collection("usuario").where("email", "==", user.email).get();
  
          //if (!usuarioDoc.empty) {
            //const usuario = usuarioDoc.docs[0].data();
            //this.setState({
              //nome: usuario.nome,
              //sobrenome: usuario.sobrenome,
            //  dataDeNascimento: usuario.dataDeNascimento,
              //email: user.email
            //});
          //}
        //} catch (erro) {
          //console.error("Erro ao buscar dados do usuário:", erro);
        //}
      //}
    //}
   // render(){
      //return(
       // <div>
           // <h1>Página inicial teste</h1>
          //  <h2>Dados do Usuário:</h2>
          //  <p><strong>Nome:</strong> {this.state.nome}</p>
          //  <p><strong>Sobrenome:</strong> {this.state.sobrenome}</p>
      //      <p><strong>Data de Nascimento:</strong> {this.state.dataDeNascimento}</p>
        //    <p><strong>Email:</strong> {this.state.email}</p>

         //   <Link to="/Contato"><button>Contato</button></Link> <br/>
           // <Link to="/Sobre"><button>Sobre</button></Link> 
       //     <Link to="/App"><button>Login</button></Link> 
         //   <Link to="/Cadastro"><button>Cadastro</button></Link> 
       // </div>
    //  )
   // }
//}

//export default Home;

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