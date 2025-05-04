import image from "../../assets/images/adi.jpg";

export default function About() {
    return (
        <section
            className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4"
            id="about"
        >
            <div className="w-full max-w-screen-xl px-6 lg:py-12">
                {/* Header */}
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                        About <span className="text-teal-400 font-semibold">Me</span>
                    </h2>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                        Who I Am
                    </h1>
                    <p className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
                        Here's a glimpse into my journey, passions, and approach as a developer and collaborator.
                    </p>
                </div>

                {/* Content */}
                <div className="lg:flex justify-between gap-8">
                    {/* Decorative Side Block with Image */}
                    <div className="relative w-full lg:w-1/3 mt-10 lg:mt-0 order-1 lg:order-0">
                        <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                        <div className="relative">
                            {/* Profile Image */}
                            <img
                                src={image}
                                alt="Sudipta Roy Ballave"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3 space-y-6 order-0 lg:order-1">
                        <p className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed">
                            Hi! I'm Sudipta Roy Ballave, a Web Developer passionate about building scalable web applications. My journey began at university, where I dove into programming and mastered technologies like JavaScript, React.js, Node.js, MongoDB, and Next.js. I thrive on transforming complex problems into elegant, efficient solutions with clean code.
                        </p>
                        <p className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed">
                            I specialize in crafting interactive, user-friendly websites with seamless UI and robust back-end integrations. The joy of seeing users engage with my creations drives me to prioritize quality and impactful solutions.
                        </p>
                        <p className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed">
                            Beyond coding, I find inspiration in photography, playing football, and listening to music—activities that fuel my creativity. I’m always exploring new technologies, staying curious about the ever-evolving tech world.
                        </p>
                        <p className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed">
                            Collaboration is at my core. I value learning from others and sharing knowledge, believing that growth happens when we challenge and inspire each other to create meaningful work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}