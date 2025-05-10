import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SECTIONS = ["home", "about", "skills", "education", "projects", "contact"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const dropdownRef = useRef();

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Smooth scroll function
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveSection(targetId);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
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
                    Sudipta
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {SECTIONS.map((section) => (
                        <Link
                            key={section}
                            to={`/#${section}`}
                            onClick={(e) => handleSmoothScroll(e, section)}
                            className={`text-[#E3FEF7] font-medium text-sm hover:text-teal-400 transition duration-300 ${activeSection === section ? "text-teal-400" : ""
                                }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#77B0AA] to-[#4A8D89] text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gradient-to-l hover:from-[#E3FEF7] hover:to-[#77B0AA] transition duration-300 transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
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
            <div
                ref={dropdownRef}
                className={`md:hidden bg-gradient-to-br from-[#002B2E] to-[#003C43] shadow-lg absolute w-full left-0 top-full transition-all duration-300 ${isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
                    }`}
                aria-hidden={!isOpen}
            >
                {isOpen && (
                    <>
                        {SECTIONS.map((section) => (
                            <Link
                                key={section}
                                to={`/#${section}`}
                                onClick={(e) => handleSmoothScroll(e, section)}
                                className={`block px-6 py-3 text-[#E3FEF7] font-medium text-sm hover:bg-[#77B0AA]/20 hover:text-teal-400 transition duration-300 ${activeSection === section ? "text-teal-400" : ""
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1GfTrWbn-e9r7xSwYV63sTDWKsdpijCds/view?usp=sharing"
                            rel="noopener noreferrer"
                            className="bg-teal-400 text-[#003C43] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-500 transition duration-300 transform hover:scale-105"
                        >
                            Download CV
                        </a>

                    </>
                )}
            </div>
        </nav>
    );
}
