import React from 'react';
import '../../App.css';
import './About.css';
import AboutDisplay from './AboutDisplay';
import CustomFooter from '../footer/Footer';
import ScrollAnimate from 'react-animate-on-scroll';

function About() {

    return(
        <div className="App">
            <AboutDisplay />
            <img className="background-img" src="./images/punky-sign-cropped-more.png" alt="BEAUTIFUL PUNKY HOLLOW"/>
            <CustomFooter />
        </div>
    );
}

export default About;