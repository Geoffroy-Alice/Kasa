import React from 'react';
//-----On importe les pages-----
import About from './pages/About/About';
import Accommodation from './pages/About/About';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
//-----On importe-----
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//-----Les différentes routes des pages-----
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/' element = {<Error />} />
        <Route path = '/Accomodation/:id' element = {<Accommodation />} />
        <Route path = '/About' element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;