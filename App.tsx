import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import { Certifications } from './components/Certifications.tsx';
import Projects from './components/Projects.tsx';
import ExecutionArc from './components/ExecutionArc.tsx';
import Learning from './components/Learning.tsx';
import Systems from './components/Systems.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WealthSprintSpotlight from './components/WealthSprintSpotlight.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        <About />

        {/* The Founder's Nexus - Primary Project Spotlight positioned after the Mindset thesis */}
        <div id="nexus" className="scroll-mt-24 mb-12">
          <WealthSprintSpotlight />
        </div>
        
        <Skills />
        <Certifications />
        <Projects />
        <ExecutionArc />
        <Learning />
        <Systems />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;