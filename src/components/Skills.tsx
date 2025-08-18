import React from 'react';
import { Code2, Database, Globe, Wrench, Users, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-blue-700" size={28} />,
      title: 'Programming Languages',
      skills: ['Python (Flask)', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
    },
    {
      icon: <Globe className="text-emerald-600" size={28} />,
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Flask,Django', 'Bootstrap']
    },
    {
      icon: <Database className="text-purple-600" size={28} />,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB']
    },
    {
      icon: <Wrench className="text-orange-600" size={28} />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'SQLAlchemy']
    },
    {
      icon: <Brain className="text-red-600" size={28} />,
      title: 'Core Competencies',
      skills: ['Full Stack Development', 'API Development', 'Database Design', 'Responsive Design']
    },
    {
      icon: <Users className="text-indigo-600" size={28} />,
      title: 'Soft Skills',
      skills: ['Team Building', 'Problem Solving', 'Communication', 'Time Management', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
