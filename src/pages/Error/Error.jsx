import React from 'react';
import '../../style/Error/Error.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

function Error() {

    return (
        <div className='error'>
            <Header />
            <div className='info-error'>
                <h1 className='number-error'>
                    404
                </h1>
                <p className='text-error'>
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <NavLink className='return-error-info' to='/'>Retourner sur la page d’accueil</NavLink>
            <Footer />
        </div>
    )
}

export default Error;