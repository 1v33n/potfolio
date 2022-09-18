import React from 'react'
import SliderComponent from './SliderComponent'

function AboutMe() {
  return (
    <div className='flex flex-col justify-center items-center px-4' >
        <h1 className='text-3xl font-press-start pb-8'>Über mich</h1>
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <div className='max-w-xl text-xl'>
                <p>
                Ich heisse Ivan Horvath, bin 19 Jahre jung, und bin ein leidenschaftlicher Informatiker. 
                Alles was mit Computern zu tun hat, hat mich seit Kindheit fasziniert. Wenn ich nicht am
                Programmieren bin, baue ich Tastaturen, spiele Videogames oder treibe Sport. Meistens ist 
                es das Gewichtheben, ich mache es ziemlich seriös, ich trainiere 4-6-mal pro Woche und nehme 2-4-mal pro Jahr an Wettkämpfen teil.
                </p>
            </div>
            <SliderComponent/>
        </div>
    </div>
  )
}

export default AboutMe