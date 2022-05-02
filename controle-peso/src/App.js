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
            <input className="box-nome"></input>
            <br></br>
            <input type="email" className="box-email"></input>
            <p className="text-metas">Metas</p>
          </div>
        
        </div>
        
      </div>
    </body>
  );
}

export default App;
