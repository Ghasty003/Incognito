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
    const span = React.useRef<HTMLDivElement>(null!);

    const animationOptions = {
        iterations: 1,
        duration: 300
    }

    const navBarOpen = [
        { right: "-100%", opacity: 0 },
        { right: 0, opacity: 1}
    ]
    
    const navBarClose = [
        { right: 0, opacity: 1},
        { right: "-100%", opacity: 0 },
    ]
    

    const handleOpen = () => {
        nav.current.animate(navBarOpen, animationOptions);
        nav.current.classList.replace("-right-[100%]", "right-0");
        setIsOpen(true);
    }

    const handleClose = () => {
        nav.current.animate(navBarClose, animationOptions);
        nav.current.classList.replace("right-0", "-right-[100%]");
        setIsOpen(false);
    }


    // React.useEffect(() => {
    //     span.current.addEventListener("click", () => console.log("cliclked"))
    // }, [span]);

    document.addEventListener("click", (e) => {
        if (!nav.current.classList.contains("-right-[100%]") && !span.current.contains(e.target as HTMLElement)) {
            nav.current.animate(navBarClose, animationOptions);
            nav.current.classList.replace("right-0", "-right-[100%]");
            setIsOpen(false);
        }
    })

    return (
        <nav className={`flex justify-between px-12 z-50 sm:px-32 py-6 bg-navbg sticky top-0 items-center }`}>
            <Link to="/" className='flex items-center gap-1'>
                <img className='w-12 h-12' src={logo} alt="logo" />
                <h1 className='text-2xl'>Incognito.</h1>
            </Link>

            <div ref={nav} className='flex sm:flex-row sm:bg-transparent sm:relative sm:right-0 sm:w-fit sm:gap-10 justify-center items-center bg-navbgSm h-full fixed top-0 -right-[100%] w-[280px] drop-shadow-2xl gap-14 flex-col'>
                <CustomLink to="/" name='Home'  />
                <CustomLink to="/login" name='Login' />
                <CustomLink to="/register" name='Register' />
            </div>

            {
                isOpen ? <RiMenuUnfoldLine onClick={handleClose} className='sm:hidden cursor-pointer relative z-[100] text-2xl' />  :
                <div ref={span} ><RiMenuFoldLine onClick={handleOpen} className='sm:hidden cursor-pointer text-2xl' /></div>
            }
        </nav>
    );
}

export default Nav;