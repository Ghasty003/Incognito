import React from 'react';
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/all";
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

    const [isOpen, setIsOpen] = React.useState(false);
    const nav = React.useRef<HTMLDivElement>(null!);

    const handleOpen = () => {
        nav.current.classList.replace("hidden", "flex");
        setIsOpen(true);
    }

    const handleClose = () => {
        nav.current.classList.replace("flex", "hidden");
        setIsOpen(false);
    }


    React.useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!nav.current.classList.contains("hidden") && !(e.target as HTMLElement).classList.contains("flag")) {
                nav.current.classList.replace("flex", "hidden");
                setIsOpen(false);
            }
        })
    }, []);

    return (
        <nav className={`flex justify-between px-12 sm:px-32 py-6 bg-navbg sticky top-0 items-center }`}>
            <Link to="/" className='flex items-center gap-1'>
                <img className='w-12 h-12' src={logo} alt="logo" />
                <h1 className='text-2xl'>Incognito.</h1>
            </Link>

            <div ref={nav} className='sm:flex duration-500  hidden sm:flex-row sm:bg-transparent sm:relative sm:w-fit sm:gap-10 justify-center items-center bg-navbg z-50 h-full fixed top-0 right-0 w-1/2 gap-14 flex-col'>
                <CustomLink to="/" name='Home'  />
                <CustomLink to="/login" name='Login' />
                <CustomLink to="/register" name='Register' />
            </div>

            {
                isOpen ? <RiMenuUnfoldLine onClick={handleClose} className='cursor-pointer relative z-[100] text-2xl' />  :
                 <RiMenuFoldLine onClick={handleOpen} className='sm:hidden cursor-pointer text-2xl flag' />
            }
        </nav>
    );
}

export default Nav;