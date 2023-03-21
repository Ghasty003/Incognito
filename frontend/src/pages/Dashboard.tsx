import React, { useEffect } from 'react';
import { AiOutlineCopy, MdDone } from "react-icons/all";
import Message from '../components/Message';
import AuthContext from '../contexts/AuthContext';
import { MessageProp } from '../utils/types';


function Dashboard() {

    const { user } = React.useContext(AuthContext);

    const [copied, setCopied] = React.useState(false);

    const [messages, setMessages] = React.useState<Array<MessageProp>>([]);

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
                setMessages(json);
            }
        }

        getMessages();
    }, []);

    return (
        <div className='flex flex-col items-center mb-5'>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>

                <div className='my-5'>
                    <h1 className='text-xl'> {user?.username}'s Profile</h1>
                    
                    <div className='flex justify-center gap-2 items-center'>
                        <p>{ userProfile }</p>
                        {
                            copied ? <MdDone color='green' size={20} /> :
                            <AiOutlineCopy size={20} title='copy' cursor="pointer" onClick={handleCopy} />
                        }
                    </div>
                </div>

                <p>Share your profile link to get messages from your friends.</p>

            </div>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>
                <h2>Messages ({ messages.length })</h2>

                {
                    messages.map((message) => (
                        <Message key={message._id} message={message.message} createdAt={message.createdAt} />
                    ))
                }
            </div>

        </div>
    );
}

export default Dashboard;