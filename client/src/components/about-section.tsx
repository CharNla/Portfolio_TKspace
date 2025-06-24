import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Download } from "lucide-react";

export default function AboutSection() {
  const experiences = [
    {
      icon: GraduationCap,
      title: "Bachelor's in Computer Science",
      company: "King Mongkut's University of Technology Thonburi (4th Year)",
      detail: "GPA: 3.45",
      bgColor: "bg-purple-900/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Code,
      title: "Front-end Developer Intern",
      company: "Digital Solutions Ltd. (3-month internship)",
      detail: "Developed web applications using React and TypeScript",
      bgColor: "bg-pink-900/30",
      iconColor: "text-pink-400"
    },
    {
      icon: Trophy,
      title: "Project Award",
      company: "First Place Winner - Hackathon 2023",
      detail: "Smart Campus Management System project",
      bgColor: "bg-blue-900/30",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-900/50 backdrop-blur-sm relative mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a 4th-year Computer Science student passionate about web development and UI/UX design, creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="University classroom with students learning computer science"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education & Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 ${exp.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <exp.icon className={`${exp.iconColor} text-xl`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-slate-300">{exp.company}</p>
                    <p className="text-sm text-slate-400">{exp.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Content - Always visible with z-index */}
                <div className="relative flex items-center z-10">
                  <motion.div
                    animate={{ 
                      y: [0, -2, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mr-3"
                  >
                    <Download size={20} />
                  </motion.div>
                  <span className="text-sm font-bold tracking-wide relative z-10">Download Resume</span>
                  
                  {/* Hover effect particles */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.2
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.6
                    }}
                  />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
