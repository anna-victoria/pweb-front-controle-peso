import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import iconbalanca from './iconbalanca.png';



const Header = function () {
    return (
        <div className="App-header">
            <img src={iconbalanca} className="App-iconbalanca" alt="iconbalanca" />
            {/* <span className="text-big-header">Controle seu peso</span> */}
            <Link to="/" className="text-big-header" style={{ textDecoration: 'none'}}>Controle seu peso</Link>
            <Link to="/" className="text-small-header" style={{ textDecoration: 'none'}}>DashBoard</Link>
            <Link to="/" className="text-small-header" style={{ textDecoration: 'none'}}>Atualizar Dados</Link>
            {/* <span className="text-small-header">DashBoard</span>
            <span className="text-small-header">Atualizar Dados</span> */}
            
        </div>
    );
};

export default Header;