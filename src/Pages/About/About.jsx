import { motion } from "framer-motion";
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
                    <motion.h2
                        className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About <span className="text-teal-400 font-semibold">Me</span>
                    </motion.h2>
                    <motion.h1
                        className="text-4xl font-bold text-white sm:text-5xl leading-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Who I Am
                    </motion.h1>
                    <motion.p
                        className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Here's a glimpse into my journey, passions, and approach as a developer and collaborator.
                    </motion.p>
                </div>

                {/* Content */}
                <div className="lg:flex justify-between gap-8">
                    {/* Decorative Side Block with Image */}
                    <motion.div
                        className="relative w-full lg:w-1/3 mt-10 lg:mt-0 order-1 lg:order-0"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                        <div className="relative">
                            {/* Profile Image */}
                            <motion.img
                                src={image}
                                alt="Sudipta Roy Ballave"
                                className="w-full h-full object-cover rounded-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-2/3 space-y-6 order-0 lg:order-1"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.p
                            className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Hi! I'm Sudipta Roy Ballave, a Web Developer passionate about building scalable web applications. My journey began at university, where I dove into programming and mastered technologies like JavaScript, React.js, Node.js, MongoDB, and Next.js. I thrive on transforming complex problems into elegant, efficient solutions with clean code.
                        </motion.p>
                        <motion.p
                            className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            I specialize in crafting interactive, user-friendly websites with seamless UI and robust back-end integrations. The joy of seeing users engage with my creations drives me to prioritize quality and impactful solutions.
                        </motion.p>
                        <motion.p
                            className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            Beyond coding, I find inspiration in photography, playing football, and listening to music—activities that fuel my creativity. I’m always exploring new technologies, staying curious about the ever-evolving tech world.
                        </motion.p>
                        <motion.p
                            className="text-base text-[#E3FEF7] sm:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            Collaboration is at my core. I value learning from others and sharing knowledge, believing that growth happens when we challenge and inspire each other to create meaningful work.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
