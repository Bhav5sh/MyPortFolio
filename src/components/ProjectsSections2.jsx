import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Style Transfer",
    description: "A style-transfer application that can apply art styles or textures over new images.",
    image: "https://via.placeholder.com/800x400?text=Style+Transfer",
    github: "https://github.com/yourusername/style-transfer"
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by natural language processing.",
    image: "https://via.placeholder.com/800x400?text=AI+Chatbot",
    github: "https://github.com/yourusername/ai-chatbot"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets.",
    image: "https://via.placeholder.com/800x400?text=Data+Viz+Dashboard",
    github: "https://github.com/yourusername/data-viz-dashboard"
  }
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse/touch events
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type.includes('touch') ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;
    setTranslateX(-currentIndex * 100 + (diff / carouselRef.current.offsetWidth) * 100);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;
    
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    } else {
      setCurrentIndex(currentIndex); // Snap back if not enough drag
    }
    setTranslateX(-currentIndex * 100);
  };

  // Update translateX when currentIndex changes
  useEffect(() => {
    if (!isDragging) {
      setTranslateX(-currentIndex * 100);
    }
  }, [currentIndex, isDragging]);

  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">My Projects</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(${translateX}%)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover pointer-events-none"
                      draggable="false"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
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
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;