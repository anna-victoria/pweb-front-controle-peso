import Header from '../../components/header/header';
import { Link } from "react-router-dom";

import './dashboard.css';

function Dashboard() {
  return (
    <body className="App">

      <div>
        <Header />
      </div>
    
    
      <div className="App-background">
        <div className="App-body">
            <p>Teste</p>       
        </div>
        
      </div>
    </body>
  );
}

export default Dashboard;
