import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { BsSend } from "react-icons/all";
import img404 from "../assets/panda-404.png";

function SendMessage() {

    const query = new URLSearchParams(location.search);

    const [exist, setExist] = useState(false);
    const [message, setMessage] = useState("");

    if (!query.has("user")) {
        return <Navigate to="/" />
    }

    const user = query.get("user");

    useEffect(() => {
        async function getUser() {
            const res = await fetch("http://localhost:3000/auth?user=" + user);

            const json = await res.json();
            // console.log(json)

            setExist(json);
        }

        getUser();
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const res = await fetch("http://localhost:3000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message, receiver: user })
        });

        const json = await res.json();

        if (!res.ok) {
            console.log("Error", json);
        }

        if (res.ok) {
            console.log(json)
        }
    }
 
    return (
        <>
        <Nav />

            {
                exist ? (
                    <div className='flex flex-wrap justify-around items-center translate-y-1/2 px-32'>

                        <div className='bg-navbg text-center sm:mt-0 mt-8 sm:w-96 h-[250px] flex flex-col rounded-lg p-6'>

                            <h2 className='text-xl'>Send a secret message to { user }</h2>

                            <form onSubmit={handleSubmit} className='mt-6'>
                                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='border-none outline-none caret-dodger bg-primary w-60 pb-20 rounded' />
                                <br />

                                <button className='flex items-center justify-center gap-1 bg-dodger px-6 py-2 rounded-lg mt-4 relative left-1/2 -translate-x-1/2'>
                                <BsSend /> Send
                                </button>
                            </form>
                        </div>
                
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center gap-4 translate-y-1/2'>
                        <img className='w-60 h-52 rounded-md' src={img404} alt="404" />
                        <p>No such user with the username "{ user }".</p>
                        <p>Try checking for possible typographical error.</p>
                    </div>
                )
            }
        </>
    );
}

export default SendMessage;