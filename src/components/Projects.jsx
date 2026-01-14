import React from 'react';
import ProjectData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import "../cssfiles/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {ProjectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
