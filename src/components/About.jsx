import React from 'react';
import Title from "./Title";
import img from '../images/photos/profile.webp';
import { LetterText, CalendarSync, Paintbrush } from 'lucide-react';

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Dev web avec de bonnes bases",
    icon: <LetterText className="text-accent scale-150" />
  },
  {
    id: 2,
    title: "Développeur Frontend",
    description: "Dev web avec de bonnes bases",
    icon: <CalendarSync className="text-accent scale-150" />
  },
  {
    id: 3,
    title: "Développeur Frontend",
    description: "Dev web avec de bonnes bases",
    icon: <Paintbrush className="text-accent scale-150" />
  } // N'oublie pas la virgule ici si tu ajoutes d'autres objets
];

const About = () => {
  return (
    <div className='bg-base-300 p-10 mb-10 md:mb-32'>
      <Title title="A propos" />
      <div className='md:h-screen flex justify-center items-center'>
        <div className='hidden md:block'>
          <img 
            src={img} 
            alt="Portrait_Aurelielf" 
            className='w-96 object-cover rounded-xl' 
          />
        </div>

        <div className='md:ml-4 space-y-4'>
          {aboutSections.map((section) => (
            <div 
              key={section.id} 
              className='flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl'
            >
              <div className='mb-2 md:mb-0'>
                {section.icon}
              </div>

              <div className='md:ml-4 text-center md:text-left'>
                <h2 className='text-xl font-bold mb-1'>
                  {section.title}
                </h2>
                <p className='text-sm'>
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
