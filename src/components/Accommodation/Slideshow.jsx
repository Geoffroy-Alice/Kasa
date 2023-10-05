import React from "react";
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import ChevronD from '../../assets/Chevron-Droit.png';
import ChevronG from '../../assets/Chevron-Gauche.png';

function Slideshow() {
    const { id } = useParams();//-----Le premier est à 0-----
    let logement = logements.find(logement => logement.id === id);

    return (
        <div className="slideshow-container" key={logement.id}>
            {logements.map(pictures => 
            <img className="slideshow-image" src={pictures.pictures} alt="images-appartement"/>)}
                <div className="chevrons">
                    <div className="chevron-gauche" src={ChevronG} alt="chevron-gauche"></div>
                    <div className="chevron-droit" src={ChevronD} alt="chevron-droit"></div>
                </div>
                <div className="number-pages"></div>
        </div>
    )
}

export default Slideshow;