import React from 'react';
import MovieProduct from './movieproduct';
import Carosual from './carosual';

const DashboardPage = () => {
    return (
        <div className='space-y-5'>
            <Carosual/>
            <MovieProduct/>
        </div>
    );
};

export default DashboardPage;