import React from 'react';
import '../../App.css';
import './Home.css';
import HomeDisplay from './HomeDisplay';
import CustomFooter from '../footer/Footer';
import JoinForm from '../join/Join';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
  return (
    <div className="App">
      <HomeDisplay />
      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <img src="./images/punky-2020-banner-2.png" className="banner-img-2" alt="PUNKY HOLLOW 2020"/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <JoinForm />
      </ScrollAnimation>
      <footer>
        <CustomFooter/>
      </footer>
    </div>
  );
}

export default Home;