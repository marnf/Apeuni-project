import React from 'react';
import Experiment from '../../Components/Experiment';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;