import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    background: #3c3b6e;
    width: 100%;
    height: 75px;
    top: 0;
    position: fixed;
    z-index: 100;

    @media only screen and (max-width: 700px) {
        height: 40px;
    }
`

const NavbarLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    float: right;
    margin-top: 1em;
    margin-right: 8em;

    @media only screen and (max-width: 950px) {
        margin: auto;
        margin-top: 10px;
    }
`

const NavbarLinkBox = styled.form`
    font-family: "gotham";
    display: flex;
    align-self: center;
    margin-left: 3vw;

    @media only screen and (max-width: 950px) {
        margin-left: 0px;
    }
`

const NavbarLinkBtn = styled.button`

    background: transparent;
    border: none;
    shadow: none;
    font-size: 16px;
    color: white;
    width: 100%;
    height: 100%;

    :hover {
        cursor: pointer;
        color: lightgrey;
    }

    @media only screen and (max-width: 950px) {
        font-size: 2vw;
    }

` 

const DeleteLinkBtn = styled.button`

    background: #B22234;
    border: none;
    shadow: none;
    font-size: 16px;
    color: white;
    width: 100%;
    height: 100%;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    padding-left: 1.5em;
    padding-right: 1.5em;

    :hover {
        cursor: pointer;
        opacity: 0.9;
        color: lightgrey;
    }

    @media only screen and (max-width: 950px) {
        font-size: 2vw;
    }

` 

const NavbarLogo = styled.img`
    height: 100%;
    width: auto;
    margin-left: 8vw;

    :hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

function LogoLink(props) {
    return (
        <a href={props.action}>
            <NavbarLogo src={props.src} alt={props.alt} />
        </a>
    );
}

function DeleteLink(props) {
    return(
        <NavbarLinkBox action={props.action}>
            <DeleteLinkBtn type="submit" style={props.style}>{props.value}</DeleteLinkBtn>
        </NavbarLinkBox>
    );
}

function NavbarLink(props) {
    return (
        <NavbarLinkBox action={props.action}>
            <NavbarLinkBtn type="submit" style={props.style}>{props.value}</NavbarLinkBtn>
        </NavbarLinkBox>
    );
}

function Navbar() {

    return(
        <NavbarContainer>
            <LogoLink src="./images/punky-2020-logo-no-bkg.png" alt="PUNKY 2020" action="/home"/>
            <NavbarLinksContainer>
                <NavbarLink action="/home" value="HOME" />
                <NavbarLink action="/about" value="ISSUES" />
                <NavbarLink action="/news" value="NEWS" />
                <NavbarLink action="/shop" value="SHOP" />
                <DeleteLink action="/donate" value="CONTRIBUTE"/>
            </NavbarLinksContainer>
        </NavbarContainer>
    );
}

export default Navbar;