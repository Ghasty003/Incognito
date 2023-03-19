import React from 'react';
import { Link, To, useResolvedPath, useMatch } from 'react-router-dom';
import logo from "../assets/anonymous-message.png";

interface Props {
    to: To;
    name: string;
}

function CustomLink({ to, name }: Props) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    

    return (
        <div className="group active-parent">
            <Link to={to}>{ name }</Link>
            {isActive && <div className='bg-[#1e90ff] h-1 rounded'></div>}
            {!isActive && <div className='bg-[#1e90ff] h-1 rounded group-hover:w-[inherit] transition-all duration-[1s] w-0'></div>}
        </div>
    )
}

function Nav() {

    return (
        <nav className={`flex justify-between px-32 py-6 bg-navbg sticky top-0 items-center }`}>
            <Link to="/" className='flex items-center gap-1'>
                <img className='w-12 h-12' src={logo} alt="logo" />
                <h1 className='text-2xl'>Incognito.</h1>
            </Link>

            <div className='flex justify-between items-center gap-10'>
                <CustomLink to="/" name='Home'  />
                <CustomLink to="/login" name='Login' />
                <CustomLink to="/register" name='Register' />
            </div>
        </nav>
    );
}

export default Nav;