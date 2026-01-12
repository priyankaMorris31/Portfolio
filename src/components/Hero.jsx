import { useState, useEffect } from "react";
import "./Style.css";
import profileImg from "../assets/profile.jpeg";

function Hero() {
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Game Developer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } 
    else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I’m Priyanka 👋</h1>

        <h2>
          I'm a <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p>
          I build clean interfaces, design user experiences,
          and create interactive games.
        </p>

        <div className="hero-buttons">
          <button className="primary">View Projects</button>
          <button className="secondary">Contact Me</button>
        </div>
      </div>

        <div className="hero-right">
        <img src={profileImg} alt="Priyanka" />
      </div>
    </section>
  );
}

export default Hero;
