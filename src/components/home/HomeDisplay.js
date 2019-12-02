import React from 'react';
import '../../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';


const HomeHeader = styled.h1`
    font-size: 2vw;

    @media only screen and (max-width: 1200px) {
        font-size: 3vh;
        text-align: center;
    }
`

const LinkBtnContainer = styled.form`
    border: 2px solid #3c3b6e;
    height: 50px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
`
const LinkBtn = (props) => {

    return(
        <LinkBtnContainer action={props.action}>
            <input type="submit" value={props.value} className="link-btn-blue link-btn-blue-bkg" />
        </LinkBtnContainer>
    );
}

function Links(props) {

    return(
        <div className="info-container">
            <div className="about-container">
                <div className="about-img-container">
                    <img src="./images/punky-sign-cropped-more.png" className="about-img" alt="BEAUTIFUL PUNKY HOLLOW"/>
                </div>
                <div className="about-txt-container">
                    <div className="txt-box">
                        <div className="txt txt-left-align">
                            <ScrollAnimation animateIn="slideRight">
                                <HomeHeader>The True Home of Miller Family Thanksgiving</HomeHeader>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="slideLeft">
                            <LinkBtn value="LEARN MORE" name="LEARN MORE" action="/about"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="donate-container">
                <div className="donate-txt-container">
                    <div className="txt-box">
                        <div className="txt txt-right-align">
                            <ScrollAnimation animateIn="slideLeft">
                                <HomeHeader>Take Thanksgiving Back To Its Roots</HomeHeader>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="slideRight">
                            <LinkBtn value="CONTRIBUTE" name="CONTRIBUTE" action="/donate"/>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="donate-img-container">
                    <img src="./images/punky-barn-cropped-more.png" className="donate-img" alt="BEAUTIFUL PUNKY HOLLOW"/>
                </div>
            </div>
        </div>
    );

}

export default Links;