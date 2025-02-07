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
        <div className="flex items-center justify-center py-12" id="skill">
            <div className="px-6 py-6 lg:py-12 w-full max-w-screen-xl bg-[#003C43] rounded-lg shadow-lg transform transition duration-500 hover:scale-105">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-[#003C43] sm:text-4xl md:text-4xl mb-10">
                        <span className="bg-[#E3FEF7] py-3 px-5 rounded-full shadow-md inline-block">
                            My Skills
                        </span>
                    </h2>
                    <p className="text-xl text-[#E3FEF7]">
                        I have experience with various technologies across frontend and backend development.
                        I continuously improve my skills and stay updated with the latest trends.
                        Here are some key technologies and tools I work with.
                    </p>

                </div>

                {/* Skill Categories */}
                <div className="space-y-10">
                    {Object.entries(skills).map(([category, skillSet], index) => (
                        <div key={index}>
                            <h3 className="text-2xl text-[#77B0AA] font-semibold mb-4">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skillSet.map((skill, idx) => (
                                    <div key={idx} className="p-6 bg-[#135D66] rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
                                        <img src={skill.img} alt={skill.name} className="w-[60px] mx-auto transition-transform hover:scale-110" />
                                        <p className="text-[#E3FEF7] mt-2 font-medium">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
