import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hello! I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Char Nla
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A passionate 4th-year Computer Science student specializing in full-stack web development and UI/UX design, creating beautiful and functional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="#" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80">
              {/* Orbital System Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Profile Image */}
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [-20, 0, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
                      alt="Char Nla - Computer Science Student"
                      className="w-64 h-64 rounded-full object-cover shadow-2xl relative z-10"
                      style={{
                        background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
                        padding: '4px'
                      }}
                    />
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-pulse">
                      <div className="w-full h-full rounded-full bg-slate-900"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Orbiting Planets */}
                {/* Planet 1 - Large Purple */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg"
                    style={{
                      animation: 'orbit 12s linear infinite',
                      boxShadow: '0 0 15px rgba(147, 51, 234, 0.6)'
                    }}
                  />
                </div>

                {/* Planet 2 - Medium Pink (Reverse orbit) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-lg"
                    style={{
                      animation: 'orbit-reverse 8s linear infinite',
                      boxShadow: '0 0 12px rgba(236, 72, 153, 0.6)'
                    }}
                  />
                </div>

                {/* Planet 3 - Small Blue */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"
                    style={{
                      animation: 'orbit-small 6s linear infinite',
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
                    }}
                  />
                </div>

                {/* Planet 4 - Tiny Cyan */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full shadow-lg"
                    style={{
                      animation: 'orbit 15s linear infinite reverse',
                      transform: 'rotate(0deg) translateX(110px) rotate(0deg)',
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
                    }}
                  />
                </div>

                {/* Orbital Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-purple-500/20 rounded-full"
                  style={{ width: '400px', height: '400px', left: '-60px', top: '-60px' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-pink-500/20 rounded-full"
                  style={{ width: '320px', height: '320px', left: '-20px', top: '-20px' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
