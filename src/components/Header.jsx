import React from 'react';
import '../style/Layout/Header.css';
import {NavLink} from 'react-router-dom';

function Header (){
    return (
        <header className='header'>
            <div className='logo'>
            </div>
            <div className='pages_nav'>
                <NavLink className='page_accueil' to='/'>Accueil</NavLink>
                <NavLink className='page_Apropos' to='/About'>A propos</NavLink>
            </div>
        </header>
    );
}

export default Header;