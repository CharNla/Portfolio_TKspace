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
    <section id="about" className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
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
              <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200">
                <Download className="mr-2" size={16} />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
