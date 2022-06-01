import boneco from './boneco.svg';
import iconbalanca from './iconbalanca.png';


import './App.css';

function App() {
  return (
    <body className="App">
      <div className="App-header">
        <img src={iconbalanca} className="App-iconbalanca" alt="iconbalanca" />
        <span className="text-big-header">Controle seu peso</span>
        <span className="text-small-header">DashBoard</span>
        <span className="text-small-header">Atualizar Dados</span>
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
              <p className="text-smalltext">Já inseriu seus dados? Clique Aqui!</p>   
            </div>
            
          </div>
        
        </div>
        
      </div>
    </body>
  );
}

export default App;
