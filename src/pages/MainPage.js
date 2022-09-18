import React from 'react'
import Cursor from 'react-special-cursor'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Home from '../components/Home'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import particleConf from '../particlesjs-config.json'
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";


function MainPage() {
    const particlesInit = useCallback(async (engine) => { await loadFull(engine)}, []);
    const particlesLoaded = useCallback(async (container) => { await console.log(container)}, []);
    return (
        <div>
            <Particles id="tsparticles" init={particlesInit} options={particleConf} loaded={particlesLoaded}/>
            <Cursor>
                <React.Fragment>
                    <NavBar/>
                    <Section comp={<Home/>} bg='bg-primary' id='home'/>
                    <Section comp={<Projects/>} bg='bg-primary' id='projects'/>
                    <Section comp={<AboutMe/>} bg='bg-primary' id='aboutMe'/>
                    <Footer/>
                </React.Fragment>
            </Cursor> 
        </div>    
        )
}

export default MainPage