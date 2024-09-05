import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
          Education
        </h2>
        <div className="space-y-12">
          {/* Education Entry */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              B.Tech in Electronics and Communication Engineering
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">
                Indian Institute of Information Technology, Kota
              </span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Year:</span> 2021 - Present
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">CGPA:</span> 8.88/10
            </p>
          </div>

          {/* Previous Education Entry */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              CBSE (XII)
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">
                Lakshmipat Singhania School, Kankroli
              </span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Year:</span> 2020
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Percentage:</span> 93.4%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
