// src/components/Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const {
    description = "",
    image,
    title,
    technologies = [],
    githubUrl,
    workingLink,
  } = project;
  const descriptions = description
    .split(".")
    .filter((desc) => desc.trim() !== "");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          &times;
        </button>
        {image && (
          <img
            src={image}
            alt={title || "Project image"}
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
        )}
        <h3 id="modal-title" className="text-2xl font-semibold mb-2">
          {title}
        </h3>
        <div className="text-gray-700 mb-4">
          <ul className="list-disc pl-5">
            {descriptions.map((desc, index) => (
              <li key={index} className="text-left">
                {desc.trim()}.
              </li>
            ))}
          </ul>
        </div>
        {technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <p
                  key={index}
                  className="bg-gray-600 p-2 rounded-3xl text-white"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-4 mb-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Repository
            </a>
          )}
          {workingLink && (
            <a
              href={workingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
