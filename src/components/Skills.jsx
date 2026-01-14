import React from 'react';
import "../cssfiles/Skills.css";
import { useEffect, useRef, useState } from 'react';


const Skills = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`skills-tree ${visible ? "animate" : ""}`}
        >
            <div className="center-box">MY SKILLS</div>

      

            <div className="branches">


                {/* FRONTEND */}
                <div className="branch">
                    <h3>Frontend</h3>
                    <div className="branch-line"></div>
                    <div className="skills">
                        {["HTML", "CSS", "JavaScript", "React", "UI / UX"].map(
                            (skill, i) => (
                                <span style={{ animationDelay: `${i * 0.15}s` }} key={skill}>
                                    {skill}
                                </span>
                            )
                        )}
                    </div>
                </div>

                {/* BACKEND */}
                <div className="branch">
                    <h3>Backend</h3>
                    <div className="branch-line"></div>
                    <div className="skills">
                        {["Node.js", "Express", "REST API", "SQL"].map((skill, i) => (
                            <span style={{ animationDelay: `${i * 0.15}s` }} key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* TOOLS */}
                <div className="branch">
                    <h3>Tools & Design</h3>
                    <div className="branch-line"></div>
                    <div className="skills">
                        {["Figma", "Git", "GitHub", "Unity", "AR / VR"].map((skill, i) => (
                            <span style={{ animationDelay: `${i * 0.15}s` }} key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;