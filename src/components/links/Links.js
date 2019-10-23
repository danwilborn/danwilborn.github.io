import React from 'react';
import '../../App.css';

function Links(props) {

    return(
        <div className="info-container">
            <div className="about-container">
                <img src="./images/punky1.jpg" className="about-img" />
                <form className="link-btn-container" action="/about">
                    <input type="submit" value="OUR PLATFORM" className="link-btn" />
                </form>
            </div>
            <div className="donate-container">
                <img src="./images/punky4.jpg" className="donate-img" />
                <form className="link-btn-container" action="/donate">
                    <input type="submit" value="DONATE" className="link-btn" />
                </form>
            </div>
        </div>
    );

}

export default Links;