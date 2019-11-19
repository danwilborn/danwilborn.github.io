import React from 'react';
import styled from 'styled-components';

const txt_container = styled.div`
    display: flex;
    margin-left: 0.2em;
    margin-right: 0.2em;
    width: 99%;
    height: 100%;
`

const white_box = styled.div`
    display: flex;
    background: white;
    width: 100%;
    height: 80%;
`

const blue_box = styled.div`
    display: flex;
    background: #3c3b6e;
    width: 100%;
    height: 20%;
`

export default function Textbox(props) {
    return (
        <txt_container>
            <white_box />
            <blue_box />
        </txt_container>
    );
}

