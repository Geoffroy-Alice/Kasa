import styles from './Home/Home.module.css';
import { Fragment, useState, useEffect } from 'react';


const Home = function () {
    const [cards, setCards] = useState([]);
    useEffect( () => {
        async function fetchCards () {
            try {
                const repfetch = await (await fetch('./data/logements.json')).json();
                setCards (repfetch);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchCards();
    }, []
    );
    return (
        <Fragment>
            <h1>Hello</h1>
        </Fragment>
    )
}

export default Home;