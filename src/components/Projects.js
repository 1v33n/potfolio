import React from 'react'
import ProjectCard from './ProjectCard'
import imsgames from '../assets/img/imsgames.png'
import openworkout from '../assets/img/openworkout.png'
import portfolio from '../assets/img/portfolio.png'
import immolux from '../assets/img/immolux.png'

function Projects() {
const projects = [
    {
        id: 1,
        title : 'imsgames.fun',
        description: 'In  imsgames Projekt geht es darum, von IMS Schülern programmierte Spiele zu veröffentlichen, damit man seine geleistete Arbeit präsentieren kann.',
        demoLink: 'https://imsgames.fun',
        codeSrc: 'https://github.com/1v33n/imsgames',
        imgSrc: imsgames,
        technologies: [
            'HTML5',
            'CSS3',
            'PHP',
            'MySQL',
            'Apache2',
            'phpMyAdmin'
        ]
    },
    {
        id: 2,
        title : 'OpenWorkout',
        description: 'Bei dieser App handelt es sich um eine App, wo man täglich nach seinem Training seine Trainingsroutine eingeben kann. Also was für Übungen man gemacht hat, wie viel Gewicht man benutzt hat und wie viele Wiederholungen man pro Workout gemacht hat. Diese Workouts kann man dann später in einer Liste als Tagebuch anschauen. Für die verschiedenen Übungen, die man gemacht hat, eine Statistik erstellen lassen, wo man gut erkennen kann, ob man über die letzten Trainings Fortschritt gemacht hat.',
        demoLink: '#',
        codeSrc: 'https://github.com/1v33n/open-workout',
        imgSrc: openworkout,
        technologies: [
            'Android studio',
            'Java',
            'Room DB',
            'AnyCharts Library'
        ]
    },
    {
        id: 3,
        title : 'immolux',
        description: 'Ein Marketplace für Immobilien. Man kann die, von anderen erstellte Angebote anschauen. Nach einer Registration kann man auch eigene Angebote erstellen, ändern und löschen',
        demoLink: 'immolux.tk',
        codeSrc: '#',
        imgSrc: immolux,
        technologies: [
            'Bootstap',
            'PHP',
            'MySQL'
        ]
    },
    {
        id: 5,
        title : 'ivanhorvath.dev',
        description: 'Portfolio-Website, wo ich meine Projekte sowie sonstige Informationen anzeige. Die Website ist mit ReactJs Framework und TailwindCSS erstellt, diese Technologien habe ich ausserhalb von der Schule gelernt ',
        demoLink: 'ivanhorvath.dev',
        codeSrc: '#',
        imgSrc: portfolio,
        technologies: [
            'ReactJS',
            'Tailwind',
            'Bootstap',
            'Auth0',
        ]
    },
]
  return (
    <div className='flex flex-col justify-center items-center p-4 pb-11 z-10 '>
        <h1 className='text-3xl font-press-start text-normal pb-8'>Meine Projekte</h1>
        <div className='flex flex-row flex-wrap gap-4 justify-center'>
            {projects.map(({id, title, description, demoLink, imgSrc, codeSrc, technologies}) => (
                <ProjectCard
                key={id}
                title = {title}
                description = {description}
                demoLink = {demoLink}
                imgSrc = {imgSrc}
                codeSrc = {codeSrc}
                technologies = {[technologies]}
                />
            ))}
        </div>
    </div>

  )
}

export default Projects