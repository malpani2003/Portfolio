import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 ">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-12">
          {/* Current Role */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Web Team Member at IIIT Kota
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Dates of Employment:</span>{" "}
              September 2023 - Present
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Managed the official website of the college.</li>
              <li>
                Engaged with college administration to plan and optimize the
                site, addressing issues and queries.
              </li>
              <li>
                Applied technologies to update and maintain site functionality.
              </li>
            </ul>
          </div>

          {/* Current Internship */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Research Software Developer Intern at Yoglabs AI Research
              Foundation
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Dates of Employment:</span>{" "}
              January 2024 - Present
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>
                Collaborated with team members to debug and optimize
                Python-based backend functionalities or codebase, enhancing
                overall system performance.
              </li>
              <li>
                Resolved daily scraping issues for E-Paper, Website, and RSS
                backend systems by implementing strategies to improve efficiency
                and accuracy by 25%.
              </li>
              <li>
                Deployed code on Lightsail machine and set up cronjobs for
                automated daily execution.
              </li>
              <li>
                Utilized Flask framework to build APIs deployed on AWS Lambda
                using Zappa, ensuring seamless integration and scalability.
              </li>
              <li>
                Documented 100% of technical specifications and dependencies of
                the application.
              </li>
            </ul>
          </div>

          {/* Previous Internship
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Internship Task at Rasyog
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Dates of Employment:</span> March
              2023 - June 2023
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>
                Developed a Flask-based API for dynamic visualization,
                extracting JSON data from Plotly plots based on user
                requirements.
              </li>
              <li>
                Implemented user authentication and authorization, with secure
                access based on user roles and admin privileges required for
                user registration.
              </li>
              <li>
                Enabled users to upload Excel and CSV files and stored them on
                AWS S3 Bucket.
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
