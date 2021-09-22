import React from 'react';
import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router } from 'react-router-dom';

import "./App.css";

const App = () => {
    return (
        <Router basename="portfolio">
            <div className="App">
                <div className="container">
                    <div className="row height-container">
                        <div className="col xl-3 lg-3 md-12 sm-12 c-12">
                            <SideBar />
                        </div>
                        <div className="col xl-9 lg-9 md-12 sm-12 c-12">
                            <MainContainer />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App
