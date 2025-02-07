import { FaArrowRight, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex items-center justify-center py-12" id="about">
            <div className="px-6 py-6 lg:py-12 w-full max-w-screen-xl bg-[#003C43] rounded-lg shadow-lg transform transition duration-500 hover:scale-105">

                {/* Text Content */}
                <div className="w-full space-y-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-[#003C43]">
                            <span className="bg-[#E3FEF7] py-3 px-5 rounded-full shadow-md inline-block">About</span>
                        </h2>
                    </div>

                    <p className="text-lg text-[#E3FEF7] sm:text-xl mt-4">
                        Hi! I'm Sudipta Roy Ballave, a Web Developer passionate about building scalable web applications. I started learning programming at university and grew into technologies like JavaScript, React.js, Node.js, MongoDB, and Next.js. I enjoy turning complex problems into simple, efficient solutions through clean code.
                    </p>

                    <p className="text-lg text-[#E3FEF7] sm:text-xl mt-4">
                        I specialize in creating interactive, user-friendly websites with smooth UIs and seamless back-end integrations. The satisfaction of seeing users interact with something I built motivates me to focus on quality and real-world impact.
                    </p>
                    <p className="text-lg text-[#E3FEF7] sm:text-xl mt-4">
                        Outside of coding, I find joy in photography, playing football, and immersing myself in music—activities that keep me energized and inspired. When I’m not coding, I enjoy exploring new technologies and staying curious about the ever-evolving tech landscape.
                    </p>

                    <p className="text-lg text-[#E3FEF7] sm:text-xl mt-4">
                        I deeply value collaboration and embrace every opportunity to learn and share knowledge. I believe that growth thrives in an environment of like-minded individuals, where we challenge each other to reach new heights. Together, we create impactful work and inspire progress.
                    </p>

                    {/* Contact Info */}
                    <div className="text-lg text-[#E3FEF7] sm:text-xl mt-6 space-y-2">
                        <p className="flex items-center">
                            <FaEnvelope className="mr-2 text-[#E3FEF7]" /> ballavesudipta@gmail.com
                        </p>
                        <p className="flex items-center">
                            <FaPhone className="mr-2 text-[#E3FEF7]" /> +8801580311924
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6 mt-6">
                        <a href="https://www.facebook.com/ballave.sudipta/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/sudipta-roy-ballave-4b9757259/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" />
                        </a>
                        <a href="https://github.com/SudiptaRoy05" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-[#E3FEF7] text-2xl hover:text-[#003C43] transition duration-300" />
                        </a>
                    </div>

                    {/* Hire Me Button */}
                    <button className="btn bg-[#77B0AA] text-[#E3FEF7] px-5 py-2 rounded-2xl font-semibold flex items-center mt-6">
                        Hire Me <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}  
