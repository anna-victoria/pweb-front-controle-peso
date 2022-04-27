import boneco from './boneco.svg';
import iconbalanca from './iconbalanca.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={iconbalanca} className="App-iconbalanca" alt="iconbalanca" />
      </div>

      <body className="App-background">
        <div className="App-body">
        <img src={boneco} className="App-boneco" alt="boneco" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        </div>
        
      </body>
    </div>
  );
}

export default App;
