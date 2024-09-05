import React, { useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "Recipe Jhalak",
    shortDescription:
      "Recipe Jhalak is a web app that helps users find recipes based on various criteria.",
    description: `Recipe Jhalak is a web application designed to assist users in finding recipes based on various criteria. 
      Facilitated recipe discovery by category, location, and required ingredients. Implemented a user-friendly search feature for specific food items with detailed recipe and ingredient lists. 
      Recipe Jhalak offers user registration and login features. Users can contribute by uploading their own recipes with detailed information.`,
    image:
      "https://mostaql.hsoubcdn.com/uploads/thumbnails/3145931/65ee6aadf087d/lmrecipes.moncefdev.me.png",
    link: "https://github.com/malpani2003/Recipe-Jalak-2.0",
    technologies: ["Express.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/malpani2003/Recipe-Jalak-2.0",
    workingLink: "https://github.com/malpani2003/Recipe-Jalak-2.0",
  },
  {
    title: "JobForge",
    shortDescription:
      "JobForge aggregates job listings from multiple sources with advanced search features.",
    description: `JobForge is a collaborative project that aggregates job listings from various sources including LinkedIn, Unstop, and Indeed using web scraping techniques. 
      Enhanced functionality by adding search capabilities, pagination, filtering, sorting, and bookmarking features for user convenience.`,
    image:
      "project_2_1.png", // Replace with an actual image path or use a placeholder
    link: "https://jobaggregator.onrender.com/",
    technologies: ["React", "Selenium", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/malpani2003/JobAggregator",
    workingLink: "https://jobaggregator.onrender.com/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-6">
              <div
                className="bg-white rounded shadow-md overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
