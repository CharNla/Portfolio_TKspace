import { motion } from "framer-motion";
import { GraduationCap, Code, Trophy, Download } from "lucide-react";

export default function AboutSection() {
  const experiences = [
    {
      icon: GraduationCap,
      title: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
      company: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (ปี 4)",
      detail: "เกรดเฉลี่ย: 3.45",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Code,
      title: "Front-end Developer Intern",
      company: "บริษัท Digital Solutions Ltd. (ฝึกงาน 3 เดือน)",
      detail: "พัฒนาเว็บแอปพลิเคชันด้วย React และ TypeScript",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Trophy,
      title: "รางวัลโครงการ",
      company: "รางวัลชนะเลิศ Hackathon 2023",
      detail: "โครงการ Smart Campus Management System",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">เกี่ยวกับฉัน</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ฉันเป็นนักศึกษาปี 4 สาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในการพัฒนาเว็บแอปพลิเคชันและการออกแบบ UI/UX
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">การศึกษาและประสบการณ์</h3>
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
                    <h4 className="font-semibold text-slate-900 mb-2">{exp.title}</h4>
                    <p className="text-slate-600">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                <Download className="mr-2" size={16} />
                ดาวน์โหลด Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
