import React from 'react';
import Nav from '../components/Nav';
import header from "../assets/header.jpg";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <div className='custom-bg'>
                
                <Nav />

                <div className='sm:px-32 px-14 pt-10 pb-28 text-white'>

                    <div className='flex tablet:flex-col items-center gap-6 justify-between mt-10 flex-row sm:gap-0'>
                        <div>
                            <h3 className='capitalize text-6xl'>Stay Incognito and send secret messages.</h3>
                            <p className='text-lg mt-4'>
                                Send and receive compliments from friends. You can never know who sent you messages!
                            </p>
                        </div>

                        <img className='w-80 rounded-lg' src={header} alt="header" />
                    </div>

                    <div className='mt-32'>
                        <Link to="/register" className='bg-blue-400 text-gray-100 px-8 py-3 rounded-xl active:scale-95 duration-200 hover:drop-shadow-2xl hover:bg-blue-400 hover:text-gray-300'>
                            Get started
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default Home;