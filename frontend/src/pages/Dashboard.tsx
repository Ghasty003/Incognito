import React from 'react';
import { AiOutlineCopy, MdDone } from "react-icons/all";
import Message from '../components/Message';
import AuthContext from '../contexts/AuthContext';


function Dashboard() {

    const { user } = React.useContext(AuthContext);

    const [copied, setCopied] = React.useState(false);

    const [messages, setMessages] = React.useState<Array<string>>([]);

    const webUrl = location.host;
    const userProfile = `${webUrl}?user=${user?.username}`;


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

    return (
        <div className='flex flex-col items-center'>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>

                <div className='my-5'>
                    <h1> {user?.username}'s Profile</h1>
                    
                    <div className='flex justify-center gap-2 items-center'>
                        <p>{ userProfile }</p>
                        {
                            copied ? <MdDone color='green' /> :
                            <AiOutlineCopy title='copy' cursor="pointer" onClick={handleCopy} />
                        }
                    </div>
                </div>

                <p>Share your profile link to get messages from your friends.</p>

            </div>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>
                <h2>Messages</h2>

                {
                    messages.map(message => (
                        <Message />
                    ))
                }
            </div>

        </div>
    );
}

export default Dashboard;