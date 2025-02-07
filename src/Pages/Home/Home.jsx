import React from 'react';
import About from '../About/About';
import Hero from '../../Components/Hero';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function Home() {
    return (
        <div className="bg-[#135D66] min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}
