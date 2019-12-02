import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const ThumbnailGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 50%;
    margin: 4em;

    @media only screen and (max-width: 400px) {
        width: 100%;
        flex-direction: column;
        margin: 0;
    }
    
`

function Feed() {

    return (
        <ThumbnailGrid>
            {/* <Thumbnail
                url="rally"
                article="CAMPAIGN RALLY TO BE HELD AHEAD OF TOUR"
                src="./images/pineneedles.png"
                blurb="Kicking off its 2020 campaign tour, the Punky Hollow team is hosting a rally at campaign headquarters on December 21st"
            />
            <Thumbnail
                url="donations"
                article="DONATIONS HIT RECORD HIGH"
                src="./images/punky-sign.jpg"
                blurb="Donations towards the Punky Hollow 2020 campaign have hit an all-time high, leading the way among all campaigns"
            />
            <Thumbnail
                url="store"
                article="PUNKY 2020 SWAG NOW ON SALE"
                src="./images/shop/long-sleeve-t-background.png"
                blurb="Punky Hollow 2020 gear is now on sale, head on over to the campaign store and check it out"
            />
            <Thumbnail
                url="chairman"
                article="CAMPAIGN CHAIRMAN ANNOUNCED"
                src="./images/leader.jpg"
                blurb="Gene Miller announced as Punky 2020 Campaign Chairman"
            /> */}
            {/* <Thumbnail
                url="https://punkyhollow.home.blog/23"
                article="PUNKY HOLLOW ANNOUNCES 2020 CAMPAIGN"
                src="./images/punky2.jpg"
                blurb="Today the Punky Hollow team announced its campaign to host Thanksgiving in 2020"
            /> */}
        </ThumbnailGrid>
    );
}

export default Feed;