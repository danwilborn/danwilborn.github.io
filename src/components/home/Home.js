import React from 'react';
import '../../App.css';
import Links from '../links/Links';
import CustomFooter from '../footer/Footer';
import JoinForm from '../join/Join';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className="App">
      <header>
        <img src="./images/punky-2020-banner.png" className="banner-img"/>
      </header>
      <Links />
        <img src="./images/punky-2020-banner2.png" className="banner-img-2" />
        <JoinForm />
      <CustomFooter/>
    </div>
  );
}

export default Home;