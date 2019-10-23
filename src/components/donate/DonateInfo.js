import React from 'react';
import '../../App.css';
import styled from "styled-components/macro";


function DonateInfo() {

    return(
        <div>
            <form className="link-btn-container-2" action="/home">
                <input type="submit" value="RETURN HOME" className="link-btn" />
            </form>
            <img className="background-img" src="./images/punky2.jpg" />
            <div className="donate-info-container">
                <h3>
                    CONTRIBUTE TO MAKE THANKSGIVING GREAT AGAIN. EVERY CENT COUNTS.
                </h3>
                <div className="red-info">
                    Donations can be made to the following address:
                </div>
                <div className="address">
                    PUNKY FOR THANKSGIVING <br />
                    5 PINE NEEDLES DR <br />
                    PITTSFORD, NY 14534
                </div>
                <div className="red-info-italics">
                    Please note that the Federal Elections Commission requires that we gather employer and occupation information from you, and without it we will be unable to accept your contribution
                </div>
                <div className="list-container">
                    <label>Please remember to include the following:</label>
                    <ul>
                        <li>Full name</li>
                        <li>Address</li>
                        <li>Employer and occupation information</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DonateInfo;