import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    // Smooth Scrolling Function
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu

        if (targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <nav className="bg-[#003C43] shadow-lg sticky top-0 w-full z-10 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-extrabold text-[#E3FEF7] tracking-wide relative"
                    onClick={(e) => handleSmoothScroll(e, "home")}
                >
                    <span className="relative inline-block animate-pulse">Sudipta</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a
                        href="/"
                        onClick={(e) => handleSmoothScroll(e, "home")}
                        className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300"
                    >
                        Home
                    </a>
                    <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300">About</a>
                    <a href="#skill" onClick={(e) => handleSmoothScroll(e, "skill")} className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300">Skills</a>
                    <a href="#education" onClick={(e) => handleSmoothScroll(e, "education")} className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300">Education</a>
                    <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300">Projects</a>
                    <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-[#E3FEF7] font-medium hover:text-[#135D66] transition duration-300">Contact</a>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                        className="bg-[#77B0AA] text-[#E3FEF7] px-4 py-2 rounded-lg font-semibold hover:bg-[#003C43] transition duration-300"
                        download
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden focus:outline-none transition duration-300 ${isOpen ? "text-[#77B0AA]" : "text-[#E3FEF7]"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-[#E3FEF7] shadow-md absolute w-full left-0 top-full py-4">
                    <a href="/" onClick={(e) => handleSmoothScroll(e, "home")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">Home</a>
                    <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">About</a>
                    <a href="#skill" onClick={(e) => handleSmoothScroll(e, "skill")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">Skills</a>
                    <a href="#education" onClick={(e) => handleSmoothScroll(e, "education")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">Education</a>
                    <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">Projects</a>
                    <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="block px-6 py-3 text-[#003C43] font-medium hover:bg-[#77B0AA] transition duration-300">Contact</a>
                    <a
                        href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                        className="block bg-[#77B0AA] text-[#E3FEF7] px-4 py-2 rounded-lg font-semibold hover:bg-[#003C43] transition duration-300 text-center mt-3"
                        download
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
}
