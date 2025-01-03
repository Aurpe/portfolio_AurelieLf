import React from 'react';
import Title from "./Title";
import img1 from "../images/projects/booki/mockup.booki.jpeg";
import img2 from "../images/projects/ohmyfood/mockup_ohmyfood.webp";
import img3 from "../images/projects/kasa/mockup_kasa.webp";
import { Github, Video } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: 'Booki',
    description: "Création de la page d'accueil d'une agence de voyage en HTML et CSS, basée sur des maquettes Figma pour mobile, tablette et desktop. Le projet se concentre sur l'intégration d'un design responsive, l'adaptation de la mise en page et la création de composants d'interface. Il permet de développer des compétences en design web responsive et en structuration du code.",
    technologies: ['HTML', 'CSS'],
    demoLink: 'https://gilded-axolotl-9a09f8.netlify.app/',
    repoLink: 'https://github.com/Aurpe/p3_Booki',
    image: img1,
  },
  {
    id: 2,
    title: 'Oh my Food',
    description: "Création de l'interface mobile-first d'un site pour une start-up en utilisant Sass, avec des animations CSS pour enrichir l'expérience utilisateur. Le projet inclut la gestion de version avec Git et GitHub.Vous apprendrez à intégrer des maquettes adaptatives, à structurer le CSS de manière optimale avec Sass, et à utiliser des animations pour rendre l'interface plus interactive.",
    technologies: ['HTML', 'SASS'],
    demoLink: 'https://calm-macaron-002c49.netlify.app/',
    repoLink: 'https://github.com/Aurpe/OHMYFOOD',
    image: img2,
  },
  {
    id: 3,
    title: 'Kasa',
    description:"Implémentation du front-end d'une application avec React et React Router, en créant des composants réactifs et une navigation fluide entre les pages. Le projet utilise des données simulées via un fichier JSON et Vite pour la configuration de l'application. L'objectif est de maîtriser React, React Router, et l'optimisation de l'expérience utilisateur avec SASS et des animations CSS.",
    technologies: ['REACT', 'SASS', 'JavaScript'],
    demoLink: '#',
    repoLink: 'https://github.com/Aurpe/Kasa',
    image: img3,
  },
];

const Projects = () => {
  return (
    <div id="Projects" className='mt-10'>
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

