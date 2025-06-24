import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              สวัสดี! ผม
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                นักศึกษาปี 4
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              นักพัฒนาเว็บแอปพลิเคชันและนักออกแบบ UI/UX ที่หลงใหลในการสร้างสรรค์ผลงานดิจิทัลที่สวยงามและใช้งานง่าย
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                ดูผลงาน
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                ติดต่อฉัน
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
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
                alt="Professional student portrait"
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
