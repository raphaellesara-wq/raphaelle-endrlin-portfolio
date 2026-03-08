import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 4800);
    const t2 = setTimeout(() => setPhase("exit"), 6400);
    const t3 = setTimeout(onComplete, 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 1.5s ease-out" }}
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

      {/* Automation flow — vertical on mobile, wide on desktop */}
      <div className="w-full max-w-[500px] md:max-w-[1200px]">
        {/* Desktop version */}
        <svg viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto hidden md:block">
          {/* LEVEL 1 */}
          <g className="splash-node" style={{ animationDelay: "0.2s" }}>
            <rect x="450" y="10" width="100" height="52" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <circle cx="500" cy="36" r="9" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
            <circle cx="500" cy="36" r="4" fill="hsl(258,18%,60%)" fillOpacity="0.45" />
          </g>
          {/* Lines L1→L2 */}
          <line x1="475" y1="62" x2="300" y2="120" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "0.8s" }} />
          <line x1="525" y1="62" x2="700" y2="120" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "1.0s" }} />
          {/* LEVEL 2 */}
          <g className="splash-node" style={{ animationDelay: "1.2s" }}>
            <rect x="250" y="120" width="100" height="52" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <line x1="270" y1="140" x2="330" y2="140" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="270" y1="153" x2="318" y2="153" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.4s" }}>
            <rect x="650" y="120" width="100" height="52" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <path d="M692 133 L682 150 H696 L688 163 L708 143 H694 Z" stroke="hsl(155,30%,65%)" strokeWidth="1.2" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>
          {/* Lines L2→L3 */}
          <line x1="270" y1="172" x2="110" y2="225" stroke="hsl(348,30%,70%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "1.8s" }} />
          <line x1="330" y1="172" x2="410" y2="225" stroke="hsl(27,35%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.0s" }} />
          <line x1="670" y1="172" x2="590" y2="225" stroke="hsl(155,30%,65%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.2s" }} />
          <line x1="730" y1="172" x2="890" y2="225" stroke="hsl(258,18%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.4s" }} />
          {/* LEVEL 3 */}
          <g className="splash-node" style={{ animationDelay: "2.6s" }}>
            <rect x="60" y="225" width="100" height="52" rx="14" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" />
            <rect x="88" y="238" width="24" height="18" rx="4" stroke="hsl(27,35%,60%)" strokeWidth="1.1" fill="none" />
            <path d="M88 241 L100 251 L112 241" stroke="hsl(27,35%,60%)" strokeWidth="0.9" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "2.9s" }}>
            <rect x="360" y="225" width="100" height="52" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <circle cx="410" cy="251" r="10" stroke="hsl(348,30%,70%)" strokeWidth="1" fill="none" opacity="0.45" />
            <circle cx="410" cy="251" r="4.5" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.2s" }}>
            <rect x="540" y="225" width="100" height="52" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <line x1="560" y1="245" x2="620" y2="245" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
            <line x1="560" y1="258" x2="608" y2="258" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.5s" }}>
            <rect x="840" y="225" width="100" height="52" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <path d="M882 238 L874 253 H886 L880 265 L898 249 H886 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.9" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>
          {/* Pulses */}
          <circle r="4.5" fill="hsl(155,30%,65%)" opacity="0.55">
            <animateMotion dur="4s" repeatCount="indefinite" begin="3s" path="M500,36 L300,146 L110,251" />
          </circle>
          <circle r="4" fill="hsl(258,18%,60%)" opacity="0.45">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="3.5s" path="M500,36 L700,146 L890,251" />
          </circle>
          <circle r="3.5" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="4.2s" repeatCount="indefinite" begin="3.8s" path="M500,36 L300,146 L410,251" />
          </circle>
          {/* Particles */}
          <circle className="splash-particle" cx="20" cy="150" r="3" fill="hsl(258,18%,60%)" opacity="0.25" />
          <circle className="splash-particle" cx="980" cy="160" r="3" fill="hsl(155,30%,65%)" opacity="0.25" style={{ animationDelay: "0.7s" }} />
        </svg>

        {/* Mobile version — taller/vertical layout */}
        <svg viewBox="0 0 360 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block md:hidden">
          {/* LEVEL 1 */}
          <g className="splash-node" style={{ animationDelay: "0.2s" }}>
            <rect x="130" y="15" width="100" height="52" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <circle cx="180" cy="41" r="9" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
            <circle cx="180" cy="41" r="4" fill="hsl(258,18%,60%)" fillOpacity="0.45" />
          </g>
          {/* Lines L1→L2 */}
          <line x1="155" y1="67" x2="90" y2="135" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "0.8s" }} />
          <line x1="205" y1="67" x2="270" y2="135" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "1.0s" }} />
          {/* LEVEL 2 */}
          <g className="splash-node" style={{ animationDelay: "1.2s" }}>
            <rect x="40" y="135" width="100" height="52" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <line x1="60" y1="155" x2="120" y2="155" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="60" y1="168" x2="108" y2="168" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.4s" }}>
            <rect x="220" y="135" width="100" height="52" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <path d="M262 148 L252 165 H266 L258 178 L278 158 H264 Z" stroke="hsl(155,30%,65%)" strokeWidth="1.2" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>
          {/* Lines L2→L3 */}
          <line x1="60" y1="187" x2="40" y2="280" stroke="hsl(348,30%,70%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "1.8s" }} />
          <line x1="120" y1="187" x2="180" y2="280" stroke="hsl(27,35%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.0s" }} />
          <line x1="240" y1="187" x2="180" y2="280" stroke="hsl(155,30%,65%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.2s" }} />
          <line x1="300" y1="187" x2="320" y2="280" stroke="hsl(258,18%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.4s" }} />
          {/* LEVEL 3 */}
          <g className="splash-node" style={{ animationDelay: "2.6s" }}>
            <rect x="0" y="280" width="90" height="48" rx="12" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" />
            <rect x="24" y="292" width="20" height="15" rx="3" stroke="hsl(27,35%,60%)" strokeWidth="1.1" fill="none" />
            <path d="M24 295 L34 303 L44 295" stroke="hsl(27,35%,60%)" strokeWidth="0.9" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "2.9s" }}>
            <rect x="135" y="280" width="90" height="48" rx="12" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <circle cx="180" cy="304" r="8" stroke="hsl(348,30%,70%)" strokeWidth="1" fill="none" opacity="0.45" />
            <circle cx="180" cy="304" r="3.5" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.2s" }}>
            <rect x="270" y="280" width="90" height="48" rx="12" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <path d="M307 292 L301 304 H311 L306 314 L320 302 H310 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.9" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>
          {/* Lines L3→L4 */}
          <line x1="45" y1="328" x2="80" y2="390" stroke="hsl(27,35%,60%)" strokeWidth="1.3" strokeDasharray="5 6" opacity="0.35" className="splash-line" style={{ animationDelay: "3.4s" }} />
          <line x1="180" y1="328" x2="180" y2="390" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeDasharray="5 6" opacity="0.35" className="splash-line" style={{ animationDelay: "3.6s" }} />
          <line x1="315" y1="328" x2="280" y2="390" stroke="hsl(258,18%,60%)" strokeWidth="1.3" strokeDasharray="5 6" opacity="0.35" className="splash-line" style={{ animationDelay: "3.8s" }} />
          {/* LEVEL 4 */}
          <g className="splash-node" style={{ animationDelay: "4.0s" }}>
            <rect x="40" y="390" width="80" height="44" rx="11" stroke="hsl(155,30%,65%)" strokeWidth="1.8" fill="hsl(155,25%,96%)" />
            <line x1="55" y1="407" x2="105" y2="407" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <line x1="55" y1="420" x2="95" y2="420" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "4.2s" }}>
            <rect x="140" y="390" width="80" height="44" rx="11" stroke="hsl(27,35%,60%)" strokeWidth="1.8" fill="hsl(27,40%,96%)" />
            <circle cx="180" cy="412" r="7" stroke="hsl(27,35%,60%)" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="180" cy="412" r="3" fill="hsl(27,35%,60%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "4.4s" }}>
            <rect x="240" y="390" width="80" height="44" rx="11" stroke="hsl(348,30%,70%)" strokeWidth="1.8" fill="hsl(348,30%,97%)" />
            <line x1="255" y1="407" x2="305" y2="407" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <line x1="255" y1="420" x2="295" y2="420" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
          </g>
          {/* Pulses */}
          <circle r="4" fill="hsl(155,30%,65%)" opacity="0.55">
            <animateMotion dur="4s" repeatCount="indefinite" begin="3s" path="M180,41 L90,161 L45,304 L80,412" />
          </circle>
          <circle r="3.5" fill="hsl(258,18%,60%)" opacity="0.45">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="3.5s" path="M180,41 L270,161 L315,304 L280,412" />
          </circle>
          <circle r="3" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="4.2s" repeatCount="indefinite" begin="3.8s" path="M180,41 L90,161 L180,304 L180,412" />
          </circle>
          {/* Particles */}
          <circle className="splash-particle" cx="10" cy="220" r="2.5" fill="hsl(258,18%,60%)" opacity="0.2" />
          <circle className="splash-particle" cx="350" cy="350" r="2.5" fill="hsl(155,30%,65%)" opacity="0.2" style={{ animationDelay: "0.7s" }} />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
