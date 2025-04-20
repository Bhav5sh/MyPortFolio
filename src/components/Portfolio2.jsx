import React, { useState, useEffect } from 'react';
import { Sun, Moon, Linkedin, Mail, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const NavItems = () => (
    <>
      <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-blue-500">Home</a>
      <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-500">About</a>
      <a onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-blue-500">Skills</a>
      <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-blue-500">Projects</a>
      <a onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-blue-500">Experience</a>
      <a onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-blue-500">Services</a>
      <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-blue-500">Contact</a>
    </>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
          <div className="text-xl font-bold">Your Name</div>
          <div className="hidden md:flex space-x-4">
            <NavItems />
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center space-y-4">
            <NavItems />
          </div>
        )}

        {showMessage && (
          <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center z-50">
            Message sent successfully!
          </div>
        )}

        <div className="pt-16">
          <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/api/placeholder/400/400" alt="Profile" className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Your Name</h1>
              <p className="text-xl">I am a Developer</p>
            </div>
          </section>

          <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
            <div className="md:w-1/2 mb-8 md:mb-0 md:order-2">
              <img src="/api/placeholder/400/400" alt="About" className="rounded-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p>Your description goes here. Talk about your background, interests, and what drives you as a developer.</p>
            </div>
          </section>

          <section id="skills" className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">HTML</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">CSS</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">JavaScript</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">React</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Node.js</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Python</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Git</div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">SQL</div>
            </div>
            <div className="mt-8 text-center">
              <a href="/path-to-your-resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Download Resume
              </a>
            </div>
          </section>

          <section id="projects" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="relative">
              <button onClick={() => document.getElementById('projectsContainer').scrollBy(-300, 0)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10">
                <ChevronLeft size={24} />
              </button>
              <div id="projectsContainer" className="flex space-x-4 overflow-x-hidden scroll-smooth">
                {[1, 2, 3, 4, 5].map((project) => (
                  <div key={project} className="flex-shrink-0 w-64 bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <img src={`/api/placeholder/200/150?text=Project ${project}`} alt={`Project ${project}`} className="w-full h-32 object-cover mb-4" />
                    <h3 className="font-bold mb-2">Project {project}</h3>
                    <p>Description of project {project}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => document.getElementById('projectsContainer').scrollBy(300, 0)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10">
                <ChevronRight size={24} />
              </button>
            </div>
          </section>

          <section id="experience" className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">Python Developer</h3>
                <p className="mb-2">Company Name</p>
                <p className="mb-2">2020 - Present</p>
                <p className="mb-2">Remote</p>
                <p>Description of your role and responsibilities...</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">Web Developer</h3>
                <p className="mb-2">Another Company</p>
                <p className="mb-2">2018 - 2020</p>
                <p className="mb-2">On-site</p>
                <p>Description of your role and responsibilities...</p>
              </div>
            </div>
          </section>

          <section id="services" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-4">Python Development</h3>
                <p>Custom Python applications, data analysis, and automation scripts.</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-4">Web Development</h3>
                <p>Responsive websites and web applications using modern frameworks.</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-4">API Integration</h3>
                <p>Seamless integration of third-party APIs into your projects.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded dark:bg-gray-700" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded dark:bg-gray-700" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 border rounded dark:bg-gray-700" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </section>

          <footer className="bg-gray-200 dark:bg-gray-800 p-8">
            <div className="flex justify-center space-x-6">
              {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <GitHub size={24} />
              </a> */}
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Linkedin size={24} />
              </a>
              {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Instagram size={24} />
              </a> */}
              <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <Mail size={24} />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;