import React from 'react';
import { AiFillDelete } from 'react-icons/all';
import MessageContext from '../contexts/MessageContext';
import { MessageProp } from '../utils/types';


function Message({ message, createdAt, _id }: MessageProp) {

    const { dispatch } = React.useContext(MessageContext);

    const date = new Date(createdAt);


    const handleClick = async () => {
        const res = await fetch("http://localhost:3000/message/" + _id, {
            method: "DELETE"
        });

        const json = await res.json();

        if (!res.ok) {
            console.log(json);
        }

        if (res.ok) {
            dispatch({ type: "DELETE_MESSAGE", payload: json });
        }
    }
    

    return (
        <div onClick={handleClick} className='bg-primary my-4 p-2 rounded'>
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