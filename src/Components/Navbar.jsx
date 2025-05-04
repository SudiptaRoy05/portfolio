import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        } else if (targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-gradient-to-r from-[#002B2E] to-[#003C43] shadow-lg sticky top-0 w-full z-50 backdrop-blur-sm">
            <div className="w-full max-w-screen-xl px-6 py-4 flex justify-between items-center mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-[#E3FEF7] tracking-tight hover:text-teal-400 transition duration-300"
                    onClick={(e) => handleSmoothScroll(e, "home")}
                >
                    <span className="inline-block">Sudipta</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {["home", "about", "skills", "education", "projects", "contact"].map((section) => (
                        <Link
                            key={section}
                            to={`/#${section}`}
                            onClick={(e) => handleSmoothScroll(e, section)}
                            className="text-[#E3FEF7] font-medium text-sm hover:text-teal-400 transition duration-300"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                        rel="noopener noreferrer"
                        className="bg-[#77B0AA] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] hover:scale-105 transition duration-300"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition duration-300 ${isOpen ? "text-teal-400" : "text-[#E3FEF7]"}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-br from-[#002B2E] to-[#003C43] shadow-lg absolute w-full left-0 top-full py-4">
                    {["home", "about", "skills", "education", "projects", "contact"].map((section) => (
                        <Link
                            key={section}
                            to={`/#${section}`}
                            onClick={(e) => handleSmoothScroll(e, section)}
                            className="block px-6 py-3 text-[#E3FEF7] font-medium text-sm hover:bg-[#77B0AA]/20 hover:text-teal-400 transition duration-300"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                        rel="noopener noreferrer"
                        className="block bg-[#77B0AA] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#E3FEF7] transition duration-300 text-center mt-3 mx-6"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
}