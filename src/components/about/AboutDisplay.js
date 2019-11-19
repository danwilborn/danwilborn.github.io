import React, { useState } from 'react';
import styled from 'styled-components';
import AboutButton from './AboutButton';
import AboutInfoPane from './AboutInfoPane';

const AboutContainer = styled.div`
    width: auto;
    border: 2px solid #b22234;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 0.5em;
    margin-top: 80px;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }
`

function AboutDisplay() {

    const [infoValue, setInfoValue] = useState("");

    return(
        <div>
            <AboutContainer>
                <Row>
                    <AboutButton value="FOOD" order={0} onInfoButtonClick={() => setInfoValue("FOOD")} />
                    <AboutButton value="FOOTBALL" order={1} onInfoButtonClick={() => setInfoValue("FOOTBALL")} />
                    <AboutButton value="FAMILY" order={2} onInfoButtonClick={() => setInfoValue("FAMILY")} />
                    <AboutButton value="FREEDOM" order={3} onInfoButtonClick={() => setInfoValue("FREEDOM")} />
                </Row>
                <Row>
                    <AboutInfoPane value={ infoValue } />
                </Row>
                <form className="link-btn-blue-container" action="/home">
                    <input type="submit" value="RETURN HOME" name="RETURN HOME" className="link-btn-blue link-btn-blue-bkg" />
                </form>
            </AboutContainer>
        </div>
    );
}

export default AboutDisplay;