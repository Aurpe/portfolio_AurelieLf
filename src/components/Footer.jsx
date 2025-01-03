import React from 'react';
import { Container } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="mr-2" />
        <p className="font-bold">
          Aurélie
          <span className="text-accent">LEFE</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

      <nav>
        
        <div className="grid grid-flow-col gap-4">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/aur%C3%A9liepereira/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M22.23 0h-20.46c-1.72 0-2.98 1.26-2.98 2.98v18.04c0 1.72 1.26 2.98 2.98 2.98h20.46c1.72 0 2.98-1.26 2.98-2.98v-18.04c0-1.72-1.26-2.98-2.98-2.98zM7.27 18.25h-3.39v-9.74h3.39v9.74zm-1.69-11.18c-1.08 0-1.69-.75-1.69-1.68 0-.95.61-1.69 1.69-1.69 1.07 0 1.69.74 1.69 1.69 0 .93-.62 1.68-1.69 1.68zm12.93 11.18h-3.39v-5.32c0-1.27-.23-2.37-1.39-2.37-1.1 0-1.61.75-1.87 1.46-.1.25-.12.61-.12.96v5.28h-3.39v-9.74h3.39v1.31c.45-.64 1.26-1.56 2.8-1.56 2.05 0 3.59 1.34 3.59 4.22v5.77z"/>
            </svg>
          </a>
          
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/aurelielefe_/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/Aurpe" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;



