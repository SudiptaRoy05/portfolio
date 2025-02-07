import { useState } from "react";
import eimage1 from "../../assets/exploreEase/ExploreEase.jpg";
import eimage2 from "../../assets/exploreEase/ExploreEase1.jpg";
import eimage3 from "../../assets/exploreEase/ExploreEase2.jpg";
import himage1 from "../../assets/HotelBooking/hotel1.jpg";
import himage2 from "../../assets/HotelBooking/hotel2.jpg";
import himage3 from "../../assets/HotelBooking/hotel3.jpg";
import pimage1 from "../../assets/PhraseCraze/phaseCraze.jpg";
import pimage2 from "../../assets/PhraseCraze/PhaseCraze1.jpg";
import pimage3 from "../../assets/PhraseCraze/PhaseCraze2.jpg";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "ExploreEase",
            tagline: "Let's Travel",
            images: [eimage1, eimage2, eimage3],
            description: "ExploreEase is a travel platform designed to help users explore destinations, booking tours, and connecting with guides in Bangladesh. It offers secure authentication, Stripe payments, and role-specific features for tourists, guides, and admins.",
            technologies: ["React-Js", "Node-Js", "Express-Js", "MongoDB"],
            challenges: "Implementing secure role-based access control and seamless Stripe payment integration while maintaining a smooth user experience.",
            improvements: "Planning to add AI-powered recommendations for travelers based on preferences.",
            liveLink: "https://exploreease-c6a3f.web.app/",
            repoLink: "https://github.com/SudiptaRoy05/ExploreEase.git",
        },
        {
            id: 2,
            name: "Hotel Booking",
            tagline: "Book Your Room",
            images: [himage1, himage2, himage3],
            description: " This project is a modern and interactive Hotel Booking Platform designed to provide users with a seamless experience for discovering and booking hotel rooms. It features secure authentication, a user-friendly interface, and robust functionality for a trustworthy and engaging experience.",
            technologies: ["React-Js", "Node-Js", "Express-Js", "MongoDB"],
            challenges: "Implementing a seamless booking experience and preventing overbooking was complex.",
            improvements: "Looking to integrate a dynamic pricing algorithm based on demand.",
            liveLink: "https://book-your-hotel-18c2b.web.app/",
            repoLink: "https://github.com/SudiptaRoy05/HotelBooking-client.git",
        },
        {
            id: 3,
            name: "PhraseCraze",
            tagline: "Learn Languages",
            images: [pimage1, pimage2, pimage3],
            description: "PhraseCraze is a language-learning app that helps you build vocabulary in a fun and interactive way. Choose a language (other than Bengali or English) and start learning with engaging lessons and examples.",
            technologies: ["React-Js", "Node-Js", "Express-Js", "MongoDB"],
            challenges: "Building an engaging UI/UX for effective language learning was a challenge.",
            improvements: "Planning to add voice recognition for pronunciation practice.",
            liveLink: "https://phrase-craze.web.app/",
            repoLink: "https://github.com/SudiptaRoy05/phrase-craze-client.git",
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen py-8" id="projects">
            <div className="w-full max-w-screen-xl bg-[#002D32] rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-[#003C43] sm:text-4xl md:text-5xl mb-10">
                        <span className="bg-[#E3FEF7] py-3 px-5 rounded-full shadow-md inline-block">
                            Projects
                        </span>
                    </h2>
                    <p className="text-xl text-[#E3FEF7]">
                    Take a look at some of the exciting projects I’ve worked on! Each project is a unique challenge that helped me grow as a developer and allowed me to explore new technologies and problem-solving approaches. Whether it's building travel platforms, hotel booking systems, or interactive language-learning apps, I strive to create user-friendly, functional, and engaging applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#135D66] rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
                            <img src={project.images[0]} alt={project.name} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#E3FEF7]">{project.name}</h3>
                                <span className="text-sm bg-[#77B0AA] text-[#003C43] px-3 py-1 rounded-full">{project.tagline}</span>
                                <p className="text-[#E3FEF7] mt-2">{project.description.substring(0, 60)}...</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <button onClick={() => setSelectedProject(project)} className="bg-[#E3FEF7] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#77B0AA] transition">Details</button>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#77B0AA] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition">Live Link</a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-[#003C43] text-[#E3FEF7] px-4 py-2 rounded-lg font-semibold text-sm border border-[#E3FEF7] hover:bg-[#135D66] transition">Repository</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-[#002D32] max-w-4xl sm:w-11/12 w-full p-8 rounded-lg shadow-xl relative">
                        <button onClick={() => setSelectedProject(null)} className="text-[#E3FEF7] text-3xl absolute top-4 right-6 hover:text-red-500 transition">
                            &times;
                        </button>

                        {/* Image Gallery */}
                        <div className="overflow-x-auto grid grid-cols-2 md:grid-cols-3 gap-3 pb-4">
                            {selectedProject.images.map((img, index) => (
                                <img key={index} src={img} alt={selectedProject.name} className="object-cover rounded-lg h-full aspect-video" />
                            ))}
                        </div>

                        {/* Project Details */}
                        <h3 className="text-3xl font-bold text-[#E3FEF7] mt-4 md:text-4xl">{selectedProject.name}</h3>
                        <p className="text-[#E3FEF7] mt-2 leading-relaxed font-medium">{selectedProject.description}</p>
                        <p className="text-[#E3FEF7] mt-2 text-xl"><strong>Challenges:</strong> {selectedProject.challenges}</p>
                        <p className="text-[#E3FEF7] mt-2 text-xl"><strong>Improvements:</strong> {selectedProject.improvements}</p>

                        {/* Technologies Used */}
                        <h2 className="text-[#E3FEF7] my-3 text-xl font-semibold md:text-2xl">Technology:</h2>
                        <div className="gap-2 flex flex-wrap text-[#003C43]">
                            {selectedProject.technologies.map((tech, idx) => (
                                <span className="inline-block p-2 bg-[#E3FEF7] rounded-3xl text-sm font-medium" key={idx + 1}>{tech}</span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-center gap-4">
                            <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#77B0AA] text-[#003C43] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition hover:scale-105">
                                Live Link
                            </a>
                            <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="bg-[#003C43] text-[#E3FEF7] px-6 py-2.5 rounded-lg font-semibold text-sm border border-[#E3FEF7] hover:bg-[#135D66] transition hover:scale-105">
                                Repository
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
