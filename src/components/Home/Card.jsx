import Rentals from '../../data/logements.json';
import React from 'react';
import '../../style/Home/Card.css';
import { NavLink } from 'react-router-dom';

function Card (){
    return (
        <div className='card-container'>
            <div className='allCard'>
                <div className='cards'>
                    {Rentals.map(location =>
                    <NavLink key={location.id} className='retail-card' to='/location/+location.id'>
                            <img className='card-image' src={location.cover} alt='imageLogement'/>
                            <div className='card-title'>
                                <h2 className='card-title-texte'>{location.title}</h2>
                            </div>
                    </NavLink> 
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;