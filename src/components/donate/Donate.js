import React from 'react';
import '../../App.css';
import CustomFooter from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonateInfo from './DonateInfo';

function Donate() {

    return(
    <div className="App">
        <header>
          <img src="./images/punky-2020-banner.png" className="banner-img"/>
        </header>
        <DonateInfo />
        <CustomFooter/>
      </div>
    );
}

export default Donate;