import React from 'react';
import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <a
        href="#"
        className="flex items-center font-bold text-3xl md:text-3xl"
      >
        <Container className="mr-2" />
        Aurélie
        <span className="text-accent">DEV</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            À propos
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes expériences
          </a>
        </li>

        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
