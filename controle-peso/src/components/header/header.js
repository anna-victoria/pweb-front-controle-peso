import React from 'react';
import './header.css';
import iconbalanca from './iconbalanca.png';


const Header = function () {
    return (
        <div className="App-header">
            <img src={iconbalanca} className="App-iconbalanca" alt="iconbalanca" />
            <span className="text-big-header">Controle seu peso</span>
            <span className="text-small-header">DashBoard</span>
            <span className="text-small-header">Atualizar Dados</span>
            
        </div>
    );
};

export default Header;