import React from 'react'
import { Link} from "react-scroll";
import LoginButton from './LoginButton';

function Home() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center content-center h-full z-10'>
        <div className='flex flex-col justify-center items-center content-center gap-7'>
            <h1 className='text-5xl text-normal font-bold pb-4 max-w-4xl font-press-start text-center'>Ivan Horvath  </h1>
            <p className='pl-3 max-w-3xl text-3xl text-normal pb-4 font-kanit'>Junior Software Developer</p>
            <div className="flex space-x-20">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-neutral text-normal font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-secondary hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >                    
                    <Link
                        activeClass="underline"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                    Projekte
                    </Link>
                </button>
                <LoginButton/>
            </div>
        </div>
    </div>
  )
}

export default Home