import boneco from './boneco.svg';
import Header from '../../components/header/header';
import { Link } from "react-router-dom";

import './home.css';

function Home() {
  return (
    <body className="App">

      <div>
        <Header />
      </div>
    
    
      <div className="App-background">
        <div className="App-body">
          <div className="App-div-left">
            <img src={boneco} className="App-boneco" alt="boneco" />
          </div>

          <div className="App-div-right">
            <p className="text-title">Insira seus dados !</p>
            <p className="text-dados">Dados Pessoais</p>
            <input className="box-nome" placeholder="Nome"></input>
            <input type="email" className="box-email" placeholder="Email"></input>
            <input className="box-peso-inicial" placeholder="Altura (cm)"></input>
            <input className="box-genero" placeholder="Genero / Sexo"></input>
            <p className="text-metas">Metas</p>
            <p className="text-smalltext">Peso inicial\atual</p>
            <input className="box-smallbox"></input>
                <div className="meta">
                    <p className="text-smalltext">Peso desejado</p>              
                    <p className="text-smalltext">Data para alcançar</p>
                </div>

                <div className="meta">
                    <input className="box-smallbox"></input>
                    <input type="date" className="box-smallbox"></input>
                </div>

            <div className="div-final">                  
              <button className="button-final">Finalizar</button>   
              <center><Link to="/login" className="text-smalltext">Já inseriu seus dados? Clique Aqui!</Link></center> 
              {/* <p className="text-smalltext">Já inseriu seus dados? Clique Aqui!</p>    */}
            </div>
            
          </div>
        
        </div>
        
      </div>
    </body>
  );
}

export default Home;
