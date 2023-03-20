import React from 'react';
import { Navigate } from 'react-router-dom';

function SendMessage() {

    const query = new URLSearchParams(location.search);

    if (!query.has("user")) {
        return <Navigate to="/" />
    }

    const user = query.get("user");
    // console.log(user);
 
    return (
        <div>
            Send message
        </div>
    );
}

export default SendMessage;