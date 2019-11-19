import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
    0% {
        transform: translate(0, 300px);
        opacity: 0;
    } 
    100% {
        opacity: 1;

        :hover {
            opacity: 0.9;
            cursor: pointer;
        }
    }
`


const StoreItemContainer = styled.button`
    display: inline-block;
    overflow: auto;
    width: 300px;
    height: 300px;
    border: none;
    background: transparent;
    shadow: none;
    animation: ${SlideUp} 2s;
    animation-delay: calc(${props => props.order} * 200ms);
    animation-fill-mode: forwards;
    opacity: 0;

    @media only screen and (max-width: 300px) {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 900px) {
        margin: auto;
    }

`

const StoreItemImageContainer = styled.div`
    width: 100%;
    height: 80%;
    border: 3px solid #3c3b6e;
    margin-top: 0px;

    :hover {
        border: 2px solid #B22234;
    }
`

const StoreItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const StoreItemName = styled.div`
    font-size: 14px;
    color: #3c3b6e;
`

const StoreItemPrice = styled.div`
    font-size: 14px;
    color: #B22234;
`

function StoreItem(props) {

    const { onItemClick } = props;

    return(
        <StoreItemContainer onClick={() => onItemClick()} order={props.order}>
            <StoreItemImageContainer>
                <StoreItemImage src={props.src} alt={props.alt} />
            </StoreItemImageContainer>
            <StoreItemName>{props.name}</StoreItemName>
            <StoreItemPrice>{props.price}</StoreItemPrice>
        </StoreItemContainer>
    );
}

export default StoreItem;