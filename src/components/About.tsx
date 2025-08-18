import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-700" size={24} />,
      title: 'Full Stack Development',
      description: 'Expert in both frontend and backend technologies'
    },
    {
      icon: <Database className="text-emerald-600" size={24} />,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL database systems'
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: 'Web Technologies',
      description: 'Modern frameworks and responsive design'
    },
    {
      icon: <Smartphone className="text-orange-600" size={24} />,
      title: 'Mobile-First',
      description: 'Building applications that work everywhere'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Developer Creating Digital Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A developer with a strong foundation in modern web technologies. <br></br>
                Currently, I am pursuing a BSc in Computer Science at Murang'a University of Technology and studying Generative AI at Moringa School in collaboration with WeThinkCode.
                I also recently graduated from Moringa School’s Software Engineering program, an intensive Full-Stack Web Development training.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in tech has been driven by a passion for solving complex problems and creating 
                impactful solutions. I specialize in JavaScript ecosystems, Python development, and database 
                optimization, always focusing on delivering scalable and user-friendly applications.
              </p>
              
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
