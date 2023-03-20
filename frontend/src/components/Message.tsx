import React from 'react';
import { AiFillDelete } from 'react-icons/all';
import { MessageProp } from '../utils/types';


function Message({ message, createdAt }: MessageProp) {

    const date = new Date(createdAt);
    

    return (
        <div className='bg-primary my-4 p-2 rounded'>
            <div className='flex justify-between items-center '>
                <p>{ message }</p>
                <AiFillDelete className='text-red-600 text-xl cursor-pointer' />
            </div>

            { date.getHours() <= 24 ? <p className='text-start'>{ date.getHours() } hrs ago</p> :
                <p className='text-start'>{ date.toDateString() }</p>
            }
        </div>
    );
}

export default Message;