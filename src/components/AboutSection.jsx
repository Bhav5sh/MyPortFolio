import React from 'react';
import AboutImage from '../assets/About.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen p-8 bg-gray-100 dark:bg-gray-800 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img
              src={AboutImage}
              alt="About Bhavesh"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              style={{ maxHeight: '85vh' }}
            />
          </div>
          <div className="md:w-6/12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-200 text-lg">
              <p>
                I'm an aspiring software developer and Machine Learning enthusiast. With a strong foundation in Python, machine learning, and AI, I also have a good grasp of Data Structures and Algorithms.
              </p>
              <p>
                I'm passionate about problem-solving and finding meaningful insights from data. My goal is to create innovative software solutions that make a difference.
              </p>
              <p>
                Throughout my journey, I've worked on several projects during my internships, which have honed my skills and given me practical experience in the field.
              </p>
              <p>
                I'm always eager to take on new challenges and expand my knowledge in both software development and machine learning.
              </p>
              <p className="font-semibold">
                Let's connect and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;