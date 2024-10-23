import React from 'react';
import Experiment from '../../Components/Experiment';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Experiment></Experiment>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;