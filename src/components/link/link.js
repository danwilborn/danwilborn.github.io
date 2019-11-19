import React from 'react';
import styled from 'styled-components';

const link_btn_container = styled.form`
    display: flex;
    border: 2px solid white;
    height: 50px;
    width: 200px;
    justify-content: center;
    align-items: center;
`

const link_btn = styled.input`
    background: transparent;
    color: white;
    font-size: 18px;
    border: none;
    width: 100%;
    float: left;
    height: 100%;
    box-shadow: inset 0 0 0 0 white;
    transition: ease-out 0.75s;

  
  :hover {
    color: #3c3b6e;
  }
`

`.link_btn_bkg {
  :hover {
    box-shadow: inset 200px 0 0 0 white;
}`

export function Link(props) {
    <link_btn_container action="/about">
        <link_btn type="submit" value={props.value} className="link-btn-bkg" />
    </link_btn_container>
}

