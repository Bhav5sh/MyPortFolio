// const scrollRef = useRef(null);
    // ... (previous functions)
    // useEffect(() => {
    //     const savedMode = localStorage.getItem('darkMode');
    //     if (savedMode) {
    //         setDarkMode(JSON.parse(savedMode));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('darkMode', JSON.stringify(darkMode));
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [darkMode]);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };
const projects = [
    {
        title: "Style Transfer",
        description: "A style-transfer application that can apply art styles or textures over new images.",
        image: "/api/placeholder/400/400?text=Style+Transfer",
        github: "https://github.com/yourusername/style-transfer"
    },
    // Add more projects here
];

// const nextProject = () => {
//     setCurrentProject((prev) => (prev + 1) % projects.length);
// };

// const prevProject = () => {
//     setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
// };

{/* <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:order-2">
                            <img src="src\components\About.jpg" alt="About" className="rounded-lg w-full h-auto object-cover" />
                        </div>
                        <div className="md:w-1/2 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">About Me</h2>
                            <p>I'm an aspiring software developer and Macine learning. With a strong foundation in Python, machine learning, and AI, and also i have a good knowledge of DSA

                                I'm passionate about problem solving and finding meaningful insights from data, also make some creating software solutions.

                                i have worked on several projects at my during internships   .

                                Let's connect and create something amazing together!
                                .</p>
                        </div>
                    </section> */}
{/* <section id="skills" className="min-h-screen p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Python,C/C++,Core-java,javascript,oops</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Data Structures And Algorithms</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">MySql,SQL,SQLite</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Pandas,Numpy,Matploatlib,Tensorflow,Scikit-learn</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Keras,Neural Netwrok,CNN,RNN,LSTM</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Azure Ai & Ml Tools</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">Cloud Computing</div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">open ai - Api</div>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="/path-to-your-resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Download Resume
                            </a>
                        </div>
                    </section> */}
{/* <button
                        onClick={() => scrollToSection('home')}
                        className="fixed top-20 left-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg"
                    >
                        <ArrowUp size={24} />
                    </button> */}

{/* <section id="projects" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800">
                        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                <button onClick={prevProject} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10">
                                    <ChevronLeft size={24} />
                                </button>
                                <div className="flex items-center">
                                    <div className="w-1/2 p-4">
                                        <img
                                            src={projects[currentProject].image}
                                            alt={projects[currentProject].title}
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                    </div>
                                    <div className="w-1/2 p-4">
                                        <h3 className="text-2xl font-bold mb-2">{projects[currentProject].title}</h3>
                                        <p className="mb-4">{projects[currentProject].description}</p>
                                        <a
                                            href={projects[currentProject].github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
                                        >
                                            View <ChevronRight size={2} />
                                        </a>
                                    </div>
                                </div>
                                <button onClick={nextProject} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow z-10">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                            <div className="flex justify-center mt-4">
                                {projects.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-2 w-2 rounded-full mx-1 ${index === currentProject ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </section> */}


{/* <footer className="bg-gray-200 dark:bg-gray-800 p-8">
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                                <GitHub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                                <Mail size={24} />
                            </a>
                        </div>
                    </footer> */}