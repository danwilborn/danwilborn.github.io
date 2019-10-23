import React, { useState } from 'react';

function JoinForm() {

    const [joined, setJoined] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            {joined ? 
            <div className="input-container">
                <h1>
                    THANK YOU FOR JOINING TEAM PUNKY HOLLOW
                </h1>
                <br/>
                <form action="/donate">
                    <input type="submit" value="CLICK HERE TO DONATE" className="submit-btn" />
                </form>
            </div>
            :
            <div className="input-container">
                <h1>
                JOIN TEAM PUNKY HOLLOW
                </h1>
                <form action="">
                    <input type="text" placeholder="First Name" className="input-name" required/> 
                    <input type="text" placeholder="Last Name" className="input-name" required/> <br/>
                    <input type="email" placeholder="Email" className="input-email" required/> <br/>
                    <input type="submit" value="JOIN THE MOVEMENT" className="submit-btn" onClick={() => setJoined(true)} />
                </form>
            </div> 
            }

        </div>
    );
}

export default JoinForm;