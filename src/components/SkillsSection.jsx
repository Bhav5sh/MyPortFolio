import React from 'react';

const SkillBlock = ({ title, skills }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md border border-transparent hover:border-purple-400 transition duration-300 transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-white">{title}</h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "Core Java", "JavaScript", "OOPS"]
    },
    {
      title: "Data Structures & Algorithms",
      skills: ["DSA Fundamentals", "Advance DSA", "Problem Solving", "Algorithmic Thinking", "Algorithm Analysis", "Code Analysis"]
    },
    {
      title: "Data Science & Machine Learning",
      skills: ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Scikit-learn", "Keras"]
    },
    {
      title: "Deep Learning",
      skills: ["Neural Networks", "CNN, RNN, LSTM", "Transformer", "Rainforcetment Learning", "Transfer Learning"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL", "SQLite"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Microsoft Azure",
      skills: ["Azure Cognitive Services", "Azure Machine Learning", "Azure Open AI", "Azure Speech Services", "Azure AI Document Intelligence"]
    },
    {
      title: "Other Skills",
      skills: ["Git, GitHub", "API Integration", "API Calling", "RESTful APIs", "Postman", "SDK"]
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen p-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-none dark:bg-gray-900 transition-colors duration-300"
    >

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white tracking-wide">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillBlock key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1bf8941zJmCn_SMwRvGDJx0zwceyCu7vP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
