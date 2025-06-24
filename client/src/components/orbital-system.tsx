import { motion } from "framer-motion";

// Configuration for orbital rings
const ORBITAL_RINGS = [
  {
    id: "outer",
    width: 400,
    height: 400,
    borderColor: "border-purple-500/20",
    duration: 30,
    rotation: 360,
  },
  {
    id: "inner",
    width: 320,
    height: 320,
    borderColor: "border-pink-500/20",
    duration: 20,
    rotation: -360,
  },
] as const;

// Configuration for planets
const PLANETS = [
  {
    id: "purple",
    size: "w-4 h-4",
    gradient: "from-purple-400 to-purple-600",
    radius: 200,
    duration: 30,
    shadowColor: "rgba(147, 51, 234, 0.6)",
    glowSize: "15px",
  },
  {
    id: "blue",
    size: "w-2 h-2",
    gradient: "from-blue-400 to-blue-600",
    radius: 200,
    duration: 25,
    shadowColor: "rgba(59, 130, 246, 0.6)",
    glowSize: "10px",
  },
  {
    id: "pink",
    size: "w-3 h-3",
    gradient: "from-pink-400 to-pink-600",
    radius: 160,
    duration: 20,
    reverse: true,
    shadowColor: "rgba(236, 72, 153, 0.6)",
    glowSize: "12px",
  },
  {
    id: "cyan",
    size: "w-1.5 h-1.5",
    gradient: "from-cyan-400 to-cyan-600",
    radius: 80,
    duration: 10,
    shadowColor: "rgba(34, 211, 238, 0.6)",
    glowSize: "8px",
  },
] as const;

interface OrbitalRingProps {
  ring: typeof ORBITAL_RINGS[number];
}

function OrbitalRing({ ring }: OrbitalRingProps) {
  const { width, height, borderColor, duration, rotation } = ring;
  
  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`absolute border border-dashed ${borderColor} rounded-full pointer-events-none`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%)`,
      }}
    />
  );
}

interface PlanetProps {
  planet: typeof PLANETS[number];
}

function Planet({ planet }: PlanetProps) {
  const { size, gradient, radius, duration, reverse, shadowColor, glowSize } = planet;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className={`${size} bg-gradient-to-r ${gradient} rounded-full shadow-lg`}
        style={{
          animation: `orbit-${planet.id} ${duration}s linear infinite`,
          boxShadow: `0 0 ${glowSize} ${shadowColor}`,
        }}
      />
    </div>
  );
}

interface OrbitalSystemProps {
  className?: string;
}

export default function OrbitalSystem({ className = "" }: OrbitalSystemProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Orbital Rings */}
      {ORBITAL_RINGS.map((ring) => (
        <OrbitalRing key={ring.id} ring={ring} />
      ))}
      
      {/* Orbiting Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}
    </div>
  );
}

// Export configurations for external use
export { ORBITAL_RINGS, PLANETS };