import React from 'react';
import '../../App.css';
import './Donate.css';
import DonateInfo from './DonateInfo';
import ScrollAnimate from 'react-animate-on-scroll';
import CustomFooter from '../footer/Footer';


function Donate() {

    return(
    <div className="App">
      <img className="background-img" src="./images/punky-barn2-cropped.png" alt="BEAUTIFUL PUNKY HOLLOW"/>
      <DonateInfo />
      <footer>
        <CustomFooter/>
      </footer>
    </div>
    );
}

export default Donate;