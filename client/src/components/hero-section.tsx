import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import SpaceButton from "./ui/space-button";
import { PORTFOLIO_CONTENT } from "@/lib/space-theme-config";
import profileImg from "@/assets/profile.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-16">
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
                {" "}{PORTFOLIO_CONTENT.personal.name}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {PORTFOLIO_CONTENT.personal.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SpaceButton
                onClick={() => scrollToSection('projects')}
                variant="primary"
              >
                View Projects
              </SpaceButton>
              <SpaceButton
                onClick={() => scrollToSection('contact')}
                variant="secondary"
              >
                Contact Me
              </SpaceButton>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href={PORTFOLIO_CONTENT.social.github} className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Github size={24} />
              </a>
              <a href={PORTFOLIO_CONTENT.social.linkedin} className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Linkedin size={24} />
              </a>
              <a href={PORTFOLIO_CONTENT.social.instagram} className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Instagram size={24} />
              </a>
              <a href={PORTFOLIO_CONTENT.social.facebook} className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
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
            <div className="relative flex items-center justify-center">
              {/* Premium Space Profile Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group"
              >
                {/* Outer Holographic Ring */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 via-blue-500/20 to-cyan-400/20 blur-xl animate-pulse"></div>
                
                {/* Secondary Glow Ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-400/30 to-blue-400/30 blur-lg animate-pulse"></div>

                {/* Main Profile Frame */}
                <div className="relative">
                  {/* Hexagonal Tech Border */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full p-0.5 animate-spin-slow">
                    <div className="w-full h-full bg-slate-900 rounded-full"></div>
                  </div>

                  {/* Profile Image Container */}
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotateY: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative w-80 h-80"
                  >
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    
                    {/* Main Profile Image */}
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-slate-800/50"
                    />

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-scan"></div>
                    </div>

                    {/* Corner Tech Details */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-slate-900 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-8 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </motion.div>

                  {/* Floating Data Points */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-300 font-mono">CS STUDENT</span>
                    </div>
                  </div>
                </div>

                {/* Ambient Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 -left-8 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
                  <div className="absolute top-3/4 -right-6 w-1 h-1 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-1/4 -left-6 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
