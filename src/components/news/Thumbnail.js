import React from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
    width: 400px;
    height: 300px;
    box-shadow: none;
    background-color: black;
    opacity: 1;
    position: relative;
    z-index: 0;
    margin: 1em;

    :hover {
        cursor: pointer;
        opacity: 0.9;
    }

    @media only screen and (max-width: 400px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 1em;
    }
`

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    opacity: 0.4;
`

const ThumbnailTitle = styled.h1`
    color: white;
    font-size: 18px;
    text-align: left;
    position: absolute;
    top: 20px;
    left: 20px;
    margin-right: 20px;
    

`

const ThumbnailBlurb = styled.div`
    color: lightgrey;
    font-size: 12px;
    text-align: left;
    position: absolute;
    bottom: 50px;
    left: 15px;
    margin-right: 15px;
    padding: 10px;
`

const ReadMore = styled.label`
    font-size: 13px;
    text-align: right;
    color: #B22234;
    position: absolute;
    bottom: 20px;
    right: 20px;
    
    :hover {
        cursor: pointer;
    }

`

function Thumbnail(props) {

    return (
        <ThumbnailContainer>
            <ThumbnailTitle>
                <b>{props.article}</b>
            </ThumbnailTitle>
            <ThumbnailBlurb>
                {props.blurb}
            </ThumbnailBlurb>
            <ReadMore>
                <b>Read More</b>
            </ReadMore>
            <ThumbnailImage src={props.src} alt={props.alt} />
        </ThumbnailContainer>
    );
}

export default Thumbnail;