import React from "react";
import '../../style/About/Collapse.css';
import Chevron from '../../assets/Vector.png';
import Button from './Button';

//-----On importe les hooks-----
import{useState} from 'react';

//-----Gestion de l'affichage des informations-----
function Collapse ({title, description}){
//-----On déclare une variable d'état (Open)-----
//-----setOpen est la fonction de cette variable(initialement fausse)-----
    const [Open, setOpen] = useState(false);
    const OpenDirection = () => {
        setOpen((Open) => !Open);
    };

    return (
        <div className="info">
            <div className="infos" onClick={OpenDirection}>
                <h1 className="title"  onClick={() => setOpen(!Open)}>{title}
                <img className="chevron" src={Chevron} alt="chevron"/>
                </h1>
            </div>
            <div className="info-description">{description}</div>
        </div>
    )
}

export default Collapse;