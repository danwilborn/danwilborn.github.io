import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideDown = keyframes`
    0% {
        height: 0%;
    }
    100% {
        height: 100%;
    }

`

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
`

const InfoPane = styled.div`
    width: 95%;
    margin: 1em auto;
    border: 2px solid #b22234;
    display: flex;
    flex-direction: row;
    animation: ${SlideDown} 1s;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }

`

const TextBox = styled.div`
    color: #3c3b6e;
    flex: 50%;
    height: 60vh;
    padding: 1em;
    font-size: 4vh;
    align-self: center;
    text-align: left;
    animation: ${FadeIn} 2s;

    @media only screen and (max-width: 950px) {
        height: auto;
    }
`

const AboutImage = styled.img`
    display: flex;
    flex: 50%;
    width: auto;
    height: 60vh;
    object-fit: cover;
    animation: ${FadeIn} 2s;

    @media only screen and (max-width: 950px) {
        flex: 1;
        width: 100%;
        height: auto;
    }
`

const AboutInfoPane = (props) => {

    if (props.value === "FOOD") {
        return (
            <InfoPane>
                <TextBox>
                    Food is a quintessential piece of any Thanksgiving. Without it, Thanksgiving as a holiday would be lost. 
                    Now imagine eating that food with sweeping views of the pond, surrounded by nature.
                    Cap the night off with some pumpkin pie and roasted marshmallows.
                    Does it get any better than that?
                </TextBox>
                <AboutImage src="./images/dinner.jpg" alt="delcicious food" />
            </InfoPane>
        );
    } else if (props.value === "FOOTBALL") {
        return (
            <InfoPane>
                <AboutImage src="./images/football.jpg" alt="football" />
                <TextBox>
                    Football: America's pastime. Can you imagine a Thanksgiving without it?
                    Thanksgiving in the suburbs lacks the outdoor space to truly experience America's sport.
                    Punky Hollow's spacious confines allows for the perfect game of 2-hand-touch.
                </TextBox>
            </InfoPane>
        );
    } else if (props.value === "FAMILY") {
        return (
            <InfoPane>
                <TextBox>
                    Family is what Thanksgiving is all about right? Well, except when you get tired of it.
                    Luckily, with its sweeping estate, Punky Hollow has plenty of nooks and crannies to escape to when Family Thanksgiving becomes too much.
                </TextBox>
                <AboutImage src="./images/leader.jpg" alt="fearless leader" />
            </InfoPane>
        );
    } else if (props.value === "FREEDOM") {
        return (
            <InfoPane>
                <AboutImage src="./images/punky5.jpg" alt="punky" />
                <TextBox>
                    Nothing is more patriotic than Thanksgiving in Rural America.
                    Take Thanksgiving back to its roots: Punky Hollow.
                    <br />
                    <br />
                    <b>Make Thanksgiving Great Again</b>
                </TextBox>
            </InfoPane>
        );
    } else {
        return null;
    }

}

export default AboutInfoPane;