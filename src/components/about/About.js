import React from 'react';
import '../../App.css';
import CustomFooter from '../footer/Footer';

function About() {

    return(
        <div className="App">
            <header>
                <img src="./images/punky-2020-banner.png" className="banner-img"/>
            </header>
            <form className="link-btn-container-3" action="/home">
                <input type="submit" value="RETURN HOME" className="link-btn" />
            </form>
            <img className="background-img" src="./images/punky1.jpg" />
            <div className="about-info-container">
                <h4>IT HAS BEEN FAR TOO LONG SINCE THANKSGIVING WAS AT PUNKY</h4>
                <br />
                <div>
                    Once the peak of Miller Family gatherings, Thanksgiving has lost its luster in recent years. A time normally filled with outdoor shenanigans, marshmallow roasting, football, and food has become merely about the latter.
                </div>
                <div className="white-info-italics">
                    BUT WE HAVE A PLAN FOR THAT!
                </div>
                <div className="red-info-italics">
                    There is only one thing that can fix Miller Family Thanksgiving. Punky Hollow can fix Miller Family Thanksgiving.
                </div>
                <br/>
                <div className="list-container">
                    <label>And remember the 4 F's of Thanksgiving:</label>
                    <ul>
                        <li>Food</li>
                        <li>Football</li>
                        <li>Family</li>
                        <li>Freedom: because there's nothing more American than spending Thanksgiving in Rural America</li>
                    </ul>
                </div>
            </div>
            <CustomFooter />
        </div>
    );
}

export default About;