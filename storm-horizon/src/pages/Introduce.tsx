import React from 'react';
import { Award, CloudLightning, Code, Shield, Zap, Globe, Users, Rocket } from 'lucide-react';
import RainAnimation from '../components/icons/Storm';

const StormPlatformDocs: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Storm Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Empowering Creators in the Decentralized Era
            </p>
            
            {/* Badges */}
            <div className="flex justify-center space-x-4 mb-12">
              <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
              <span className="px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full">Web3</span>
              <span className="px-4 py-1 bg-purple-100 text-purple-800 rounded-full">MIT License</span>
            </div>

            <div className=''>
              <RainAnimation />
            </div>
          </div>
        </div>
      </header>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 transform transition hover:scale-105">
            <Award className="text-indigo-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Zap className="mr-3 text-indigo-500" size={20} />
                True Ownership of Content
              </li>
              <li className="flex items-center">
                <CloudLightning className="mr-3 text-indigo-500" size={20} />
                Fair Revenue Models
              </li>
              <li className="flex items-center">
                <Users className="mr-3 text-indigo-500" size={20} />
                Community-Centric Approach
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 text-indigo-500" size={20} />
                Decentralized Future
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 transform transition hover:scale-105">
            <Shield className="text-indigo-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <Code className="mx-auto text-indigo-600 mb-2" size={32} />
                <span className="text-gray-700">React 18.3</span>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <Rocket className="mx-auto text-indigo-600 mb-2" size={32} />
                <span className="text-gray-700">NestJS 10</span>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <Zap className="mx-auto text-indigo-600 mb-2" size={32} />
                <span className="text-gray-700">TypeScript</span>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <Globe className="mx-auto text-indigo-600 mb-2" size={32} />
                <span className="text-gray-700">Web3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Quick Start Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Frontend Setup</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm">
                {`# Clone Frontend Repository
git clone https://github.com/yourusername/storm-horizon.git
cd storm-horizon
npm install
npm run dev`}
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Backend Setup</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm">
                {`# Clone Backend Repository
git clone https://github.com/yourusername/storm-thunder.git
cd storm-thunder
npm install
npm run start:dev`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Building the Future of Digital Creativity</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-indigo-300">Website</a>
            <a href="#" className="hover:text-indigo-300">Documentation</a>
            <a href="#" className="hover:text-indigo-300">Community</a>
            <a href="#" className="hover:text-indigo-300">Support</a>
          </div>
          <p className="text-gray-400">© 2024 Storm Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StormPlatformDocs;
