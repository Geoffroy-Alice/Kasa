import React from 'react';
import '../../style/Home/Header.css';
import {NavLink} from 'react-router-dom';

function Header (){
    return (
        <header className='header'>
            <div className='logo'>
            </div>
            <div className='pages_nav'>
                <NavLink className='page_accueil' to='/'>Accueil</NavLink>
                <NavLink className='page_Apropos' to='/about'>A propos</NavLink>
            </div>
        </header>
    );
}

export default Header;