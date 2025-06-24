import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Code2, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Facebook, url: "#", label: "Facebook" },
  ];

  const contactInfo = [
    { icon: Mail, text: "mamm0n715120@gmail.com" },
    { icon: Phone, text: "+66 98 669 1718" },
    { icon: MapPin, text: "KhonKean, Thailand" },
    { icon: Linkedin, text: "linkedin.com/in/char-nla" },
  ];

  const stats = [
    { icon: Code2, number: "6+", label: "Projects Completed" },
    { icon: Rocket, number: "1+", label: "Years Experience" },
    { icon: Star, number: "7+", label: "Technologies Mastered" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              ['bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-cyan-400'][i % 4]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 backdrop-blur-sm border-t border-purple-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Char Nla
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Building the future through code. Passionate about creating innovative solutions that bridge technology and human experience in the digital cosmos.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative p-3 rounded-full bg-slate-800/50 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <social.icon size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mx-auto"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Let's Collaborate</h3>
              <p className="text-slate-400 mb-6">
                Ready to embark on an exciting journey through the digital universe? Let's create something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 mx-auto"
              >
                Start a Project
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-purple-500/20 pt-8 text-center"
          >
            <p className="text-slate-400">
              &copy; 2024 Char Nla. Crafted with{" "}
              <span className="text-red-400">♥</span> in the digital cosmos.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
