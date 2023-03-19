import React from 'react';
import { MessageProp } from '../utils/types';


function Message({ message }: MessageProp) {
    
    return (
        <div className='bg-primary my-4 p-2 rounded'>
            { message }
        </div>
    );
}

export default Message;