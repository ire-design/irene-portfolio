import React from 'react';
import { MapPin, Calendar, Building, GraduationCap, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'ICT Intern',
      company: 'Kenya Airport Authorities, JKIA',
      location: 'Nairobi, Kenya',
      period: 'May 2026 - August 2026',
      description: 'Assisting the ICT department with technical support, network troubleshooting, system maintenance, and user support across various airport systems.',
      responsibilities: [
        'Technical support for airport systems',
        'Network troubleshooting and maintenance',
        'System administration and monitoring',
        'User support and training'
      ],
      icon: <Building className="text-blue-700" size={20} />
    },
    {
      type: 'volunteer',
      title: 'Volunteer Developer',
      company: 'Google Developer Student Clubs (GDSC)',
      location: 'University Club',
      period: '2023 - Present',
      description: 'Built projects and attended google fests, coding workshops with peers in Frontend Development, fostering a collaborative learning environment.',
      responsibilities: [
        'Participating in coding workshops',
        'Building educational projects and demos',
        'Contributing to open-source initiatives'
      ],
      icon: <Users className="text-emerald-600" size={20} />
    },
    {
      type: 'leadership',
      title: 'Head Girl',
      company: 'St. George Academy',
      location: 'Matuu-Machakos, Kenya',
      description: 'Led school initiatives, promoted teamwork among students, and fostered inclusivity across all school activities and programs.',
      responsibilities: [
        'Led student initiatives and programs',
        'Promoted teamwork and collaboration',
        'Fostered inclusive school environment',
        'Represented student body in meetings'
      ],
      icon: <GraduationCap className="text-purple-600" size={20} />
    }
  ];

  const education = [
    
    {
      degree: 'BSc Computer Science',
      institution: 'Murang\'a University of Technology',
      location: 'Muranga, Kenya',
      period: 'September 2022 - Present',
      status: 'In Progress',
      description: 'Comprehensive computer science program covering algorithms, data structures, software engineering, and computer systems.'
    },
    {
      degree: 'GenAI Access Program',
      institution: 'Moringa School + Flatiron School',
      location: 'Nairobi, Kenya',
      period: 'August 2026 - present',
      status: 'In Progress',
      description: 'Focused program on Generative AI concepts, tools, and real-world applications.'
    },
    {
      degree: 'Software Engineering: Full Stack Web Development',
      institution: 'Moringa School + Flatiron School',
      location: 'Nairobi, Kenya',
      period: 'June 2024 - February 2025',
      status: 'Completed',
      description: 'Intensive program covering modern web development technologies, best practices, and real-world project experience.'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My journey in technology, leadership, and continuous learning
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Building className="text-blue-700" size={24} />
                Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-blue-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        {exp.icon}
                        <h4 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h4>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-blue-700 font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-emerald-600" size={24} />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border-l-4 border-emerald-600"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-emerald-700 font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
