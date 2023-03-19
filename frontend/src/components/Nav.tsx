import React from 'react';
import { Link, To } from 'react-router-dom';
import logo from "../assets/anonymous-message.png";

interface Props {
    to: To;
    name: string;
}

function CustomLink({ to, name }: Props) {

    return (
        <div>
            <Link to={to}>{ name }</Link>
        </div>
    )
}

function Nav() {

    return (
        <nav className='flex justify-between items-center'>
            <Link to="/" className='flex items-center gap-1'>
                <img className='w-12 h-12' src={logo} alt="logo" />
                <h1 className='text-2xl'>Incognito.</h1>
            </Link>

            <div className='flex justify-between items-center gap-10'>
                <CustomLink to="/" name='Home'  />
                <CustomLink to="/contact" name='Contact' />
                <CustomLink to="/" name='Get started' />
            </div>
        </nav>
    );
}

export default Nav;