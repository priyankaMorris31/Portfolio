import React from 'react';
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="project-card"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

