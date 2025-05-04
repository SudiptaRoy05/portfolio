import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    return (
        <section className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4" id="education">
            <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:py-12 w-full max-w-screen-xl">

                {/* Text Content */}
                <div className="text-center lg:text-left max-w-3xl space-y-6">
                    <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                        My <span className="text-teal-400 font-semibold">Educational Journey</span>
                    </h2>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">Computer Science Graduate</h1>
                    <p className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed">
                        My academic journey has been instrumental in shaping my technical skills and problem-solving abilities. Studying Computer Science and Engineering has provided me with a strong foundation in programming, software development, and modern web technologies. I am always eager to explore new advancements in the tech industry and apply them to real-world projects.
                    </p>

                    {/* Graduation Info */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6 text-[#E3FEF7]">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap size={30} className="text-[#77B0AA]" />
                            <div>
                                <h3 className="text-xl font-semibold">Bachelor of Science in CSE</h3>
                                <p className="text-md">Stamford University Bangladesh</p>
                                <p className="text-md">Graduated Successfully</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Side Block */}
                <div className="mt-10 lg:mt-0 relative">
                    <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                    <div className="relative w-[300px] sm:w-[400px] h-[250px] rounded-xl shadow-lg bg-gradient-to-br from-[#77B0AA] to-[#003C43] flex items-center justify-center transform -rotate-2">
                        <FaGraduationCap size={80} className="text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
