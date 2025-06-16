import React, { useState, useEffect } from 'react';
import { Sun, Moon, Linkedin, Mail, Menu, X, ChevronLeft, ChevronRight, ArrowUp, ExternalLink } from 'lucide-react';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectSection1 from './ProjectSection1';
import Footer from './Footer';
import ExperienceSection from './ExperienceSection';
import ProfilePic from '../assets/Profile.jpg';

// import Contact from './Contact'; 
const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    const NavItems = () => (
        <>
            <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Home</a>
            <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">About</a>
            <a onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Projects</a>
            <a onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Experience</a>
            <a onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Services</a>
            <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-blue-500 text-gray-800 dark:text-gray-200">Contact</a>
        </>
    );

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
                    <div className="text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-purple-600">Bhavesh Yadav</div>
                    <div className="hidden md:flex space-x-4">
                        <NavItems />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {isMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-gray-100 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 flex flex-col items-center justify-center space-y-4">
                        <NavItems />
                    </div>
                )}

                {showMessage && (
                    <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center z-50">
                        Message sent successfully!
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

                    {/* <section id="experience" className="min-h-screen p-8">
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
                                <h3 className="font-bold text-xl mb-2">Azure-AI-102</h3>
                                <p className="mb-2">Microsoft</p>
                                <p className="mb-2">2018 - 2020</p>
                                <p className="mb-2">On-site</p>
                                <p>Description of your role and responsibilities...</p>
                            </div>
                        </div>
                    </section> */}

                    <ExperienceSection />

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
                    {/* <Contact onSubmit={handleSubmit} /> */}

                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default Portfolio;