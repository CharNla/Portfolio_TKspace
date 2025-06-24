import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SiFigma, SiBehance } from "react-icons/si";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Management System",
      description: "Full-stack web application for online store management with order processing and inventory control features.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      categoryLabel: "Web Application",
      categoryColor: "text-purple-400 bg-purple-900/30",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 2,
      title: "TaskFlow Mobile App",
      description: "Mobile application for task management and project progress tracking with real-time collaboration.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      categoryLabel: "Mobile App",
      categoryColor: "text-pink-400 bg-pink-900/30",
      technologies: ["React Native", "Firebase", "Redux"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 3,
      title: "Stellar Food Delivery App",
      description: "UI/UX design for a modern food delivery application with intuitive user experience and cosmic theme.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "design",
      categoryLabel: "UI/UX Design",
      categoryColor: "text-blue-400 bg-blue-900/30",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      links: [
        { icon: SiFigma, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 4,
      title: "Online Learning Platform",
      description: "Educational platform with interactive quizzes, progress tracking, and multimedia content delivery.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      categoryLabel: "Web Application",
      categoryColor: "text-purple-400 bg-purple-900/30",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 5,
      title: "Cosmic FitTracker",
      description: "Health and fitness tracking application with personalized workout plans and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      categoryLabel: "Mobile App",
      categoryColor: "text-pink-400 bg-pink-900/30",
      technologies: ["Flutter", "Dart", "SQLite"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 6,
      title: "Nebula Brand Identity",
      description: "Complete brand identity design and communication system for a space technology startup.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "design",
      categoryLabel: "UI/UX Design",
      categoryColor: "text-blue-400 bg-blue-900/30",
      technologies: ["Illustrator", "Photoshop", "Branding"],
      links: [
        { icon: SiBehance, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-800/30 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            A collection of projects I've developed during my studies and internship experiences.
          </p>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-purple-500/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-purple-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.categoryColor}`}>
                    {project.categoryLabel}
                  </span>
                  <div className="flex space-x-2">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
                      >
                        <link.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
