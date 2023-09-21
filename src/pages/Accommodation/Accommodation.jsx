import React from 'react';
import '../../style/Accommodation/Accommodation.css';
import Header from '../../components/Header';
import Slideshow from '../../components/Accommodation/Slideshow';
import Main from '../../components/Accommodation/Main';
import Footer from '../../components/Footer';

function Accommodation() {
    return (
        <>
            <Header />
            <Slideshow />
            <Main />
            <Footer />
        </>
    )
}

export default Accommodation;