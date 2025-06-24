import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SiFigma, SiBehance } from "react-icons/si";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'web', label: 'เว็บแอปพลิเคชัน' },
    { id: 'mobile', label: 'มือถือ' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: "ระบบจัดการร้านค้าออนไลน์",
      description: "เว็บแอปพลิเคชันสำหรับจัดการร้านค้าออนไลน์ พร้อมระบบสั่งซื้อและจัดการสินค้า",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      categoryLabel: "เว็บแอปพลิเคชัน",
      categoryColor: "text-blue-600 bg-blue-100",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 2,
      title: "แอปจัดการงาน TaskFlow",
      description: "แอปพลิเคชันมือถือสำหรับจัดการงานและติดตามความคืบหน้าของโครงการ",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      categoryLabel: "แอปมือถือ",
      categoryColor: "text-green-600 bg-green-100",
      technologies: ["React Native", "Firebase", "Redux"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 3,
      title: "Food Delivery App Design",
      description: "การออกแบบ UI/UX สำหรับแอปพลิเคชันสั่งอาหารออนไลน์ที่ใช้งานง่ายและสวยงาม",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "design",
      categoryLabel: "UI/UX Design",
      categoryColor: "text-purple-600 bg-purple-100",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      links: [
        { icon: SiFigma, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 4,
      title: "ระบบจัดการเรียนรู้ออนไลน์",
      description: "แพลตฟอร์มสำหรับการเรียนรู้ออนไลน์ พร้อมระบบควิซและการติดตามผลการเรียน",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "web",
      categoryLabel: "เว็บแอปพลิเคชัน",
      categoryColor: "text-blue-600 bg-blue-100",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 5,
      title: "แอปติดตามสุขภาพ FitTracker",
      description: "แอปพลิเคชันสำหรับติดตามการออกกำลังกายและสุขภาพส่วนบุคคล",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "mobile",
      categoryLabel: "แอปมือถือ",
      categoryColor: "text-green-600 bg-green-100",
      technologies: ["Flutter", "Dart", "SQLite"],
      links: [
        { icon: Github, url: "#" },
        { icon: ExternalLink, url: "#" }
      ]
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "การออกแบบตัวตนแบรนด์และระบบการสื่อสารสำหรับธุรกิจสตาร์ทอัพ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: "design",
      categoryLabel: "UI/UX Design",
      categoryColor: "text-purple-600 bg-purple-100",
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
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">ผลงานของฉัน</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            รวมผลงานโครงการที่ฉันได้พัฒนาขึ้นระหว่างการศึกษาและฝึกงาน
          </p>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-blue-50'
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                        className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <link.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
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
