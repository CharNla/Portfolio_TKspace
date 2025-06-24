import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SPACE_GRADIENTS, ANIMATION_DURATIONS } from "@/lib/space-theme-config";

interface SpaceButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function SpaceButton({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = "",
  disabled = false
}: SpaceButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 transform hover:scale-105";
  
  const variantClasses = {
    primary: `bg-gradient-to-r ${SPACE_GRADIENTS.button} text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25`,
    secondary: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
    ghost: "text-slate-400 hover:text-purple-400"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}