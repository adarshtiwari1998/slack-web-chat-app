import React from 'react';
import "./Message.css";

function Messages ( { message, timestamp, user, userImage}) {
    return (

    <div className="message">
        <img src={userImage} alt="userimage"/>
        <div className="message-info">
            <h4>
                {user}
                <span className="message-timestamp">{new Date (timestamp?.toDate()).toUTCString()}</span>
               </h4>
                <p>{message}</p>

        </div>
     </div>

    );
}
export default  Messages;
