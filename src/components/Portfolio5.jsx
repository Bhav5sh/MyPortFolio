import React, { useState, useEffect } from 'react';
import { Sun, Moon, Linkedin, Mail, Menu, X, ChevronLeft, ChevronRight, ArrowUp, ExternalLink } from 'lucide-react';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectSection1 from './ProjectSection1';
import Footer from './Footer';
import ExperienceSection from './ExperienceSection';
import ProfilePic from '../assets/Profile.jpg';
import Contact from './Contact';
import ServicesSection from './ServicesSection';

// import Contact from './Contact'; 
const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

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
        setDarkMode(prevMode => !prevMode);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    const NavItems = () => (
        <>
            <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Home</a>
            <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">About</a>
            <a onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Projects</a>
            <a onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Experience</a>
            <a onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Services</a>
            <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300 text-gray-800 dark:text-gray-200">Contact</a>
        </>
    );

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''} overflow-x-hidden`}>
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 shadow">
                    {/* Logo / Name */}
                    <div className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        Bhavesh Yadav
                    </div>

                    {/* Navigation Items - Desktop */}
                    <div className="hidden md:flex space-x-6">
                        <NavItems />
                    </div>

                    {/* Right Side - Toggle Buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
                        >
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Nav Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-40 w-full h-full bg-gray-100 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 flex flex-col items-center justify-center space-y-4 backdrop-blur-sm overflow-x-hidden">
                        <NavItems />
                    </div>
                )}

                {/* ... (rest of your component remains the same) ... */}
                <div className="pt-16">
                    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Hi, I'm <span className="text-purple-600">Bhavesh</span> And<br />
                                    i Love Problem Solving<br />
                                </h1>
                                <p className="text-lg mb-6">
                                    Software Developer <span className='text-gray-600'>|</span> AI Engineer <br />
                                </p>
                                <div className="flex space-x-4">
                                    <button onClick={() => scrollToSection('contact')}
                                        className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                                        Hire Me
                                    </button>
                                    <button onClick={() => scrollToSection('projects')}
                                        className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
                                        Projects
                                    </button>
                                </div>
                                <div className="flex space-x-8 mt-8">
                                    <div>
                                        <div className="text-2xl font-bold">5+</div>
                                        <div className="text-gray-600 dark:text-gray-400">Projects Done</div>
                                    </div>
                                    <span className='text-gray-600'>|</span>
                                    <div>
                                        <div className="text-2xl font-bold">2+</div>
                                        <div className="text-gray-600 dark:text-gray-400">Experience</div>
                                    </div>
                                    <span className='text-gray-600'>|</span>
                                    <div>
                                        <div className="text-2xl font-bold">4+</div>
                                        <div className="text-gray-600 dark:text-gray-400">Internship</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src={ProfilePic} alt="Profile" className="rounded-full w-full max-w-md mx-auto" />
                            </div>
                        </div>
                    </section>

                    <AboutSection />

                    <SkillsSection />
                    {/* ... (previous nav and other sections) */}

                    {showScrollTop && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-25"
                        >
                            <ArrowUp size={20} />
                        </button>
                    )}

                    <ProjectSection1 />

                    <ExperienceSection />
                    
                    <ServicesSection />

                    <Contact />

                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default Portfolio;