import React from 'react';
import { useParams } from 'react-router-dom';
import location from '../../data/logements.json';
import '../../style/Accommodation/Accommodation.css';
import Header from '../../components/Header';
import Slideshow from '../../components/Accommodation/Slideshow';
import Description from '../../components/Accommodation/Description';
import Footer from '../../components/Footer';

function Accommodation() {
    const { id } = useParams();
    const logement = location.find(logement => logement.id === id);

    return (
        <section className='accommodation' key={logement.id}>
            <Header />
        <div className="accommodation-container" >
                    <Slideshow pictures={location.pictures}/>
                    <Description 
                        title = {location.title}
                        description = {location.description}
                    />
        </div>
            <Footer />
        </section>
    )
}

export default Accommodation;