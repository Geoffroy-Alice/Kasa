import React from "react";
import { useParams } from 'react-router-dom';
import location from '../../data/logements.json';

function Card() {
    const { id } = useParams();
    const logement = location.find(logement => logement.id === id);

    return (

        <div className='description-appart'>
            <div className="logement">
                <div className="description-logement">
                    <div className="titre-&-lieu">
                        <div className="titre-logement">

                        </div>
                        <div className="lieu-logement">

                        </div>
                    </div>
                    <div className="proprietaire">

                    </div>
                </div>
                <div className="tags-&-etoiles">
                    <div className="description-tags">

                    </div>
                    <div className="description-etoiles">

                    </div>
                </div>
            </div>
            <div>
                <div className="detail-logement">

                </div>
                <div className="description-equipement">

                </div>
            </div>
                            {/* title = {logement.title}
                            description = {logement.description}
                            host = {logement.host}
                            rating = {logement.rating}
                            location = {logement.location}
                            equipments = {logement.equipments}
                            tags = {logement.tags}  */}
        </div>

    )
}

export default Card;