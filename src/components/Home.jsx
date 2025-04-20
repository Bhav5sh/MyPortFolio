import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUp } from 'lucide-react';

const HomeSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setShowScrollTop(scrollPosition > homeSectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/api/placeholder/400/400" alt="Profile" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Bhavesh</h1>
            <p className="text-xl mb-8">I'm a Software Developer</p>
            <div className="flex justify-center md:justify-start space-x-8">
              <div>
                <h2 className="text-3xl font-bold">3+</h2>
                <p>Years Experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">2</h2>
                <p>Internships</p>
              </div>
            </div>
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Hire Me
            </button>
          </div>
        </section>

        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-2 bg-purple-600 text-white rounded-full shadow-lg z-50"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSection;