import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? 'bg-gray-800' : 'bg-white') : 'bg-transparent'} ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            src="src\components\Profile.jpg"
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                            onClick={toggleProfileModal}
                        />
                        <h1 className="text-2xl font-bold text-indigo-1000">Bhavesh Yadav</h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={() => scrollToSection('home')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}>Home</button>
                        <button onClick={() => scrollToSection('about')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}>About</button>
                        <button onClick={() => scrollToSection('projects')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}>Projects</button>
                        <button onClick={() => scrollToSection('contact')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}>Contact</button>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                        >
                            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                    </div>
                    <button className={`md:hidden ${isDarkMode ? 'text-white bg-gray-700' : 'text-gray-700 bg-white'} bg-opacity-50 rounded-full p-2`} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-80 backdrop-blur-sm`}>
                        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                            <button onClick={() => scrollToSection('home')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300 py-2`}>Home</button>
                            <button onClick={() => scrollToSection('about')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300 py-2`}>About</button>
                            <button onClick={() => scrollToSection('projects')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300 py-2`}>Projects</button>
                            <button onClick={() => scrollToSection('contact')} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300 py-2`}>Contact</button>
                            <button
                                onClick={toggleDarkMode}
                                className={`flex items-center justify-center py-2 ${isDarkMode ? 'text-yellow-300' : 'text-gray-700'} transition-colors duration-300`}
                            >
                                {isDarkMode ? <FaSun size={20} className="mr-2" /> : <FaMoon size={20} className="mr-2" />}
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {showProfileModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={toggleProfileModal}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 transform hover:scale-105">
                            <img
                                src="src\components\Profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button
                            className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600 transition-colors duration-300 shadow-lg"
                            onClick={toggleProfileModal}
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>
                </div>
            )}

            <main className="pt-16">
                <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
                    <div className="text-center text-white">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Profile</h2>
                        <p className="text-xl md:text-2xl">i'm software developer and passnoite about problem solving,</p>
                        <p className="text-xl md:text-2xl"> also  enthusiasts about macine learning , deep learing. </p>
                    </div>
                </section>

                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                            <img src="src\components\Profile.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover shadow-lg" />
                            <div className="max-w-md text-center md:text-left">
                                <p className="text-gray-600 leading-relaxed">Hi, I'm John Doe, a passionate web developer with 5 years of experience. I specialize in creating responsive and user-friendly websites using modern technologies. My goal is to bring your ideas to life through clean and efficient code.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((project) => (
                                <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <img src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-indigo-600">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
                        <form className="max-w-lg mx-auto">
                            <div className="mb-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-300">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 My Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;