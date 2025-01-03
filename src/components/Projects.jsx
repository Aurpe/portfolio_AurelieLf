import React from 'react';
import Title from "./Title";
import img1 from "../images/projects/booki/homepage_Booki.png";
import img2 from "../images/projects/ohmyfood/mockup_ohmyfood.webp";
import img3 from "../images/projects/kasa/mockup_kasa.webp";
import { Github, Video } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: 'Booki',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['HTML', 'CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img1,
  },
  {
    id: 2,
    title: 'Oh my Food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['HTML', 'SASS'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'Kasa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['REACT', 'SASS', 'JavaScript'],
    demoLink: '#',
    repoLink: '#',
    image: img3,
  },
];

const Projects = () => {
  return (
    <div className='mt-10'>
      <Title title='Mes projets' />
      <div className='grid md:grid-cols-3 gap-4'>
        {projectsData.map((project) => (
          <div key={project.id} className='bg-base-300 p-5 h-fit rounded-xl shadow-lg'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full rounded-xl h-56 object-cover'
            />
            <div>
              <h1 className='my-2 font-bold'>
                {project.title}
              </h1>
              <p className='text-sm'>
                {project.description}
              </p>
            </div>

            <div className='flex flex-wrap gap-2 my-3'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='badge badge-accent badge-sm'>
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex'>
              <a className='btn btn-accent w-2/3' href={project.demoLink}>
                Demo
                <Video className='w-4' />
              </a>

              <a className='btn btn-neutral w-1/3 ml-2' href={project.repoLink}>
                <Github className='w-4' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

