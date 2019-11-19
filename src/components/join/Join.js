import React, { useState } from 'react';

function JoinForm() {

    const [joined, setJoined] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = () => {
        setJoined(true);
        //sendEmails(firstName, lastName, email);
    };

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
                <form>
                    <input type="text" placeholder="First Name" name="First Name" className="input-name" value={firstName} onChange={e => setFirstName(e.target.value)} required/> 
                    <input type="text" placeholder="Last Name" name="Last Name" className="input-name" value={lastName} onChange={e => setLastName(e.target.value)} required/> <br/>
                    <input type="email" placeholder="Email" name="Email" className="input-email" value={email} onChange={e => setEmail(e.target.value)} required/> <br/>
                    <input type="submit" value="JOIN THE MOVEMENT" name="Email" className="submit-btn" onClick={() => handleClick()} />
                </form>
            </div> 
            }

        </div>
    );
}

export default JoinForm;