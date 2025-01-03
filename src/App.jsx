import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
        <Projects />

      
        {/* Formulaire de contact avec un ID pour le lien d'ancrage */}
        <div id="contact-form">
          <ContactForm />
        </div>

        <Footer />
      </div>
    </div>
  );
}


