import React from 'react'
import '../../style/About/About.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/About/Banner'
import Collapse from '../../components/About/Collapse'

function About() {
    return (
        <div className='about'>
            <Header />
            <Banner />
            <div className='Collapse-Info'>
                <Collapse className="info-fiabilite"
                    title={"Fiabilité"}
                    description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
                />
                <Collapse className="info-respect"
                    title={"Respect"}
                    description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                />
                <Collapse className="info-service"
                    title={"Service"}
                    description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                />
                <Collapse className="info-securite"
                    title={"Sécurité"}
                    description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                />
            </div>
            <Footer />
        </div>
    )
}

export default About;