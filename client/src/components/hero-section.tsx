import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
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
            <div className="relative">
              <motion.img
                animate={{ y: [-20, 0, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
                alt="Char Nla - Computer Science Student"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-purple-500/50"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-purple-500/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
