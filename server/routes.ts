import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "ข้อความของคุณถูกส่งแล้ว! ขอบคุณที่ติดต่อมา" });
    } catch (error) {
      res.status(400).json({ success: false, message: "กรุณากรอกข้อมูลให้ครบถ้วน" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
