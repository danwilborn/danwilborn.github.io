import React from 'react';
import styled from 'styled-components';

const TwitterFeedContainer = styled.div`
    flex: 50%;
    padding: 5em;
`

function TwitterFeed() {
    return (
        <TwitterFeedContainer>
            <a class="twitter-timeline" data-width="300" data-theme="light" href="https://twitter.com/Lane_Kiffin?ref_src=twsrc%5Etfw">Lane Kiffin Twitter</a> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
        </TwitterFeedContainer>
    );
}

export default TwitterFeed;