import boneco from '../../../../controle-peso/src/boneco.svg';
import Header from '../../components/header/header';
import { Link } from "react-router-dom";

import './login.css';

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
            <p className='text1'>Acessar meus dados</p>
            <br></br>
            <span className='text2'>Qual o seu email?</span>
            <br></br>
            <input className='caixa-email' placeholder='Email'></input>
            <div className='div-final'>
                <button className='button-acesso'>Acessar</button>
                <center>
                    <Link to='/' className='text-link' style={{ textDecoration: 'none'}}>Não inseriu seus dados? Clique Aqui!</Link>
                </center>
            </div>
          </div>
        
        </div>
            
      </div>
    </body>
  );
}

export default Home;
