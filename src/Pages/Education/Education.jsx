export default function Education() {
    return (
        <div className="flex items-center justify-center py-12" id="education">
            <div className="px-6 py-6 lg:py-12 w-full max-w-screen-xl bg-[#003C43] rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-[#003C43] sm:text-4xl md:text-4xl mb-10">
                        <span className="bg-[#E3FEF7] py-3 px-5 rounded-full shadow-md inline-block">
                            Educational Qualification
                        </span>
                    </h2>
                    <p className="text-xl text-[#E3FEF7]">
                        My academic journey has been instrumental in shaping my technical skills and problem-solving abilities.
                        Studying Computer Science and Engineering has provided me with a strong foundation in programming, software development,
                        and modern web technologies. I am always eager to explore new advancements in the tech industry and apply them to real-world projects.
                    </p>
                </div>

                {/* Education Details */}
                <div className="text-center text-[#E3FEF7] space-y-4">
                    <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science & Engineering</h3>
                    <p className="text-lg">Stamford University Bangladesh</p>
                    <p className="text-lg">Graduated Successfully</p>
                </div>
            </div>
        </div>
    );
}
