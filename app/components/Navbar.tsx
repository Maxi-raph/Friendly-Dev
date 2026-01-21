import { useState, type ReactElement, type ReactEventHandler, type ReactNode } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({menuOpen,setMenuOpen}:{menuOpen:boolean, setMenuOpen:any}) => {
    const base = 'transition hover:text-blue-400 hover:bg-gray-600 p-1 md:hover:bg-transparent md:p-0 rounded-sm'
    const active ='text-blue-400 font-semibold hover:bg-gray-600 p-1 md:hover:bg-transparent md:p-0 rounded-sm'
    const showNav = (e:React.SyntheticEvent)=>{
        e.stopPropagation()
        if (menuOpen === false) {
            setMenuOpen(!menuOpen)
        } else {
            setMenuOpen(!menuOpen)
        }
    }

    return ( <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-blue-300'>
                <FaLaptopCode className="text-blue-400 text-xl"/>
                <span>The Friendly Developer</span>
            </NavLink>
            {/* Desktop Nav */}
            <div className='hidden md:flex items-center gap-6'>
                <div className="space-x-4 text-sm text-gray-300">
                    <NavLink to='/' className={({isActive})=>
                    isActive ? active : base}>Home</NavLink>
                    <NavLink to='/projects' className={({isActive})=>
                    isActive ? active : base}>Projects</NavLink>
                    <NavLink to='/blog' className={({isActive})=>
                    isActive ? active : base}>Blog</NavLink>
                    <NavLink to='/about' className={({isActive})=>
                    isActive ? active : base}>About</NavLink>
                    <NavLink to='/contact' className={({isActive})=>
                    isActive ? active : base}>Contact</NavLink>
                </div>
            </div>
            {/* Mobile Nav */}
            <div className="flex items-center md:hidden">
                <button  onClick={showNav} className="text-blue-400 cursor-pointer text-xl">
                    {menuOpen
                    ?<FaTimes />
                    :<FaBars />}
                </button>
             
                  {menuOpen 
                    ? <div className="md:hidden space-y-3 text-sm text-gray-300 flex flex-col text-center w-44 p-1 rounded-md bg-gray-800 border-t-10 border-gray-700 absolute z-40 right-1 top-16" onClick={(e:React.SyntheticEvent)=>e.stopPropagation()}>
                        <NavLink to='/' className={({isActive})=>
                        isActive ? active : base} onClick={showNav}>Home</NavLink>
                        <NavLink to='/projects' className={({isActive})=>
                        isActive ? active : base} onClick={showNav}>Projects</NavLink>
                        <NavLink to='/blog' className={({isActive})=>
                        isActive ? active : base} onClick={showNav}>Blog</NavLink>
                        <NavLink to='/about' className={({isActive})=>
                        isActive ? active : base} onClick={showNav}>About</NavLink>
                        <NavLink to='/contact' className={({isActive})=>
                        isActive ? active : base} onClick={showNav}>Contact</NavLink>
                      </div>
                    :''}
            </div> 
        </div>
    </nav> );
}
 
export default Navbar;