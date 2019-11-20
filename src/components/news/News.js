import React from 'react';
import CustomFooter from '../footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Feed from './Feed';
import styled from 'styled-components';
import TwitterFeed from './Tweets';

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
            <footer>
                <CustomFooter/>
            </footer>
        </div>
    );
}

export default News;