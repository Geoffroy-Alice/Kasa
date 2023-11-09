import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import location from '../../data/logements.json';
import ChevronD from '../../assets/Chevron-Droit.png';
import ChevronG from '../../assets/Chevron-Gauche.png';
import '../../style/Accommodation/Slidechow.css';

function Slideshow(props) {
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
            <div className="slideshow">
                {props.pictures.map((pictures, i) =>
                    <img className="slideshow-image" key={i} src={logement.pictures[imageSlide]} alt="images-appartements"/>
                )}
            </div>
            {(props.pictures.length > 1) && <>
            <div className="chevrons">
                <div onClick={slideLeft}>
                        <img className="chevron-gauche" src={ChevronG} alt="chevron-gauche"/>
                    </div>
                <div onClick={slideRight}>
                    <img className="chevron-droit" src={ChevronD} alt="chevron-droit"/>
                </div>
            </div>
            </>
            }
            <p className="number-pictures">
                    {imageSlide + 1} / {props.pictures.length}
            </p>
            
        </div>
    )
}

export default Slideshow;