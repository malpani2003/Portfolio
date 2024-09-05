// src/components/Navigation.js
import React from "react";
import { Link } from "react-scroll"; // Add react-scroll for smooth scrolling

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:underline"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:underline"
            >
              Experience
            </Link>
          </li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:underline"
          >
            Projects
          </Link>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
