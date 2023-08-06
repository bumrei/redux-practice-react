import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StarwarsPeople from '../pages/StarwarsPeople';
import StarwarsPlanets from '../pages/StarwarsPlanets';
import StarwarsStarship from '../pages/StarwarsStarship';
import NotFountPage from '../pages/NotFountPage';
import ReduxBasicTest from '../pages/ReduxBasicTest';

const RouterHome = () => {
    return (
        <Routes>
            <Route path='/' element={<StarwarsPeople />} />
            <Route path='/people' element={<StarwarsPeople />} />
            <Route path='/planets' element={<StarwarsPlanets />} />
            <Route path='/starship' element={<StarwarsStarship />} />
            <Route path='/reduxBasic' element={<ReduxBasicTest />} />


            {/* Not Fount Page */}
            <Route path='*' element={<NotFountPage />} />
            
        </Routes>
    );
};

export default RouterHome;