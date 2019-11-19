import React from 'react';
import styled, {keyframes} from 'styled-components';

const SlideInFromRight = keyframes`
    0% {
        transform: translate(100vw, 0);
    } 50% {
        opacity: 0.75;
    } 100% {
        opacity: 1;
    }
`

const AboutInfoBtnContainer = styled.div`
    display: flex;
    flex: 1;
    border: 3px solid #3c3b6e;
    background: transparent;
    height: 160px;
    width: 320px;
    margin: 2em;
    animation: ${SlideInFromRight} 2s ease-in-out;
    animation-delay: calc(${props => props.order} * 500ms);
    animation-fill-mode: forwards;
    opacity: 0;

    @media only screen and (max-width: 950px) {
        width: 50vw;
        height: 50vh;
        align-self: center;
        margin: 0.5em;
    }
`

const AboutInfoBtn = styled.button`
    color: #3c3b6e;
    font-size: 36px;
    border: none;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 0 white;
    transition: ease-out 0.75s;

    :hover {
        background: #3c3b6e;
        color: white;
    }

    @media only screen and (max-width: 950px) {
        font-size: 6vw;
    }
`

function AboutButton(props) {

    const { onInfoButtonClick } = props;

    return(
        <AboutInfoBtnContainer order={props.order}>
            <AboutInfoBtn onClick={() => onInfoButtonClick(props.value)}>{props.value}</AboutInfoBtn>
        </AboutInfoBtnContainer>
    );
}

export default AboutButton;