import css from '../../assets/techImg/css.png';
import express from '../../assets/techImg/express.png';
import firebase from '../../assets/techImg/firebase.png';
import html from '../../assets/techImg/html.png';
import js from '../../assets/techImg/js.png';
import jwt from '../../assets/techImg/jwt.png';
import mongodb from '../../assets/techImg/mongodb.png';
import next from '../../assets/techImg/next.png';
import node from '../../assets/techImg/node.png';
import react from '../../assets/techImg/react.png';
import tailwind from '../../assets/techImg/tailwind.png';
import bootstrap from '../../assets/techImg/bootstrap.png';
import figma from '../../assets/techImg/figma.png';
import visualStudioCode from '../../assets/techImg/visualStudioCode.png';
import git from '../../assets/techImg/git.png';
import github from '../../assets/techImg/github.png';

export default function Skills() {
    const skills = {
        "Frontend": [
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: js, name: "JavaScript" },
            { img: react, name: "React" },
            { img: next, name: "Next.js" },
            { img: tailwind, name: "Tailwind CSS" },
            { img: bootstrap, name: "Bootstrap" }
        ],
        "Backend": [
            { img: node, name: "Node.js" },
            { img: express, name: "Express.js" },
            { img: mongodb, name: "MongoDB" },
            { img: firebase, name: "Firebase" },
            { img: jwt, name: "JWT" }
        ],
        "Tools": [
            { img: git, name: "Git" },
            { img: github, name: "GitHub" },
            { img: figma, name: "Figma" },
            { img: visualStudioCode, name: "VS Code" }
        ]
    };

    return (
        <section
            className="flex items-center justify-center bg-gradient-to-br from-[#002B2E] via-[#003C43] to-[#002B2E] py-20 px-4"
            id="skills"
        >
            <div className="w-full max-w-screen-xl px-6 lg:py-12">
                {/* Header */}
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-2xl text-gray-300 font-light sm:text-3xl tracking-wider">
                        My <span className="text-teal-400 font-semibold">Skills</span>
                    </h2>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                        Technical Expertise
                    </h1>
                    <p className="text-base text-gray-400 sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
                        A showcase of the technologies and tools I leverage to build robust, user-friendly applications. I’m dedicated to mastering new skills and staying at the forefront of tech innovation.
                    </p>
                </div>

                {/* Skill Cards */}
                <div className="space-y-16">
                    {Object.entries(skills).map(([category, skillSet], index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold text-[#E3FEF7] mb-8 pl-4 border-l-4 border-[#77B0AA]">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skillSet.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="relative bg-gradient-to-br from-[#77B0AA] to-[#003C43] p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        <div className="absolute -inset-2 bg-teal-500/10 rounded-xl transform rotate-2"></div>
                                        <div className="relative flex flex-col items-center justify-center">
                                            <img
                                                src={skill.img}
                                                alt={skill.name}
                                                className="w-16 h-16 object-contain mb-4 transition-transform duration-300 transform hover:scale-110"
                                            />
                                            <p className="text-base font-medium text-[#E3FEF7]">{skill.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}