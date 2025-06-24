import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "ส่งข้อความสำเร็จ!",
        description: data.message,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "อีเมล",
      value: "student@university.ac.th",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "โทรศัพท์",
      value: "+66 98 765 4321",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      value: "กรุงเทพมหานคร, ประเทศไทย",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/student-profile",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  const socialLinks = [
    { icon: Github, url: "#", bgColor: "bg-slate-800", hoverColor: "hover:bg-slate-700" },
    { icon: Linkedin, url: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { icon: Instagram, url: "#", bgColor: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
    { icon: Facebook, url: "#", bgColor: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">ติดต่อฉัน</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            หากคุณสนใจในผลงานของฉันหรือต้องการร่วมงานกัน กรุณาติดต่อมาได้เลย!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">ข้อมูลติดต่อ</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                    <info.icon className={`${info.iconColor} text-xl`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{info.title}</h4>
                    <p className="text-slate-600">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-4">ติดตามฉันได้ที่</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 ${social.bgColor} text-white rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-200`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">ส่งข้อความหาฉัน</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ชื่อ</FormLabel>
                          <FormControl>
                            <Input placeholder="ชื่อของคุณ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>นามสกุล</FormLabel>
                          <FormControl>
                            <Input placeholder="นามสกุลของคุณ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>อีเมล</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>หัวข้อ</FormLabel>
                        <FormControl>
                          <Input placeholder="หัวข้อข้อความ" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ข้อความ</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="เขียนข้อความของคุณที่นี่..."
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "กำลังส่ง..." : "ส่งข้อความ"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
