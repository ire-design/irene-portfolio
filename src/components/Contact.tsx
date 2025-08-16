import React from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or just chat about technology. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-700 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:irene@gmail.com"
                      className="text-blue-700 hover:underline"
                    >
                      irene@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="bg-emerald-600 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/irene-musau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      linkedin.com/in/irene-musau
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <a 
                      href="https://github.com/ire-design/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      github.com/ire-design/
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Available For
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-blue-700">Full-time Roles</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-emerald-700">Freelance Projects</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-purple-700">Collaborations</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-orange-700">Internships</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
