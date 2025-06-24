import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'skills', label: 'Skills' },
    { href: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-lg shadow-2xl border-b border-purple-500/60' 
          : 'bg-slate-900/70 backdrop-blur-md border-b border-purple-500/30'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              ['bg-purple-400/40', 'bg-pink-400/40', 'bg-blue-400/40'][i % 3]
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm"
              />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full p-2 mr-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Char Nla
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="relative group px-4 py-2 text-slate-300 hover:text-white transition-all duration-300 font-medium"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300 -z-10"></div>
                  
                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-lg blur-xl transition-all duration-300 -z-20"></div>
                  
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-3 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg text-slate-300 hover:text-white hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="group relative block w-full text-left px-4 py-3 text-slate-300 hover:text-white transition-all duration-300 rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-lg transition-all duration-300"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-6 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-1 transition-all duration-300 rounded-r"></div>
                  <span className="relative z-10 font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
