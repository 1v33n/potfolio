import React from 'react'
import Cursor from 'react-special-cursor'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import particleConf from '../particlesjs-config.json'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Documents from '../components/Documents'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router'

function DocumentsPage() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    const {isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
    return (     
    <> 
        <>
            <Particles id="tsparticles" init={particlesInit} options={particleConf} />
                <Cursor>
                    <React.Fragment>
                        <NavBar />
                            {isAuthenticated ? 
                                <Section comp={<Documents />} bg='bg-primary' id='home' />
                                :<Section comp={<h1 className='text-5xl'>Not Authenticated</h1>} bg='bg-primary' id='home'/>
                            }
                        
                        <Footer />
                    </React.Fragment>
                </Cursor>
            </>
    </>
    )
}

export default DocumentsPage