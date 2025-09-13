import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/imm.jpeg"
              alt="Irene Musau"
              className="w-50 h-50 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-white"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-700">Irene Musau</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            <span className="text-blue-700"> || </span>
            Software Developer
            <span className="text-blue-700"> ||</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced in JavaScript (React, Node.js), with expertise in both front-end and back-end
            development. I build user-friendly applications that enhance customer engagement and
            operational efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              View Projects
            </a>
          </div>

          <div className="mb-8 flex justify-center">
            <a
              href="/irene_musau_resume.docx"
              download="Irene_Musau_Resume.docx"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <br />

          <div className="text-sm text-gray-500">📍 Nairobi, Kenya</div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-700" />
      </div>
    </section>
  );
};

export default Hero;
