import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const SponsorFooter = styled.footer`
    width: 320px;
    height: 40px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 10px;
    align-content: center;
    text-align: center;
    font-size: 12px;
    border: 1px solid black;

    @media only screen and (max-width: 700px) {
        width: 100%;
        height: auto;
        font-size: 12px;
    }
`

const Logo = styled.img`
    width: 25vw;
    margin: auto;
    margin-top: 100px;
`


function CustomFooter(props) {
    return (
        <div>
            <Logo src="./images/punky-2020-logo-no-bkg-2.png" alt="PUNKY 2020" />
            <SponsorFooter>
                PAID FOR BY PUNKY FOR THANKSGIVING
            </SponsorFooter>
        </div>
    );
}

export default CustomFooter;