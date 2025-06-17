import React from 'react';
import { Code, MonitorSmartphone, PlugZap } from 'lucide-react';

const services = [
  {
    title: "Python Development",
    description: "Custom Python applications, data analysis, and automation scripts.",
    icon: <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
  },
  {
    title: "Web Development",
    description: "Responsive websites and web applications using modern frameworks.",
    icon: <MonitorSmartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
  },
  {
    title: "API Integration",
    description: "Seamless integration of third-party APIs into your projects.",
    icon: <PlugZap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
  }
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="min-h-screen p-8 bg-indigo-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        My Services
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 max-w-sm w-full transform transition duration-300 hover:scale-105 border border-transparent hover:border-purple-500"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
