import React, { useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link as ScrollLink} from "react-scroll";
import { Link as PageLink} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function NavBar() {
    const [nav, setNav] = useState(false);
    const {isAuthenticated} = useAuth0();
    const links =  [
        {
            id: 1,
            link: 'home',
            title: 'Home'
        }, {
            id: 2,
            link: 'projects',
            title: 'Projekte'
        }, {
            id: 3,
            link: 'aboutMe',
            title: 'Über mich'
        }
    ]

  return (
    <nav className="" id="navbar">
        <div className="flex flex-row justify-end items-center content-center fixed w-full h-16 pr-4 z-50 ">
            <ul className="hidden md:flex gap-3 text-normal">
                {links.map(({id, link, title}) => (
                    <li
                    key={id}
                    className='cursor-pointer text-2xl opacity-70 hover:opacity-100 duration-500 p-2  '>      
                            <ScrollLink
                                activeClass="underline opacity-100"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                            >
                                <PageLink to="/">
                                    {title}
                                </PageLink>
                            </ScrollLink>
                    </li>
                ))}
                {isAuthenticated ? <li className='cursor-pointer text-2xl opacity-70 hover:opacity-100 duration-500 p-2 '><PageLink to='/documents'>Documents</PageLink></li> : null }
                {isAuthenticated ?  <LogoutButton/> : <LoginButton/>    }
            </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-3 pt-3 text-secondary md:hidden z-10'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            {nav && (
                    <ul className="flex flex-col justify-center items-center 
                    absolute top-0 left-0 w-full h-screen 
                    bg-gradient-to-b from-primary to-secondary gap-20">
                        {links.map(({id, link, title}) => (
                            <li
                            key={id}
                            className='cursor-pointer text-5xl'>
                                <PageLink to="/">
                                    <ScrollLink
                                        activeClass="active"
                                        onClick={()=> setNav(!nav)}
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                    {title}
                                    </ScrollLink>
                                </PageLink>
                            </li>
                        ))}
                        {isAuthenticated ? <li className='cursor-pointer text-5xl'><PageLink to='/documents'>Documents</PageLink></li> : null }
                        {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
                    </ul>
                    
                )
            }

        </div>
    </nav>
  )
}

export default NavBar