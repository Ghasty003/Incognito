import React from 'react';
import AuthContext from '../contexts/AuthContext';

function Dashboard() {

    const { user } = React.useContext(AuthContext);

    return (
        <div className='flex flex-col items-center'>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>

                <div className='my-5'>
                    <h1> {user.username}'s Profile</h1>
                    <p>https://profile.com/ghasty</p>
                </div>

                <p>Share your profile link to get messages from your friend.</p>

            </div>

            <div className='bg-navbg w-[400px] text-center p-10 rounded-lg mt-20'>
                <h2>Messages</h2>

                <div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;