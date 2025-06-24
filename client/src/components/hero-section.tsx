import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import OrbitalSystem from "./orbital-system";
import SpaceButton from "./ui/space-button";
import { PORTFOLIO_CONTENT } from "@/lib/space-theme-config";

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

                {/* Orbital System */}
                <OrbitalSystem />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
