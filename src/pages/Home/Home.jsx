import React from 'react';
import '../../style/Home/Home.css';
import Header from '../../components/Home/Header';
import Banner from '../../components/Home/Banner';
import Card from '../../components/Home/Card';
import Footer from '../../components/Home/Footer';


function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
)
}

export default Home;