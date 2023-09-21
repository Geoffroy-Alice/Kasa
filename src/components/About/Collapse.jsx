import React, {useState} from "react";
import '../../style/About/Collapse.css';
import Chevron from '../../assets/Vector.png';

//-----Gestion de l'affichage des informations-----
function Collapse ({title, description}){
//-----On déclare une variable d'état (Open) en appelent le hook useState-----
//-----Paire de valeur avec Open et la fonction setOpen-----
//-----L'état useState est fermé par défaut-----
    const [Open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!Open);
    }
//-----On englobe la div à basculer dans des accolades pour utiliser JS-----
//----- L' opérateur && est là pour déterminer la partie vraie-----
    return (
        <div className="info">
            <div className="infos">
                <h1 className="title">{title}
                    <img src={Chevron} className="chevron" onClick={handleOpen} alt="chevron"/>
                </h1>
            </div>
            {Open &&
            <div className="info-description">
                <p>{description}</p>
            </div>}
        </div>
    )
}

export default Collapse;