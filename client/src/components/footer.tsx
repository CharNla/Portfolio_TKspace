import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const quickLinks = [
    { href: 'home', label: 'หน้าแรก' },
    { href: 'about', label: 'เกี่ยวกับ' },
    { href: 'projects', label: 'ผลงาน' },
    { href: 'skills', label: 'ทักษะ' },
    { href: 'contact', label: 'ติดต่อ' },
  ];

  const socialLinks = [
    { icon: Github, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Facebook, url: "#" },
  ];

  const contactInfo = [
    { icon: Mail, text: "student@university.ac.th" },
    { icon: Phone, text: "+66 98 765 4321" },
    { icon: MapPin, text: "กรุงเทพมหานคร, ประเทศไทย" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-slate-400 mb-4">
              นักศึกษาปี 4 สาขาวิทยาการคอมพิวเตอร์ที่มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันและการออกแบบ UI/UX
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อ</h3>
            <div className="space-y-2 text-slate-400">
              {contactInfo.map((info, index) => (
                <p key={index} className="flex items-center">
                  <info.icon className="mr-2" size={16} />
                  {info.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">&copy; 2024 Portfolio. สงวนลิขสิทธิ์ทุกการใช้งาน.</p>
        </div>
      </div>
    </footer>
  );
}
