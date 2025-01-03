import React from 'react';
import Title from "./Title"
import imgAbout from '../images/techno/Hand_coding-cuate.svg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend Junior",
        description: "En tant que développeur frontend junior, je suis passionné par la création d'interfaces web interactives et réactives, en utilisant des technologies comme HTML, CSS et JavaScript.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Curieuse et en apprentissage continu",
        description: "Je suis constamment à la recherche de nouvelles opportunités pour améliorer mes compétences, que ce soit en apprenant de nouvelles bibliothèques, frameworks ou meilleures pratiques.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div id="About"className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="md:h-screen flex justify-center items-center ">
                <div className="hidden md:block">
                    <img src={imgAbout} alt="" className=" w-96 object-cover rounded-xl"
                    />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default About