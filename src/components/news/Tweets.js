import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterFeedContainer = styled.div`
    flex: 50%;
    padding: 5em;

    @media only screen and (max-width: 600px) {
        flex: 100%;
        padding: 0;
    }
`

function TwitterFeed() {
    return (
        <TwitterFeedContainer>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="punkyhollow2020"
                options={{height: 800}}
            />
        </TwitterFeedContainer>
    );
}

export default TwitterFeed;