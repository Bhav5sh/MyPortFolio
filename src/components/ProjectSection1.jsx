import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "Coming soon:",
    image: "/api/placeholder/800/600",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Coming soon:",
    image: "/api/placeholder/800/600",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Coming soon:",
    image: "/api/placeholder/800/600",
    link: "#",
  },
  {
    title: "Project 4",
    description: "Coming soon:",
    image: "/api/placeholder/800/600",
    link: "#",
  },
  {
    title: "Project 5",
    description: "Coming soon:",
    image: "/api/placeholder/800/600",
    link: "#",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    setStartX(pageX);
    setDragDistance(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const distance = pageX - startX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 100;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setDragDistance(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getTransform = () => {
    if (!carouselRef.current) return 0;
    const slideWidth = carouselRef.current.offsetWidth;
    const baseTransform = -currentIndex * slideWidth;
    return baseTransform + dragDistance;
  };

  return (
    <div
      id="projects"
      className="min-h-screen p-8 bg-indigo-50 dark:bg-gray-800 flex items-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            My Projects
          </h2>

          <div
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onMouseMove={handleDragMove}
            onTouchMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onTouchEnd={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <div
              className={`flex ${isDragging ? '' : 'transition-transform duration-300 ease-out'}`}
              style={{
                transform: `translateX(${getTransform()}px)`,
                touchAction: 'pan-y pinch-zoom',
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-6 px-4"
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                      draggable="false"
                    />
                  </div>

                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-blue-600 dark:bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
