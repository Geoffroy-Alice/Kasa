import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import location from '../../data/logements.json';
import '../../style/Accommodation/Accommodation.css';
import Header from '../../components/Header';
import Slideshow from '../../components/Accommodation/Slideshow';
import Description from '../../components/Accommodation/Description';
import Footer from '../../components/Footer';

function Accommodation() {
    const { id } = useParams();
    const logement = location.find(logement => logement.id === id);

        if (logement === undefined || null) {
            return <Navigate to="/Error" />
        }

    return (
        <section className='accommodation' key={logement.id}>
            <Header />
        <div className="accommodation-container">
                    <Slideshow  pictures={logement.pictures}/>
                    <Description />
        </div>
            <Footer />
        </section>
    )
}

export default Accommodation;