import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SPACE_COLORS, SPACE_EFFECTS } from "@/lib/space-theme-config";

interface SpaceCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glow?: boolean;
}

export default function SpaceCard({ 
  children, 
  className = "", 
  delay = 0, 
  hover = true,
  glow = false 
}: SpaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        bg-slate-900/60 ${SPACE_EFFECTS.backdropBlur} 
        ${SPACE_EFFECTS.borderGlow} rounded-xl p-6 
        ${hover ? 'hover:border-purple-400/40 transition-all duration-300' : ''}
        ${glow ? 'shadow-lg shadow-purple-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}