import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const socialLinks = [
    { icon: Github, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Facebook, url: "#" },
  ];

  const contactInfo = [
    { icon: Mail, text: "char.nla@university.ac.th" },
    { icon: Phone, text: "+66 98 765 4321" },
    { icon: MapPin, text: "Bangkok, Thailand" },
  ];

  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-12 relative border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Char Nla</h3>
            <p className="text-slate-400 mb-4">
              4th-year Computer Science student passionate about full-stack web development and UI/UX design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
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
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-slate-400">&copy; 2024 Char Nla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
