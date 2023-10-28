import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import location from '../../data/logements.json';
import ChevronD from '../../assets/Chevron-Droit.png';
import ChevronG from '../../assets/Chevron-Gauche.png';
import '../../style/Accommodation/Slidechow.css';

function Slideshow() {
    const { id } = useParams();
    const logement = location.find(logement => logement.id === id);

    const [imageSlide, setImageSlide] = useState(0);//-----Le premier slide est à 0-----

    const slideLeft =  () => {
        if (imageSlide === 0) {
            setImageSlide(logement.pictures.length - 1);
        } else {
            setImageSlide(imageSlide - 1);
        }
    };

    const slideRight = () => {
        if (imageSlide === logement.pictures.length -1) {
            setImageSlide(0);
        } else {
            setImageSlide(imageSlide +1);
        }
    };

    return (
        <div className="slideshow-container">
            <img className="slideshow-image"  alt="images-appartements"/>
            <div className="chevrons">
                <div className="chevron-gauche" onClick={slideLeft} src={ChevronG} alt="chevron-gauche"></div>
                <div className="chevron-droit" onClick={slideRight} src={ChevronD} alt="chevron-droit"></div>
            </div>
            <div className="number-pictures"></div>
        </div>
    )
}

export default Slideshow;