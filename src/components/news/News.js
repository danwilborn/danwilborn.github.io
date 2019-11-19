import React from 'react';
import CustomFooter from '../footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Feed from './Feed';
import styled from 'styled-components';

const NewsContainer = styled.div`
    display: flex;
    flex-direction: row;
`


function News() {

    return(
        <div className="App">
            <NewsContainer>
                <Feed />
            </NewsContainer>
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                <footer>
                    <CustomFooter/>
                </footer>
            </ScrollAnimation>
        </div>
    );
}

export default News;