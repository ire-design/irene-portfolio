import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fitness and Nutrition Tracker',
      description:
        "A comprehensive CLI application for managing clients' fitness routines and nutritional plans with enhanced data accuracy.",
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'CLI'],
      image: '/nutrition.jpg',
      features: [
        'Client Management',
        'Workout Tracking',
        'Nutrition Planning',
        'Data Analytics',
      ],
      code: 'https://github.com/ire-design/fitness-nutrition-tracker',
      demo: 'https://fitness-nutrition-tracker.vercel.app', // update if live link differs
    },
    {
      title: 'Book-A-Room',
      description:
        'React.js and TypeScript application for booking meeting rooms with real-time availability updates and intuitive navigation.',
      technologies: ['React.js', 'TypeScript', 'Real-time Updates'],
      image: '/book-a-room.jpg',
      features: [
        'Real-time Availability',
        'Room Booking',
        'User Dashboard',
        'Calendar Integration',
      ],
      code: 'https://github.com/ire-design/book-a-room',
      demo: 'https://book-a-room.vercel.app',
    },
    {
      title: 'Book-A-Meal',
      description:
        'Collaborative meal ordering platform featuring dynamic menus and secure order processing for enhanced user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask'],
      image: '/book-a-meal.jpg',
      features: [
        'Dynamic Menus',
        'Order Processing',
        'Payment Integration',
        'User Authentication',
      ],
      code: 'https://github.com/ire-design/book-a-meal',
      demo: 'https://book-a-meal.vercel.app',
    },
    {
      title: 'Gym Management System',
      description:
        'Comprehensive system for gym operations including member management and class scheduling to improve administrative efficiency.',
      technologies: ['Python', 'Flask', 'Database Management'],
      image: '/gym.jpg',
      features: [
        'Member Management',
        'Class Scheduling',
        'Payment Tracking',
        'Equipment Management',
      ],
      code: 'https://github.com/ire-design/gym-management-system',
      demo: 'https://gym-management-system.vercel.app',
    },
    {
      title: 'Car Rental Service',
      description:
        'Platform for managing car rentals with vehicle listings, booking management, and user authentication.',
      technologies: ['Full Stack', 'User Authentication', 'Booking System'],
      image: '/car-rental.jpg',
      features: [
        'Vehicle Listings',
        'Booking Management',
        'User Profiles',
        'Payment Processing',
      ],
      code: 'https://github.com/ire-design/car-rental-service',
      demo: 'https://car-rental-service.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of applications I've built using modern technologies
              and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-700/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                    >
                      <Code size={16} />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
