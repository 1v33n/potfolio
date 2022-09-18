import React from 'react'

const ProjectCard = (props) => {
const {title, description, demoLink, imgSrc, codeSrc, technologies} = props;
  return (
    <div className='flex flex-col justify-between items-center  rounded shadow-2xl border-normal border-2 p-4 max-w-md min-w-min'>
        <div className='content-center flex flex-col justify-between'>
          <h3 className='text-2xl p-4 text-normal text-center'>{title}</h3>
          <p className='text-justify'>{description}</p>
          <p className='font-semibold text-center'>
            {technologies?.map(e =>(`Technologien: ${e}`))}
          </p>
        </div>
        <a href={demoLink}>
            <img src={imgSrc} alt={`project ${title} screenshot`} className='rounded border-2 border-black'></img>
        </a>
        <div className='flex flex-row gap-1 mt-3'>
        <button className='bg-secondary hover:bg-neutral hover:text-normal text-white  font-bold py-2 px-4  rounded transition duration-150 ease-in-out'>
            <a href={demoLink}>demo</a>
        </button>          
        <button className='bg-transparent  hover:bg-secondary text-normal font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded transition duration-150 ease-in-out'>
            <a href={codeSrc}>CODE</a>
        </button>
        </div>
    </div>
  )
}

export default ProjectCard