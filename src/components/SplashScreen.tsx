import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 4800);
    const t2 = setTimeout(() => setPhase("exit"), 6200);
    const t3 = setTimeout(onComplete, 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-1200 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8" }}
    >
      {/* Logo */}
      <div
        className={`mb-6 text-center transition-all duration-1000 ${
          phase === "logo" || phase === "exit" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <span
          className="block text-5xl md:text-6xl tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "hsl(348,30%,70%)", letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          R.E
        </span>
        <p className="text-xs md:text-sm text-muted-foreground mt-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}>
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Automation flow — extra large */}
      <div className="w-[98vw] max-w-[1100px] h-auto aspect-[900/340]">
        <svg viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

          {/* ═══ LEVEL 1: Root ═══ */}
          <g className="splash-node" style={{ animationDelay: "0.2s" }}>
            <rect x="400" y="15" width="100" height="56" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <circle cx="450" cy="43" r="9" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
            <circle cx="450" cy="43" r="4" fill="hsl(258,18%,60%)" fillOpacity="0.45" />
          </g>

          {/* ═══ Lines L1 → L2 ═══ */}
          <line x1="430" y1="71" x2="280" y2="140" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "0.8s" }} />
          <line x1="470" y1="71" x2="620" y2="140" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "1.0s" }} />

          {/* ═══ LEVEL 2: Two nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "1.2s" }}>
            <rect x="230" y="140" width="100" height="56" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <line x1="250" y1="160" x2="310" y2="160" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="250" y1="175" x2="298" y2="175" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.4s" }}>
            <rect x="570" y="140" width="100" height="56" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <path d="M612 155 L602 172 H616 L608 186 L628 164 H614 Z" stroke="hsl(155,30%,65%)" strokeWidth="1.2" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>

          {/* ═══ Lines L2 → L3 ═══ */}
          <line x1="255" y1="196" x2="130" y2="270" stroke="hsl(348,30%,70%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "1.8s" }} />
          <line x1="305" y1="196" x2="370" y2="270" stroke="hsl(27,35%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.0s" }} />
          <line x1="595" y1="196" x2="530" y2="270" stroke="hsl(155,30%,65%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.2s" }} />
          <line x1="645" y1="196" x2="770" y2="270" stroke="hsl(258,18%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.4s" }} />

          {/* ═══ LEVEL 3: Four nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "2.6s" }}>
            <rect x="80" y="270" width="100" height="56" rx="14" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" />
            <rect x="108" y="285" width="24" height="18" rx="4" stroke="hsl(27,35%,60%)" strokeWidth="1.1" fill="none" />
            <path d="M108 288 L120 298 L132 288" stroke="hsl(27,35%,60%)" strokeWidth="0.9" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "2.9s" }}>
            <rect x="320" y="270" width="100" height="56" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <circle cx="370" cy="298" r="10" stroke="hsl(348,30%,70%)" strokeWidth="1" fill="none" opacity="0.45" />
            <circle cx="370" cy="298" r="4.5" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.2s" }}>
            <rect x="480" y="270" width="100" height="56" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <line x1="500" y1="292" x2="560" y2="292" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
            <line x1="500" y1="307" x2="548" y2="307" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.5s" }}>
            <rect x="720" y="270" width="100" height="56" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <path d="M762 283 L754 298 H766 L760 310 L778 294 H766 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.9" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>

          {/* Traveling data pulses */}
          <circle r="4.5" fill="hsl(155,30%,65%)" opacity="0.55">
            <animateMotion dur="4s" repeatCount="indefinite" begin="3s" path="M450,43 L280,168 L130,298" />
          </circle>
          <circle r="4" fill="hsl(258,18%,60%)" opacity="0.45">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="3.5s" path="M450,43 L620,168 L770,298" />
          </circle>
          <circle r="3.5" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="4.2s" repeatCount="indefinite" begin="3.8s" path="M450,43 L280,168 L370,298" />
          </circle>
          <circle r="3" fill="hsl(27,35%,60%)" opacity="0.4">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="4s" path="M450,43 L620,168 L530,298" />
          </circle>

          {/* Floating particles */}
          <circle className="splash-particle" cx="30" cy="180" r="3" fill="hsl(258,18%,60%)" opacity="0.25" />
          <circle className="splash-particle" cx="870" cy="200" r="3" fill="hsl(155,30%,65%)" opacity="0.25" style={{ animationDelay: "0.7s" }} />
          <circle className="splash-particle" cx="450" cy="335" r="2.5" fill="hsl(348,30%,70%)" opacity="0.2" style={{ animationDelay: "1.2s" }} />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
