import React from 'react';
import { Building2, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ title, company, period, location, description, type }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md border border-transparent hover:border-purple-400 transition duration-300 transform hover:scale-105">
    <h3 className="font-bold text-xl text-purple-700 dark:text-white mb-3">{title}</h3>
    <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
      <p className="flex items-center">
        <Building2 className="mr-2 h-4 w-4" />
        {company}
      </p>
      <p className="flex items-center">
        <Calendar className="mr-2 h-4 w-4" />
        {period}
      </p>
      <p className="flex items-center">
        <MapPin className="mr-2 h-4 w-4" />
        {location}
      </p>
      <p className="flex items-center">
        {type === 'job' ? (
          <Briefcase className="mr-2 h-4 w-4" />
        ) : (
          <GraduationCap className="mr-2 h-4 w-4" />
        )}
        {type === 'job' ? 'Work Experience' : 'Certification'}
      </p>
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-200 text-sm">{description}</p>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "Company Name",
      period: "2020 - Present",
      location: "Remote",
      description: "Working on scalable backend APIs and automation tools using Python.",
      type: "job"
    },
    {
      title: "Azure-AI-102",
      company: "Microsoft",
      period: "2018 - 2020",
      location: "On-site",
      description: "Completed certification covering Azure AI services, ML workflows, and cognitive solutions.",
      type: "certification"
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen p-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-none dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white tracking-wide">
        My Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
