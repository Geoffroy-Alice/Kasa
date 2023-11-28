import React, {useState} from "react";
import '../style/Layout/Collapse.css';
import Chevron from '.././assets/Vector.png';

//-----Gestion de l'affichage des informations-----
function Collapse ({title, description}){
//-----On déclare une variable d'état (Open) en appelent le hook useState-----
//-----Paire de valeur avec Open et la fonction setOpen-----
//-----L'état useState est fermé par défaut-----
    const [Open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!Open);
    }

    return (
        <div className="info">
            <div className="infos">
                <h1 className="title">{title}
                    <img src={Chevron} className={Open ? 'chevron' : 'chevron-open'} onClick={handleOpen} alt="chevron"/>
                </h1>
            </div>
            {Open && //-----Si le collapse est ouvert alors on affiche la description-----
            <div className="info-description">
                <div className="paragraphe-description">{description}</div>
            </div>}
        </div>
    )
}

export default Collapse;