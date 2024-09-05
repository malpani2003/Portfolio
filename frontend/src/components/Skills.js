import React from "react";

const skills = [
  {
    name: "Node.js",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqz7EiUUb7WDplItB0QY-zAJyLISkjOVsiaCAMX23VKKQ-6_SeiyY9pW8IvVCxaZRDf_g&usqp=CAU",
  },
  {
    name: "Python",
    logo: "https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc-thumbnail.png",
  },
  {
    name: "Flask",
    logo: "https://miro.medium.com/v2/resize:fit:438/1*dQvABiWzbE28OTPYjzElKw.png",
  },
  {
    name: "React",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "Express",
    logo: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "MongoDB",
    logo: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
  {
    name: "C++",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxI-CPJeMM6OzwxHe2ZzIHg2qX1P-JTMRFw&s",
  },
  {
    name: "PythonAnywhere",
    logo: "https://avatars.githubusercontent.com/u/181511?s=280&v=4",
  },
  {
    name: "MySQL",
    logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
  },
  {
    name: "Bootstrap",
    logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "Git",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1MO4Ln0Ynz4VKkD2EDyylsYzoVg1d8FiQ&s",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-1/4 sm:w-1/6 mb-6 flex flex-col items-center"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
