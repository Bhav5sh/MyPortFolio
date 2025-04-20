import React from 'react';
import { Building2, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ title, company, period, location, description, type }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <div className="space-y-2">
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
    <p className="mt-4">{description}</p>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "Company Name",
      period: "2020 - Present",
      location: "Remote",
      description: "Description of your role and responsibilities...",
      type: "job"
    },
    {
      title: "Azure-AI-102",
      company: "Microsoft",
      period: "2018 - 2020",
      location: "On-site",
      description: "Description of your role and responsibilities...",
      type: "certification"
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;