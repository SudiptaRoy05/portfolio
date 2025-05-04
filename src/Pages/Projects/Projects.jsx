import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Added react-icons for close button
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
            description: "ExploreEase is a travel platform designed to help users explore destinations, book tours, and connect with guides in Bangladesh. It offers secure authentication, Stripe payments, and role-specific features for tourists, guides, and admins.",
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
            description: "This project is a modern and interactive Hotel Booking Platform designed to provide users with a seamless experience for discovering and booking hotel rooms. It features secure authentication, a user-friendly interface, and robust functionality for a trustworthy and engaging experience.",
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
        <section
            className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4"
            id="projects"
        >
            <div className="w-full max-w-screen-xl px-6 lg:py-12">
                {/* Header */}
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                        My <span className="text-teal-400 font-semibold">Projects</span>
                    </h2>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                        Crafting Innovative Solutions
                    </h1>
                    <p className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
                        Explore the projects I’ve built, each a testament to my passion for solving real-world problems with technology. From travel platforms to language-learning apps, these projects showcase my skills in full-stack development and user-centric design.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative bg-gradient-to-br from-[#77B0AA] to-[#003C43] rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
                        >
                            <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                            <div className="relative">
                                <img
                                    src={project.images[0]}
                                    alt={project.name}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold text-[#E3FEF7]">
                                        {project.name}
                                    </h3>
                                    <span className="text-sm bg-[#77B0AA] text-[#003C43] px-3 py-1 rounded-full">
                                        {project.tagline}
                                    </span>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {project.description.substring(0, 60)}...
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="bg-[#E3FEF7] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#77B0AA] transition"
                                        >
                                            Details
                                        </button>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#77B0AA] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition"
                                        >
                                            Live Link
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#003C43] text-[#E3FE Scroll to topF7] px-4 py-2 rounded-lg font-semibold text-sm border border-[#E3FEF7] hover:bg-[#135D66] transition"
                                        >
                                            Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
                        <div className="bg-gradient-to-br from-[#002B2E] to-[#003C43] max-w-4xl w-full p-8 rounded-xl shadow-xl relative">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-[#E3FEF7] absolute top-4 right-6 hover:text-teal-400 transition"
                            >
                                <FaTimes size={24} />
                            </button>

                            {/* Image Gallery */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-4">
                                {selectedProject.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={selectedProject.name}
                                        className="object-cover rounded-lg h-full aspect-video"
                                    />
                                ))}
                            </div>

                            {/* Project Details */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4">
                                {selectedProject.name}
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg mt-2 leading-relaxed">
                                {selectedProject.description}
                            </p>
                            <p className="text-[#E3FEF7] mt-2 text-base sm:text-lg">
                                <strong>Challenges:</strong> {selectedProject.challenges}
                            </p>
                            <p className="text-[#E3FEF7] mt-2 text-base sm:text-lg">
                                <strong>Improvements:</strong> {selectedProject.improvements}
                            </p>

                            {/* Technologies Used */}
                            <h2 className="text-xl font-semibold text-gray-300 mt-4 tracking-wider">
                                Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block p-2 bg-[#77B0AA] text-[#003C43] rounded-3xl text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex justify-center gap-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#77B0AA] text-[#003C43] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition hover:scale-105"
                                >
                                    Live Link
                                </a>
                                <a
                                    href={selectedProject.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#003C43] text-[#E3FEF7] px-6 py-2 rounded-lg font-semibold text-sm border border-[#E3FEF7] hover:bg-[#135D66] transition hover:scale-105"
                                >
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}