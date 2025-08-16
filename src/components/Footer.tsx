import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Irene Musau</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Software Engineer passionate about creating digital solutions that make a difference. 
              Always ready for the next challenge.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/ire-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/irene-musau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:irene@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Irene Musau. All rights reserved.
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Built with</span>
                <Heart size={16} className="mx-2 text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
