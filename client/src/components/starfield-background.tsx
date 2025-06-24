import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;

    // Create stars
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starfield.appendChild(star);
      }
    };

    // Create shooting stars
    const createShootingStars = () => {
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 100 + '%';
        shootingStar.style.animationDelay = Math.random() * 10 + 's';
        shootingStar.style.animationDuration = (Math.random() * 2 + 3) + 's';
        starfield.appendChild(shootingStar);
      }
    };

    createStars();
    createShootingStars();

    // Cleanup function
    return () => {
      if (starfield) {
        starfield.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div ref={starfieldRef} className="starfield" />
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
    </>
  );
}