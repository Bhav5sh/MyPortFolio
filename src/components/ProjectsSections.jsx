import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Style Transfer",
    description: "A style-transfer application that can apply art styles or textures over new images.",
    image: "/api/placeholder/800/400?text=Style+Transfer",
    github: "https://github.com/yourusername/style-transfer"
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by natural language processing.",
    image: "/api/placeholder/800/400?text=AI+Chatbot",
    github: "https://github.com/yourusername/ai-chatbot"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets.",
    image: "/api/placeholder/800/400?text=Data+Viz+Dashboard",
    github: "https://github.com/yourusername/data-viz-dashboard"
  },
  {
    title: "Machine Learning Model",
    description: "A sophisticated machine learning model for predictive analytics.",
    image: "/api/placeholder/800/400?text=ML+Model",
    github: "https://github.com/yourusername/ml-model"
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile application built with React Native.",
    image: "/api/placeholder/800/400?text=Mobile+App",
    github: "https://github.com/yourusername/mobile-app"
  }
];

const ProjectsCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      }
      if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevProject, nextProject]);

  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">My Projects</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                      >
                        View on GitHub
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`h-3 w-3 rounded-full mx-2 transition-colors ${index === currentProject ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === currentProject ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;