import { motion } from "framer-motion";
import { Users, Lightbulb, MessageCircle, Clock } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript / TypeScript", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "React / Next.js", level: 85, color: "from-cyan-500 to-cyan-600" },
    { name: "Vue.js", level: 80, color: "from-green-500 to-green-600" },
    { name: "Node.js / Express", level: 75, color: "from-emerald-500 to-emerald-600" },
    { name: "Python / Django", level: 70, color: "from-yellow-500 to-yellow-600" },
    { name: "Database (MySQL, MongoDB)", level: 75, color: "from-orange-500 to-orange-600" },
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-purple-600" },
    { name: "Figma / Adobe XD", level: 90, color: "from-pink-500 to-pink-600" },
    { name: "Photoshop / Illustrator", level: 75, color: "from-indigo-500 to-indigo-600" },
    { name: "Git / GitHub", level: 80, color: "from-slate-500 to-slate-600" },
    { name: "Docker / AWS", level: 65, color: "from-teal-500 to-teal-600" },
    { name: "Agile / Scrum", level: 70, color: "from-red-500 to-red-600" },
  ];

  const softSkills = [
    {
      icon: Users,
      title: "การทำงานเป็นทีม",
      description: "ทำงานร่วมกับผู้อื่นได้ดี",
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "ความคิดสร้างสรรค์",
      description: "คิดนอกกรอบและแก้ปัญหา",
      color: "text-amber-600"
    },
    {
      icon: MessageCircle,
      title: "การสื่อสาร",
      description: "สื่อสารได้ชัดเจนและมีประสิทธิภาพ",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "การจัดการเวลา",
      description: "วางแผนและจัดการเวลาได้ดี",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">ทักษะของฉัน</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ทักษะและเทคโนโลยีที่ฉันได้เรียนรู้และใช้งานในการพัฒนาโครงการต่างๆ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">ทักษะทางเทคนิค</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">ดิไซน์และเครื่องมือ</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">ทักษะด้านอื่นๆ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200"
              >
                <skill.icon className={`${skill.color} text-3xl mx-auto mb-4`} size={32} />
                <h4 className="font-semibold text-slate-900 mb-2">{skill.title}</h4>
                <p className="text-sm text-slate-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
