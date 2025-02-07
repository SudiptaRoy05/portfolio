import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from 'react-icons/fa'; // Import Download icon
import coverImage from '../assets/images/img6.jpg';

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 lg:py-12 w-full max-w-screen-xl bg-[#003C43] rounded-lg shadow-lg transform transition duration-500 hover:scale-105">

                {/* Text Content */}
                <div className="text-center lg:text-left max-w-lg space-y-6">
                    <h2 className="text-3xl text-[#E3FEF7] font-semibold sm:text-4xl">
                        Hi! I'm <span className="text-[#f26326]">Sudipta Roy Ballave</span>
                    </h2>
                    <h1 className="text-3xl font-extrabold text-[#E3FEF7]">Web Developer</h1>
                    <p className="text-lg text-[#E3FEF7] sm:text-xl mt-4">
                        I'm a passionate web developer specializing in both front-end and back-end technologies. With experience in building scalable applications using React, Node.js, and MongoDB, I thrive on crafting seamless user experiences. Let's build something amazing together!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
                        <a
                            href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                            download
                            target="_blank"
                            className="bg-[#77B0AA] text-[#E3FEF7] px-6 py-3 rounded-lg font-semibold flex items-center transition duration-300 hover:bg-[#5E9C98]"
                        >
                            <FaDownload className="mr-2" /> Download CV
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-8 mt-6">
                        <a
                            href="https://www.linkedin.com/in/sudipta-roy-ballave-4b9757259/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E3FEF7] transition duration-300 transform hover:scale-125"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={35} />
                        </a>
                        <a
                            href="https://github.com/SudiptaRoy05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E3FEF7] transition duration-300 transform hover:scale-125"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={35} />
                        </a>
                        <a
                            href="https://www.facebook.com/ballave.sudipta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E3FEF7] transition duration-300 transform hover:scale-125"
                            aria-label="Facebook Profile"
                        >
                            <FaFacebook size={35} />
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-8 lg:mt-0 transform transition duration-300 hover:scale-105">
                    <img
                        src={coverImage}
                        alt="Sudipta Roy Ballave"
                        className="w-[400px] sm:w-[500px] rounded-lg shadow-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
