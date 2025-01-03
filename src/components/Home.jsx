import React from 'react';
import {Mail} from "lucide-react";
import img from '../images/photos/profile.webp'
import { Link } from 'react-router-dom';



const Home = () => {
  return(
    <div className='flex flex-col-reverse md:flex-row justify-center items-center
     md:my-32 my-10'>

      <div className='flex flex-col'>
        <h1 className='text-5xl md:text-6xl
        font-bold text-center md:text-left
         mt-4 md:mt-0'>
          Bonjour , <br /> je suis {" "}
          <span className='text-accent'> Aurélie Lefe</span>
        </h1>
        <p className='my-4 text-md text-center
        md:text-left'>
        Passionnée par la créativité et les défis, j’ai entrepris une reconversion dans le développement web pour me spécialiser dans le front-end. <br />

        Diplômée d’un bac+4 en développement commercial et marketing, j’ai passé près de 10 ans à manager des équipes, développant des compétences clés : organisation, gestion des priorités, résolution de problèmes et communication claire.< br />
        Curieuse des nouvelles technologies et animée par un besoin constant d’apprendre, je conçois des solutions digitales modernes et performantes. <br />
        Je maîtrise HTML, CSS, Sass, JavaScript, React, et intègre une approche centrée sur l’UI/UX design pour offrir des interfaces intuitives et engageantes, pensées avant tout pour l’utilisateur.
        </p>
        <a href="#contact-form" className="btn btn-accent md:w-fit">
           <Mail className="w-5 h-5" />
           Contactez-moi
        </a>
      </div>
      
      <div className='md:ml-60'>
        <img src= {img} alt="Portrait_Aurelielf" className='w-96 h-96 object-cover
        border-8 border-accent shadow-xl'
        style={{
          borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
        }}
        />

      </div>
      

    </div>
  )
}

export default Home