import React, { useState } from 'react';
import { AiOutlineUser, RiLockPasswordFill } from "react-icons/all";
import { Link } from 'react-router-dom';
import logo from "../assets/anonymous-message.png";
import Nav from '../components/Nav';

function Register() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [err, setErr] = useState("");

    const handleSubmit = () => {
        
    }

    return (
        <div>
            
            <Nav />

            <div className='flex flex-wrap justify-around items-center mt-20 px-32'>

                <div className='bg-navbg text-center sm:mt-0 mt-8 sm:w-96 h-[400px] flex flex-col rounded-lg p-6'>

                    <div className='flex items-center gap-1 justify-center'>
                        <img className='w-10 h-10' src={logo} alt="logo" />
                        <h2 className='text-2xl font-heading'>Register</h2>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-6'>

                        <div className='flex items-center my-4 bg-gray-900 py-1 rounded-md'>
                            <p className='h-[40px] text-center flex items-center justify-center p-2'><AiOutlineUser size={20} /></p>
                            <input value={userName} onChange={e => setUserName(e.target.value)} className='w-11/12 py-2 px-1 bg-gray-900' type="text" placeholder='Username' />
                        </div>


                        <div className='flex items-center my-4 bg-gray-900 py-1 rounded-md'>
                            <p className='h-[40px] text-center flex items-center justify-center p-2'><RiLockPasswordFill size={20} /></p>
                            <input value={password} onChange={e => setPassword(e.target.value)} className='w-11/12 py-2 px-1 bg-gray-900' type="password" placeholder='Password' />
                        </div>

                        {
                            err && (
                                <div className='text-red-300'>
                                    { err }
                                </div>
                            )
                        }

                        <div className='w-full flex items-center justify-center mt-6'>
                            <button disabled={loading} className={`${loading ? "" : "active:scale-75"} bg-dodger px-6 py-2 rounded-lg font-bold flex items-center justify-center drop-shadow-2xl duration-300`}>
                                {
                                    loading ? 
                                    <div className='animate-spin w-5 h-5 border-[2px] border-gray-600 rounded-full border-t-black mr-1'></div> : ""
                                } Register
                            </button>
                       </div>
                    </form>

                    <h3 className='mt-7'>Already have an account? <Link className='text-dodger' to="/login">Login</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default Register;