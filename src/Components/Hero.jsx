import { FaArrowRight, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import coverImage from '../assets/images/img6.jpg';

export default function About() {
    return (
        <section
            className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4"
            id="home"
        >
            <div className="w-full max-w-screen-xl px-6 lg:py-12">
                {/* Header and Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
                        <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                            Welcome, I'm <span className="text-teal-400 font-semibold">Sudipta Roy Ballave</span>
                        </h2>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                            Web Developer
                        </h1>
                        <p className="text-base text-gray-400 sm:text-lg leading-relaxed">
                            Passionate about crafting innovative web solutions, I specialize in React, Node.js, and MongoDB. My goal is to build intuitive, high-performance applications that elevate user experiences. Let's create something extraordinary.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
                            <a
                                href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#77B0AA] text-[#003C43] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] hover:scale-105 transition duration-300 flex items-center"
                            >
                                <FaDownload className="mr-2" /> Download CV
                            </a>
                            <a
                                href="#contact"
                                className="bg-[#77B0AA] text-[#003C43] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] hover:scale-105 transition duration-300 flex items-center"
                            >
                                Hire Me <FaArrowRight className="ml-2" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="text-base text-[#E3FEF7] sm:text-lg mt-6 space-y-3">
                            <p className="flex items-center justify-center lg:justify-start">
                                <FaEnvelope className="mr-2 text-[#77B0AA] text-2xl" /> ballavesudipta@gmail.com
                            </p>
                            <p className="flex items-center justify-center lg:justify-start">
                                <FaPhone className="mr-2 text-[#77B0AA] text-2xl" /> +8801580311924
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                            <a
                                href="https://www.facebook.com/ballave.sudipta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E3FEF7] hover:text-teal-400 transition duration-300"
                                aria-label="Facebook Profile"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sudipta-roy-ballave-4b9757259/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E3FEF7] hover:text-teal-400 transition duration-300"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/SudiptaRoy05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E3FEF7] hover:text-teal-400 transition duration-300"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full lg:w-1/3 mt-10 lg:mt-0">
                        <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                        <img
                            src={coverImage}
                            alt="Sudipta Roy Ballave"
                            className="relative w-full max-w-[400px] h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}