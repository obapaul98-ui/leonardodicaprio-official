import React from 'react';

interface DarkBackdropProps {
  /** Photo of him shown large behind the content */
  image: string;
  /** Which side of the page the photo sits on */
  side: 'left' | 'right';
  /** CSS background-position for the photo */
  position?: string;
  /** Extra decoration for the opposite side */
  children?: React.ReactNode;
}

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/** Full-bleed dark backdrop with a large portrait on one side and a cinematic glow. */
export const DarkBackdrop: React.FC<DarkBackdropProps> = ({ image, side, position = '50% 18%', children }) => {
  const toward = side === 'left' ? 'to right' : 'to left';
  const mask = `linear-gradient(${toward}, #000 35%, transparent 98%), linear-gradient(to bottom, #000 55%, transparent 100%)`;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[#07090f]" />

      <div
        className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} w-full lg:w-[58%] h-[1100px]`}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: position,
          opacity: 0.85,
          filter: 'grayscale(0.15) contrast(1.12) brightness(1.05)',
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            side === 'left'
              ? 'radial-gradient(60% 55% at 12% 12%, rgba(242,140,40,0.26) 0%, transparent 60%), radial-gradient(45% 40% at 92% 85%, rgba(242,140,40,0.14) 0%, transparent 65%)'
              : 'radial-gradient(60% 55% at 85% 12%, rgba(242,140,40,0.30) 0%, transparent 60%), radial-gradient(45% 40% at 8% 90%, rgba(242,140,40,0.14) 0%, transparent 65%)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/35 via-transparent to-[#07090f]" />

      {/* Extra darkening on small screens, where the photo sits behind the text */}
      <div className="absolute inset-0 bg-black/40 lg:hidden" />

      {children}

      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    </div>
  );
};
