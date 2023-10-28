import React from "react";
import { useParams } from 'react-router-dom';
import '../../style/Accommodation/Description.css';
import location from '../../data/logements.json';
import Collapse from '../../components/Collapse';
import Rating from './Rating';

function Card() {
    const { id } = useParams();
    const logement = location.find(logement => logement.id === id);

    return (

        <div className='description-appart'>
            <section className="logement">
                <div className="description-logement">
                    <div className="titre-&-lieu">
                        <div className="titre-logement">
                            <h1>{logement.title}</h1>
                        </div>
                        <div className="lieu-logement">
                            <h2>{logement.location}</h2>
                        </div>
                    </div>
                    <div className="description-tags">
                        {logement.tags.map((tag, i) => (
                            <div key={i} className="tags">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="proprietaire-logement">
                    <div className="proprietaire">
                        <div className="proprietaire-name">
                            <h3>{logement.host.name}</h3>
                        </div>
                        <div className="proprietaire-photo">
                            <img src={logement.host.picture} className="photo-proprietaire" alt="proprietaire"></img>
                        </div>
                    </div>
                    <div>
                        <Rating 
                            rating={logement.rating}
                        />
                    </div>
                </div>
            </section>
            <section className='collapse-logement'>
                <div className="collapse-container">  
                    <Collapse className="detail-logement"
                        title={'Description'}
                        description={logement.description}
                    />
                </div>
                <div className="collapse-container-equipment">
                    <Collapse className="description-equipement"
                        title={'Equipement'}              
                        description={logement.equipments.map((eq, i) => (                      
                            <ul key={i} className="list-equipment">
                                <li>{eq}</li>
                            </ul>                       
                        ))}                  
                    />
                </div>
            </section>                                      
        </div>

    )
}

export default Card;