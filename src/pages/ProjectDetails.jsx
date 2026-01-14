import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <section style={{ padding: "60px", color: "white" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{project.title}</h1>
      <p>{project.details}</p>

      <h4>Tech Stack</h4>
      <ul>
        {project.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      {project.live && (
        <a href={project.live} target="_blank">Live Demo</a>
      )}

      {project.github && (
        <a href={project.github} target="_blank">GitHub</a>
      )}
    </section>
  );
}

export default ProjectDetails;
