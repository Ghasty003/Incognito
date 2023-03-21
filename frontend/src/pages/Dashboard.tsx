import React, { useEffect } from 'react';
import { AiOutlineCopy, MdDone } from "react-icons/all";
import Message from '../components/Message';
import AuthContext from '../contexts/AuthContext';
import MessageContext from '../contexts/MessageContext';


function Dashboard() {

    const { user, dispatch: authDispatch } = React.useContext(AuthContext);

    const [copied, setCopied] = React.useState(false);

    const { messages, dispatch } = React.useContext(MessageContext);

    const webUrl = location.host;
    const userProfile = `${webUrl}/send?user=${user?.username}`;


    const handleCopy = async () => {
        const permission = await navigator.permissions.query({ name: "clipboard-write" as PermissionName});

        if (permission.state === "granted") {
            await navigator.clipboard.writeText(userProfile);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }


    useEffect(() => {
        async function getMessages() {
            const response = await fetch("http://localhost:3000/message?user=" + user?.username);

            const json = await response.json();


            if (!response.ok) {
                console.log("Error", json);
            }

            if (response.ok) {
                dispatch({ type: 'FETCH_MESSAGE', payload: json});
            }
        }

        getMessages();
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT" })
    }


    return (
        <div className='flex flex-col items-center mb-5'>

            <div className='flex justify-end items-center w-full py-5 px-20'>
                <button onClick={handleLogout} className='bg-dodger rounded-lg px-4 py-2 drop-shadow-2xl duration-200 active:scale-95'>Logout</button>
            </div>

            <div className='bg-navbg w-[320px] sm:w-[400px] text-center p-5 sm:p-10 rounded-lg mt-20'>

                <div className='my-5'>
                    <h1 className='text-xl'> {user?.username}'s Profile</h1>
                    
                    <div className='flex justify-center gap-2 items-center'>
                        <p className='text-sm sm:text-base mt-2'>{ userProfile }</p>
                        {
                            copied ? <MdDone color='green' size={20} /> :
                            <AiOutlineCopy size={20} title='copy' cursor="pointer" onClick={handleCopy} />
                        }
                    </div>
                </div>

                <p>Share your profile link to get messages from your friends.</p>

            </div>

            <div className='bg-navbg w-[320px] sm:w-[400px] text-center p-10 rounded-lg mt-20'>
                <h2>Messages ({ messages.length })</h2>

                {
                    messages.length > 0 ? messages.map((message) => (
                        <Message key={message._id} _id={message._id} message={message.message} createdAt={message.createdAt} />
                    )) : <p className='italic mt-3'>You have no message at the moment.</p>
                }
            </div>

        </div>
    );
}

export default Dashboard;