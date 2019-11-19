import React from 'react';
import '../../App.css';
import './Donate.css';
import styled, { keyframes } from 'styled-components';

const RedMark = styled.mark`
    background-color: #b22234
    color: #3c3b6e;
`

const DownloadLink = (props) => {
    return(
        <a href="https://assets.ctfassets.net/4ubxbgy9463z/2AbOR3fHai6msEOqDz6Yfj/6b6805adb7725b329648c763b011bc63/Disclaimer-Occupation_Info.pdf" target="_blank">
            <RedMark>
                Please attach this form to your donation
            </RedMark>
        </a>
    );
}

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
`

const Address = styled.div`

    width: 30vw;
    height: auto;
    border: 2px solid #3c3b6e;
    margin: auto;

    @media only screen and (max-width: 700px) {
        width: 80%;
    }

`

const ListContainer = styled.div`
    position: relative;
    width: 30vw;
    margin: auto;
    font-size: 1.25vw;

    @media only screen and (max-width: 700px) {
        font-size: 5vw;
        width: 80%;
    }
`

const List = styled.ul`
    list-style-position: outside;
    text-align: left;
`

const Li = styled.li`
    padding-left: 1em;
    padding-bottom: 0.5em;
`

const DonateInfoContainer = styled.div`
    background: white;
    color: #3c3b6e;
    height: auto;
    border: 3px solid #3c3b6e;
    flex: 1;
    font-size: 3vh;
    animation: ${FadeIn} 1s ease-in;

    @media only screen and (max-width: 700px) {
        background: white;
        color: #3c3b6e;
        width: 100%;
        height: auto;
        border: 3px solid #3c3b6e;
        flex: 100%;
        align-self: center;
    }
`

function DonateInfo() {

    return(
        <div className="donate-page">
            <div className="row">
                <DonateInfoContainer>
                    <h3>
                        HELP MAKE THANKSGIVING GREAT AGAIN
                    </h3>
                    <DownloadLink />
                    <div className="red-info">
                        Donations can be made to the following address:
                    </div>
                    <Address>
                        PUNKY FOR THANKSGIVING <br />
                        5 PINE NEEDLES DR <br />
                        PITTSFORD, NY 14534
                    </Address>
                    <div className="red-info-italics">
                        Please note that the Federal Elections Commission requires that we gather employer and occupation information from you, and without it we will be unable to accept your contribution
                    </div>
                        <label>Please remember to include the following:</label>
                        
                        <ListContainer>
                            <List>
                                <Li>Full name</Li>
                                <Li>Address</Li>
                                <Li>Employer and occupation information</Li>
                                <Li>Phone number</Li>
                                <Li>Email address</Li>
                            </List>
                        </ListContainer>
                </DonateInfoContainer>
            </div>
        </div>
    );
}

export default DonateInfo;