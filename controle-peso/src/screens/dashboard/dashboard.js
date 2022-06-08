import Header from '../../components/header/header';
import { Link } from "react-router-dom";
import balancapreta from './balancapreta.svg';

import './dashboard.css';

function Dashboard() {
  return (
    <body className="App">

      <div>
        <Header />
      </div>
    
    
      <div className="App-background">
        <div className='div-div'>

          <span className='titles'>Monitoramento</span>
          <div className='div-dentro'> 
            <div className='circulo'>
              <div className='circulo-dentro'>
                <span className='circulo-text1'> Peso Inicial</span>
                <br></br>
                <span className='circulo-text2'> 50.0 kg</span>
                <br></br>
                <span className='circulo-text3'> 01/12/22</span>
              </div>
            </div>
            <div className='circulo'> 
              <div className='circulo-dentro'>
                <span className='circulo-text1'> Peso Atual</span>
                <br></br>
                <span className='circulo-text2'> 50.0 kg</span>
                <br></br>
                <span className='circulo-text3'> 01/12/22</span>
              </div>
            </div>
            <div className='circulo'> 
              <div className='circulo-dentro'>
                <span className='circulo-text1'> Peso a alcançar</span>
                <br></br>
                <span className='circulo-text2'> 50.0 kg</span>
                <br></br>
                <span className='circulo-text3'> 01/12/22</span>
              </div>
            </div>
          </div>
          <div className='div-dentro'>
            <img src={balancapreta} className='img-balanca' alt='balancapreta'></img>
            <div className='div-sub'>
                <span className='subtitles'>Atualizar Peso</span>
                <span className='minortext'>Qual o seu peso hoje?</span>
                <div className='div-input'>
                  <input type="text" className='input-peso' placeholder="Peso"></input>
                  <button className='button-final1'>Atualizar</button>
                </div>
              </div>
          </div>
        </div>

        <div className='div-div'>
          <span className='titles'>Evolução</span>
            <div className='div-dentro-side'>
              <span>Progresso</span>
                <div className='cinza'>
                  <div className='rosa'>75%</div>
                </div>
              <span>Tempo</span>
                <div className='cinza'>
                  <div className='azul'>50%</div>
                </div>
            </div>          
        </div>

        <div className='div-div'>
          <span className='titles'>IMC</span>
          <div className='moni'>
            <div className='moni-div-text'>  <span> Abaixo do Peso</span>
                                        <span> Peso ideal</span>
                                        <span> Acima do Peso</span>
            </div>
            <div className='moni-div'>
              <div className='amarelo'></div>
              <div className='verdin'></div>
              <div className='red'></div>
            </div>
              <div className='bolinha'></div>
          </div>
        </div>

        <div className='div-div'>
          <span className='titles'>Comparativo</span>
          <div className='comp'>
            <div className='quadradocomp'>
              <span className='quadrado-text1'>-0.5kg</span>
              <br></br>
              <span className='quadrado-text2'>Ultima medida</span>
              <br></br>
              <span className='quadrado-text3'>(55.0 kg)</span>
            </div>
            <div className='quadradocomp'>
            <span className='quadrado-text1'>-4.5 kg</span>
              <br></br>
              <span className='quadrado-text2'>7 dias atrás</span>
              <br></br>
              <span className='quadrado-text3'>(55.0 kg)</span>
            </div>
            <div className='quadradocomp'>
            <span className='quadrado-text1'>+2.5 kg</span>
              <br></br>
              <span className='quadrado-text2'>30 dias atrás</span>
              <br></br>
              <span className='quadrado-text3'>(55.0 kg)</span>
            </div>
            <div className='quadradocomp'>
            <span className='quadrado-text1'>+0.5kg</span>
              <br></br>
              <span className='quadrado-text2'>1 ano atrás</span>
              <br></br>
              <span className='quadrado-text3'>(55.0 kg)</span>
            </div>
          </div>
        </div>

        <div className='div-div'>
          <span className='titles'>Histórico</span>
          <div className='historico'></div>
        </div>       
      </div>
    </body>
  );
}

export default Dashboard;
